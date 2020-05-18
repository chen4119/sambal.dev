const {template, render, pushJsonLd, toSchemaOrgJsonLd, loadJsonLd} = require("sambal");
const {renderLayout, renderNavBar, renderContent} = require("./layout");
const {of} = require("rxjs");
const {map} = require("rxjs/operators");

const renderTOC = async (css, toc, pageId) => {
    const classes = css.style({
        nonactive: {
            "font-size": "90%",
            "color": "rgba(0,0,0,.65)",
            "text-decoration": "none"
        },
        active: {
            "font-weight": 500,
            "color": "rgba(0,0,0, 1)"
        }
    });

    const groups = await Promise.all(toc);
    return template`
        <nav class="nav flex-column">
            ${groups.map(group => template`
                <div class="toc-section">
                    <span class="font-weight-bold">${group.category}</span>
                    <ul class="nav flex-column">
                        ${group.items.map(item => template`
                            <li class="nav-item">
                                <a class="${item.url === pageId ? classes.active : classes.nonactive}" href="${item.url}">${item.headline}</a>
                            </li>
                        `)}
                    </ul>
                </div>
            `)}
        </nav>
    `;
};

const renderDoc = ({headline, description, text}) => {
    return template`
        <h2>${headline}</h2>
        <p class="lead">${description}</p>
        ${text}
    `;
};

function getRenderer(head, toc, contentRenderer) {
    return (props) => {
        return renderLayout({
            head: head,
            nav: renderNavBar(),
            toc: renderTOC(props.css, toc, props.url),
            content: contentRenderer(props)
        });
    };
}

function page$(head, toc) {
    return ({path, params}) => {
        const loader = of(`./content/${path}.md`)
        .pipe(loadJsonLd())
        .pipe(pushJsonLd(d => toSchemaOrgJsonLd(d, "SoftwareSourceCode")))
        .pipe(map(d => {
            d.url = path;
            return d;
        }));

        if (path.indexOf("/guides/") > 0) {
            return loader.pipe(render(getRenderer(head, toc, renderContent)));
        } else {
            return loader.pipe(render(getRenderer(head, toc, renderDoc)));
        }
    };
}

module.exports = {
    doc$: page$
};