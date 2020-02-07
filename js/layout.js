const {template} = require("sambal");

const DocumentationEntryPath = "introduction/get-started.html";

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
                        <a class="nav-link" href="${DocumentationEntryPath}">Docs</a>
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

module.exports = {
    renderLayout: renderLayout,
    renderNavBar: renderNavBar,
    renderContent: renderContent
};