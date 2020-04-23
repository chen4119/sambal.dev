---
headline: Sambal
description: Re-imagining what a static website can do
---

# About

Building a website has gotten really complicated over the years.  Back in the late 90s, there was only one way to do it.  Open up a text editor and write your HTML.  Today, developers need to consider whether they should build a static or SSR (server side render) website?  If static, does it need to be SPA (Single Page Application)?  If SPA, which UI library should they use?  If not, which static site generator should they use?  The options are endless and that begs the question, where does Sambal fit in the whole spectrum of website building technology?

Sambal is a static site generator that bridges the divde between static website and server rendered website.  Rendering HTML is essentially implementing a data pipeline transforming json data into HTML using RxJs.  For example,

```js
const {of} = require("rxjs");
const {render, template} = require("sambal");

of({headline: "hello world"})
.pipe(render(({headline}) => {
    return template`
        <html>
            <body>
                <h1>${headline}</h1>
            </body>
        </html>
    `;
}));
```

That's it.  Render is simply an RxJs operator that executes a pure render function.  The beauty of this is that you can run it in any context.  Inside a nodejs web server for server side render or a nodejs CLI script for static site generation.  The benefit of building on top of RxJs is that it allow for easy extensibility.  Sambal is mostly a collection of RxJs operators.  Any contributor can write their own RxJs operator to extend Sambal.  Combining it with the rich set of built-in operators in RxJs will allow users to build powerful asynchronous data pipeline to render HTML or json-ld schema.org metadata.

Sambal helps you build SEO friendly website by natively supporting the schema.org vocabularies and json-ld (json linked data) format.  As metadata becomes increasing important to help your content get discovered, developers need to ensure the quality of their metadata is as accurate as the HTML.  The guiding priinciple for Sambal is that metadata and HTML should be generated from the same data source.  Don't "hack" it in after you created your HTML document.  It takes one line to generate jsonld metadata in Sambal.

```js
const {template, render, pushSchemaOrgJsonLd, toSchemaOrgJsonLd} = require("sambal");
const {of} = require("rxjs");

of({
    "familyName": "Smith",
    "givenName": "John",
    "description": "Making linked data useful",
    "sameAs": [
        "https://github.com/johnny123",
    ]
})
.pipe(pushSchemaOrgJsonLd((d) => toSchemaOrgJsonLd(d, "Person"))) // add schema.org Person
.pipe(render(({familyName, givenName}) => {
    return template`
        <html>
            <body>
                <h1>I am ${givenName} ${familyName}</h1>
            </body>
        </html>
    `;
}));
```

Other exciting features supported by Sambal:

1. CSS in JS
2. Automatic Javascript bundling using Webpack
3. Index data into collections locally


### What Sambal is not

1. Not a UI library.  Sambal is unopinionated about which UI library you use as long as you can bundle it into a HTML5 custom element

2. Not a template library.  No new template syntax to learn.  Sambal template is just javascript string literal
