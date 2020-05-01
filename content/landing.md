---
headline: Sambal
description: A static site generator based on RxJs and linked data
---

```ShellSession
$ npm install --save-dev sambal
```

<p class="lead topmargin">Load json-ld from URL</p>

```js
const {from} = require("rxjs");
const {loadJsonLd} = require("sambal");

from(['https://www.imdb.com/title/tt1843866'])
.pipe(loadJsonLd());
```

<p class="lead topmargin">Render schema.org metadata and HTML</p>

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