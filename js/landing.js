const {template, render, loadJsonLd} = require("sambal");
const {renderNavBar, renderContent} = require("./layout");
const {of} = require("rxjs");
const {map} = require("rxjs/operators");

const renderLanding = ({head, nav, headline, description, content}) => {
    return template`
        <!doctype html>
        <html>
            <head>
                ${head}
            </head>
            <body>
                ${nav}
                <div class="container main">
                    <div class="text-center">
                        <div class="container">
                            <h1 class="display-3">${headline}</h1>
                            <h3>${description}</h3>
                        </div>
                    </div>
                    <div class="text-center">
                        ${content}
                    </div>
                </div>
            </body>
        </html>
    `;
};

function getRenderer(head) {
    return (props) => {
        return renderLanding({
            ...props,
            head: head,
            nav: renderNavBar(),
            content: renderContent(props)
        });
    };
}

function page$(head) {
    return ({path, params}) => {
        return of("content/landing.md")
        .pipe(loadJsonLd())
        .pipe(render(getRenderer(head)));
    };
}

module.exports = {
    landingPage$: page$
};