---
headline: Sambal
description: Re-imagining what a static website can do
---

# Sambal - a static site generator

Frontend developers are spoilt for choices when building a website.  That's both a good thing and a bad thing.  You frequently read about Javascript framework fatigue but there's also no denying that standing up a website from scratch today is much easier than it has ever been.  Many problems web developers used to face are now standardized and commonplace.  Remember when ajax was a novelty?  Now everybody uses fetch.  What about callback hell?  Now promise is a standard.  Javascript has gone through many positive evolution over the years and that also brings the topic back to Sambal, a Nodejs based static site generator.  Many might wonder why start another static site generator when there are literally hundreds available?

The guiding principle for Sambal was to build a static site generator around standardized well known concepts to minimize the need to introduce Sambal specific knowledge.  In summary, this is how Sambal differs from other static site generators:

|               | Sambal                                | Others                                        |
|---------------|---------------------------------------|-----------------------------------------------|
| Config        | 4, baseUrl, sitemap$, routes, asset$  | Many config options                           |
| Convention    | schema.org json-ld                    | Proprietary variables and directory structure |
| Extensibility | RxJs observable and operators         | Proprietary API                               |
| Template      | Javascript template literal           | Too many to list                              |
| Web component | HTML5 custom element                  | Various                                       |

Taking pride in NOT introducing anything proprietary.  Sambal is essentially a set of custom [RxJs](https://rxjs-dev.firebaseapp.com/) operators to help transform any data into HTML and schema.org metadata.  Rendering a HTML document takes just a few lines of code.

```js
const {template, render, pushJsonLd, toSchemaOrgJsonLd} = require("sambal");
const {of} = require("rxjs");

of({
    "familyName": "Smith",
    "givenName": "John",
    "description": "Making linked data useful",
    "sameAs": [
        "https://github.com/johnny123",
    ]
})
.pipe(pushJsonLd((d) => toSchemaOrgJsonLd(d, "Person"))) // add schema.org Person
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

That's it really.  The flexibility of RxJs allow anyone to extend Sambal just by writing their own RxJs operator without learning any Sambal API.  You can create observable from any source, local files, events, CMS APIs, etc.  You can also run the above piece of code inside a nodejs web server to make a server side render (SSR) website.  

