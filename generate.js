const {of, defer, forkJoin, from} = require("rxjs");
const {map, toArray, mergeAll} = require("rxjs/operators");
const fs = require("fs");
const {localFileMultiCast, render, Packager, loadHtml, pushSchemaOrgJsonLd, template, groupAndPaginateBy} = require("sambal-ssg");
const {getPageRenderer, formatLink} = require("./js/templates");

const HOST = "https://sambal.dev";
const head = loadHtml("fragments/head.html");

const packager = new Packager("./public");
packager
.clean()
.copy("node_modules/@fortawesome/fontawesome-free")
.copy("node_modules/jquery")
.copy("node_modules/bootstrap")
.copy("node_modules/prismjs");

const CATEGORY_INTRO = "Introduction";
const CATEGORY_GUIDE = "Guides";
const CATEGORY_RXJS_OPERATOR = "RxJs Operators";

const sources = [
    {category: CATEGORY_INTRO, observable: localFileMultiCast("pages/intro")},
    {category: CATEGORY_GUIDE, observable: localFileMultiCast("pages/guides")},
    {category: CATEGORY_RXJS_OPERATOR, observable: localFileMultiCast("pages/rxjs-operators")},
];

function withFolderAndUrl(category, observable) {
    let folder = "";
    switch (category) {
        case CATEGORY_RXJS_OPERATOR:
            folder = "rxjs-operators";
            break;
        default:
            folder = category;
            break;
    }
    return observable.pipe(map(data => ({
        ...data,
        folder: folder,
        url: `${HOST}/${formatLink({folder: folder, id: data.id})}`
    })));
}

function sortPages({category, observable}) {
    return withFolderAndUrl(category, observable)
    .pipe(toArray())
    .pipe(map(pages => {
        pages.sort((a, b) => a.order - b.order);
        return {
            category: category,
            items: pages
        };
    }))
    .toPromise();
}

const tableOfContent = sources.map(source => sortPages(source));

from(sources.map(s => withFolderAndUrl(s.category, s.observable)))
.pipe(mergeAll())
.pipe(pushSchemaOrgJsonLd("WebPage"))
.pipe(render(getPageRenderer(head, tableOfContent)))
.subscribe(packager.route(formatLink));

sources.forEach(s => s.observable.connect());






