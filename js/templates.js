const {template} = require("sambal-ssg");

const GuideTableOfContent = [
    {category: "Introduction", menu: [
        {label: "Another static site generator?", href: "#", id: "another-static-site-generator"},
        {label: "Getting started", href: "#"}
    ]},
    {category: "Guide", menu: [
        {label: "Linked data", href: "#"},
        {label: "Rendering", href: "#"},
        {label: "Deploying", href: "#"},
    ]}
];

const renderTOC = (toc) => {
    return ({jsonld}) => template`
        <nav class="nav flex-column">
            ${toc.map(item => template`
                <div class="toc-section">
                    <span class="font-weight-bold">${item.category}</span>
                    <ul class="nav toc-list flex-column">
                        ${item.menu.map(link => template`
                            <li class="nav-item ${link.id === jsonld.identifier ? 'active' : null}">
                                <a href="${link.href}">${link.label}</a>
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

const renderContent = ({jsonld}) => {
    return template`
        ${jsonld.text}
    `;
};


module.exports = {
    renderLayout: renderLayout,
    renderNavBar: renderNavBar,
    renderContent: renderContent,
    renderTOC: renderTOC,
    GuideTableOfContent: GuideTableOfContent
};