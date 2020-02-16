
const {from} = require("rxjs");
const fs = require("fs");
const {renderDoc} = require("./js/doc");
const {renderLandingPage} = require("./js/landing");

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

async function route(store) {
    const head = readFile("fragments/head.html");
    const content$ = store.content();
    return [
        renderDoc(store, content$, head),
        renderLandingPage(content$, head)
    ];
}

module.exports = {
    host: "https://sambal.dev",
    contentPath: "content",
    collections: [{
        name: "docs",
        groupBy: "category",
        sortBy: [{field: "order", order: "asc"}]
    }],
    route$: route
};