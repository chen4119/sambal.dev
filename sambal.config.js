
const fs = require("fs");
const {from, forkJoin, of} = require("rxjs");
const {map, toArray, mergeMap, tap} = require("rxjs/operators");
const shelljs = require("shelljs");
const {SambalCollection, loadJsonLd} = require("sambal");
const {collections} = require("./js/constants");
const {doc$} = require("./js/doc");
const {landingPage$} = require("./js/landing");
const {aboutPage$} = require("./js/about");
const path = require("path");

function readFile(src) {
    return new Promise((resolve, reject) => {
        fs.readFile(src, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}

function sitemap() {
    const files = shelljs.ls("-R", "./content/doc");
    return from([
        '/',
        '/about',
        ...files.filter(f => f.endsWith(".md")).map(f => (`/doc/${f.substring(0, f.length - 3)}`))
    ]);
}

const head = readFile("fragments/head.html");

const CATEGORY_GUIDE = "Guides";
const CATEGORY_RXJS_OPERATOR = "RxJs Operators";
const CATEGORY_CLASS = "Classes";
const CATEGORY_CLI = "CLI";
const CATEGORY_FUNCTIONS = "Functions";

function getCategory(category, obs$) {
    return obs$
    .pipe(mergeMap(uri => forkJoin({
        url: of(uri),
        data: of(`./content/${uri}.md`)
        .pipe(loadJsonLd())
    })))
    .pipe(map(d => ({
        url: d.url,
        ...d.data
    })))
    .pipe(toArray())
    .pipe(map(items => ({category: category, items: items})))
    .toPromise();
}

function getTOC(store) {
    return [
        getCategory(CATEGORY_GUIDE, store.collection("docs", {category: CATEGORY_GUIDE})),
        getCategory(CATEGORY_RXJS_OPERATOR, store.collection("docs", {category: CATEGORY_RXJS_OPERATOR})),
        getCategory(CATEGORY_FUNCTIONS, store.collection("docs", {category: CATEGORY_FUNCTIONS})),
        getCategory(CATEGORY_CLASS, store.collection("docs", {category: CATEGORY_CLASS})),
        getCategory(CATEGORY_CLI, store.collection("docs", {category: CATEGORY_CLI}))
    ];
}

const store = new SambalCollection(collections);
const toc = getTOC(store);

module.exports = {
    baseUrl: 'https://sambal.dev',
    routes: [
        {path: '/', render: landingPage$(head)},
        {path: '/about', render: aboutPage$(head)},
        {path: '/doc/:category/:file', render: doc$(head, toc)}
    ],
    sitemap$: sitemap()
};
