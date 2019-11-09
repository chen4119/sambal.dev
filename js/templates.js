const {template} = require("sambal-ssg");

const formatLink = ({folder, id}) => `${folder}/${id}.html`.toLocaleLowerCase();

const renderTOC = async (toc, pageId) => {
    const groups = await Promise.all(toc);
    return template`
        <nav class="nav flex-column">
            ${groups.map(group => template`
                <div class="toc-section">
                    <span class="font-weight-bold">${group.category}</span>
                    <ul class="nav toc-list flex-column">
                        ${group.items.map(item => template`
                            <li class="nav-item ${item.id === pageId ? 'active' : null}">
                                <a href="${formatLink(item)}">${item.headline}</a>
                            </li>
                        `)}
                    </ul>
                </div>
            `)}
        </nav>
    `;
};

const renderLayout = ({head, nav, toc, content}) => {
    return template`
        <!doctype html>
        <html>
            <head>
                ${head}
            </head>
            <body>
                ${nav}
                <div class="container-fluid main">
                    <div class="row flex-xl-nowrap">
                        <div class="col-12 col-md-3 col-xl-2">
                            ${toc}
                        </div>
                        <main class="col-12 cod-md-9 col-xl-10">
                            ${content}
                        </main>
                    </div>
                </main>
            </body>
        </html>
    `;
};

const renderNavBar = () => {
    return template`
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="/">Sambal</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Docs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Reference</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
}

const renderContent = ({text}) => {
    return template`
        ${text}
    `;
};

function getPageRenderer(head, toc) {
    return (props) => {
        return renderLayout({
            head: head,
            nav: renderNavBar(),
            toc: renderTOC(toc, props.id),
            content: renderContent(props)
        });
    };
}

const renderLanding = ({head, nav, content}) => {
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
                            <h1 class="display-3">Sambal</h1>
                            <h3 class="text-muted">A semantic static site generator</h3>
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
            head: head,
            nav: renderNavBar(),
            content: renderContent(props)
        });
    };
}

module.exports = {
    getPageRenderer: getPageRenderer,
    getLandingRenderer: getLandingRenderer,
    formatLink: formatLink
};