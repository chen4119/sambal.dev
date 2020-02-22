const {template, render, pushSchemaOrgJsonLd, toSchemaOrgJsonLd} = require("sambal");
const {renderNavBar, renderContent} = require("./layout");
const {filter, map, toArray} = require("rxjs/operators");

const renderAbout = ({head, nav, content}) => {
    return template`
        <!doctype html>
        <html>
            <head>
                ${head}
            </head>
            <body>
                ${nav}
                <div class="container main">
                    ${content}
                </div>
            </body>
        </html>
    `;
};

function getRenderer(head) {
    return (props) => {
        return renderAbout({
            ...props,
            head: head,
            nav: renderNavBar(),
            content: renderContent(props)
        });
    };
}

function page$(content$, head) {
    return content$
    .pipe(filter(d => d.url === "https://sambal.dev/about"))
    .pipe(render(getRenderer(head)));
}

module.exports = {
    aboutPage$: page$
};