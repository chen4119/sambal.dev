
const fs = require("fs");
const {doc$} = require("./js/doc");
const {landingPage$} = require("./js/landing");
const {aboutPage$} = require("./js/about");

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
        doc$(store, content$, head),
        landingPage$(content$, head),
        aboutPage$(content$, head)
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