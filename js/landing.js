const {template, render, pushSchemaOrgJsonLd, toSchemaOrgJsonLd} = require("sambal");
const {renderNavBar, renderContent} = require("./layout");
const {filter, map, toArray} = require("rxjs/operators");

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
                            <h3 class="text-muted">${description}</h3>
                        </div>
                    </div>
                    <div class="text-center">
                        ${content}
                    </div>
                </main>
            </body>
        </html>
    `;
};

function getLandingRenderer(head) {
    return (props) => {
        return renderLanding({
            ...props,
            head: head,
            nav: renderNavBar(),
            content: renderContent(props)
        });
    };
}

function renderLandingPage(content$, head) {
    return content$
    .pipe(filter(d => {
        return d.url === "https://sambal.dev/landing";
    }))
    .pipe(render(getLandingRenderer(head)));
}

module.exports = {
    renderLandingPage: renderLandingPage
};