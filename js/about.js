const {template, render, pushSchemaOrgJsonLd, toSchemaOrgJsonLd, loadJsonLd} = require("sambal");
const {renderNavBar, renderContent} = require("./layout");
const {of} = require("rxjs");
const {map} = require("rxjs/operators");

const renderAbout = ({css, head, nav, content}) => {
    const classes = css.style({
        about: {
            '& table, th, td': {
                border: '1px solid black',
                padding: '6px 13px'
            },
            '& table': {
                'margin-top': '3rem',
                'margin-bottom': '3rem'
            }
        }
    });
    return template`
        <!doctype html>
        <html>
            <head>
                ${head}
            </head>
            <body>
                ${nav}
                <div class="container main ${classes.about}">
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
        .pipe(pushSchemaOrgJsonLd(d => toSchemaOrgJsonLd(d, "AboutPage")))
        .pipe(render(getRenderer(head)));
    };
}

module.exports = {
    aboutPage$: page$
};