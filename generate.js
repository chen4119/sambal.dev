const {of, defer, forkJoin} = require("rxjs");
const {map} = require("rxjs/operators");
const fs = require("fs");
const {schemaOrgMultiCast, layout, render, Packager, loadHtml, addSchemaOrgBreadcrumb} = require("sambal-ssg");
const {renderLayout, renderNavBar, renderTOC, GuideTableOfContent, renderContent} = require("./js/templates");




const packager = new Packager("http://localhost", "./public");
packager
.clean()
.copy("node_modules/@fortawesome/fontawesome-free")
.copy("node_modules/jquery")
.copy("node_modules/bootstrap")
.copy("node_modules/prismjs");



const siteSource = schemaOrgMultiCast("pages");


siteSource
.pipe(addSchemaOrgBreadcrumb("guide"))
.pipe(layout({
    head: loadHtml("fragments/head.html"),
    nav: renderNavBar,
    toc: renderTOC(GuideTableOfContent),
    content: renderContent
}))
.pipe(render(renderLayout))
.subscribe(packager.route("index.html"));


siteSource.connect();



