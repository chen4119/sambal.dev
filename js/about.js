const {template, render, pushSchemaOrgJsonLd, toSchemaOrgJsonLd, loadJsonLd} = require("sambal");
const {renderNavBar, renderContent} = require("./layout");
const {of} = require("rxjs");
const {map} = require("rxjs/operators");

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

function page$(head) {
    return ({path, params}) => {
        return of("content/about.md")
        .pipe(loadJsonLd())
        .pipe(map(d => {
            d.url = path;
            return d;
        }))
        .pipe(render(getRenderer(head)));
    };
}

module.exports = {
    aboutPage$: page$
};