const {template, render, pushSchemaOrgJsonLd, toSchemaOrgJsonLd} = require("sambal");
const {renderLayout, renderNavBar, renderContent} = require("./layout");
const {from} = require("rxjs");
const {filter, map, toArray} = require("rxjs/operators");
const url = require("url");

const CATEGORY_INTRO = "Introduction";
const CATEGORY_GUIDE = "Guides";
const CATEGORY_RXJS_OPERATOR = "RxJs Operators";
const CATEGORY_CLASS = "Classes";
const CATEGORY_CLI = "CLI";

const renderTOC = async (toc, pageId) => {
    const groups = await Promise.all(toc);
    return template`
        <nav class="nav flex-column">
            ${groups.map(group => template`
                <div class="toc-section">
                    <span class="font-weight-bold">${group.category}</span>
                    <ul class="nav toc-list flex-column">
                        ${group.items.map(item => template`
                            <li class="nav-item ${item.url === pageId ? 'active' : null}">
                                <a href="${url.parse(item.url).pathname}">${item.headline}</a>
                            </li>
                        `)}
                    </ul>
                </div>
            `)}
        </nav>
    `;
};

function getPageRenderer(head, toc) {
    return (props) => {
        return renderLayout({
            head: head,
            nav: renderNavBar(),
            toc: renderTOC(toc, props.url),
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
        getCategory(CATEGORY_INTRO, store.collection("docs", {category: CATEGORY_INTRO})),
        getCategory(CATEGORY_GUIDE, store.collection("docs", {category: CATEGORY_GUIDE})),
        getCategory(CATEGORY_RXJS_OPERATOR, store.collection("docs", {category: CATEGORY_RXJS_OPERATOR})),
        getCategory(CATEGORY_CLASS, store.collection("docs", {category: CATEGORY_CLASS})),
        getCategory(CATEGORY_CLI, store.collection("docs", {category: CATEGORY_CLI}))
    ];
}

function renderDoc(store, content$, head) {
    const toc = getTOC(store);
    return content$
    .pipe(filter(d => {
        // console.log(d.url.startsWith("https://sambal.dev/doc"));
        return d.url.startsWith("https://sambal.dev/doc");
    }))
    .pipe(render(getPageRenderer(head, toc)));
}

module.exports = {
    renderDoc: renderDoc
};