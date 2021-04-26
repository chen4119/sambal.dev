---
"@type": TechArticle
identifier: core/sitemap
headline: Sitemap
articleSection: Core concept
position: 3
---

Sitemap is the mandatory function to implement in sambal.site.js.  Use the router to define all the pages of your website.

```js
function siteMap(router) => {
    // use router to define pages in your website
}
```

The mandatory arguments required for a router page are a path and a mainEntity.  MainEntity can be specified as a string, a json-ld object, or a promise that resolve into a json-ld object.  For example, to create an about page at https://example.com/about about John Smith


```js
// mainEntity as a relative path to /content/author/john-smith.yml file
// No file extension necessary, automatically resolves .yml, .md, .json
router.aboutPage("/about", "author/john-smith");

// mainEntity as a absolute url
router.aboutPage("/about", "https://host.com/author/john-smith.json");

// mainEntity as a jsonld object
router.aboutPage("/about", {
    "@id": "john-smith",
    "@type": "Person",
    name: "John Smith"
});

// mainEntity as a promise
router.aboutPage("/about", customFetch());

function async customFetch() {
    // implement custom fetcher to schema.org json-ld data
}
```

Internally Sambal will create this schema.org Webpage object that will eventually get passed to renderPage in sambal.entry.js as the page prop.  Note that Sambal will automatically populate the url of the page and also the mainEntityOfPage field of the mainEntity, which is the canonical url of the mainEntity.  If you have duplicate urls that points to the same mainEntity, you need to set which url is canonical.  

```js
{
    "@id": "/about",
    "@type": "AboutPage",             // Can be any sub type of Webpage. i.e.
    url: "/about",                    // Path you specified
    mainEntity: {
        "@id": "john-smith",          
        "@type": "Person",
        name: "John Smith",
        mainEntityOfPage: "/about"    // Auto populated by Sambal.  Canonical url for the mainEntity
    }
}
```

# Provide more detail about your webpage

The most important field in a webpage is the mainEntity.