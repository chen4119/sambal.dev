const {template, render, pushSchemaOrgJsonLd, toSchemaOrgJsonLd} = require("sambal");
const {renderLayout, renderNavBar, renderContent} = require("./layout");
const {from} = require("rxjs");
const {filter, map, toArray} = require("rxjs/operators");
const url = require("url");

const CATEGORY_GUIDE = "Guides";
const CATEGORY_RXJS_OPERATOR = "RxJs Operators";
const CATEGORY_CLASS = "Classes";
const CATEGORY_CLI = "CLI";

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
                                <a class="${item.url === pageId ? classes.active : classes.nonactive}" href="${url.parse(item.url).pathname}">${item.headline}</a>
                            </li>
                        `)}
                    </ul>
                </div>
            `)}
        </nav>
    `;
};

function getRenderer(head, toc) {
    return (props) => {
        return renderLayout({
            head: head,
            nav: renderNavBar(),
            toc: renderTOC(props.css, toc, props.url),
            content: renderContent(props)
        });
    };
}

function getCategory(category, obs$) {
    return obs$
    .pipe(toArray())
    .pipe(map(items => ({category: category, items: items})))
    .toPromise();
}

function getTOC(store) {
    return [
        getCategory(CATEGORY_GUIDE, store.collection("docs", {category: CATEGORY_GUIDE})),
        getCategory(CATEGORY_RXJS_OPERATOR, store.collection("docs", {category: CATEGORY_RXJS_OPERATOR})),
        getCategory(CATEGORY_CLASS, store.collection("docs", {category: CATEGORY_CLASS})),
        getCategory(CATEGORY_CLI, store.collection("docs", {category: CATEGORY_CLI}))
    ];
}

function page$(store, content$, head) {
    const toc = getTOC(store);
    return content$
    .pipe(filter(d => d.url.startsWith("https://sambal.dev/doc")))
    .pipe(render(getRenderer(head, toc)));
}

module.exports = {
    doc$: page$
};