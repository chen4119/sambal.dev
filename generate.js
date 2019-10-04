const {of, defer, forkJoin} = require("rxjs");
const {map} = require("rxjs/operators");
const fs = require("fs");
const {localFileMultiCast, render, Packager, loadHtml, addSchemaOrgBreadcrumb, toSchemOrgJsonLd} = require("sambal-ssg");
const {getPageRenderer} = require("./js/templates");

const GuideTableOfContent = [
    {category: "Introduction", menu: [
        {label: "Another static site generator?", href: "#", id: "another-static-site-generator"},
        {label: "Getting started", href: "#"}
    ]},
    {category: "Guides", menu: [
        {label: "JsonLD and schema.org", href: "#"},
        {label: "Rendering", href: "#"},
        {label: "Deploying", href: "#"},
    ]}
];

const head = loadHtml("fragments/head.html");

const packager = new Packager("./public");
packager
.clean();
/*
.copy("node_modules/@fortawesome/fontawesome-free")
.copy("node_modules/jquery")
.copy("node_modules/bootstrap")
.copy("node_modules/prismjs");
*/


const siteSource = localFileMultiCast("pages");

siteSource
// .pipe(addSchemaOrgBreadcrumb("guide"))
.pipe(render(getPageRenderer(head, GuideTableOfContent)))
.pipe(map(d => ({...d, data: {...d.data, jsonld: d.data}})))
.pipe(toSchemOrgJsonLd("WebPage", {field: "data.jsonld"}))
.subscribe(packager.route("${id}.html"));


siteSource.connect();



