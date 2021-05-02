---
"@type": TechArticle
identifier: core/config
headline: Configuration
articleSection: Core concept
position: 1
---

# Project structure

Sambal is not very opinionated about your project folder structure.  The only requirement is that all local content such as your markdown, yaml, json, image files are created under the root /content folder because the relative path to each filename becomes the @id of the data.

Below is a skeleton of how a Sambal project would look like

```text
/.sambal              // reserved for Sambal temporary files
/content              // contain your markdown, yaml, json, image files
sambal.site.js        // website content config file
sambal.entry.js       // static site ui entry file
package.json          // node.js package file
```


Data does not need to be local.  Sambal can fetch a url or resolve a promise that return the data.


# sambal.entry.js

This is the entry file for Sambal to render html.  A skeleton file will look like this.

```js

// REQUIRED
export function renderPage({ page, options }) {
    // render complete html page
}

// OPTIONAL - author defined options.  Useful for theme developers to make their theme customizable
export const defaultOptions = {
    header: true,
    primaryColor: "#FFF",
    secondaryColor: "#DFE"
}

// OPTIONAL - Client side JS bundles to run on the browser.  Sambal will bundle each entry file using webpack
export const browserBundle = {
    entry: {
        page1: "path to page1 bundle entry file",
        page2: "path to page2 bundle entry file"
    }
};
```

# sambal.site.js

This file defines the sitemap and exports site config

```js

// REQUIRED
export function siteMap(router) {
    // use router to define routes
}

export const siteConfig = {
    baseUrl: "https://sambal.dev", // REQUIRED
    collections: [],               // OPTIONAL, group and sort content into collections
    theme: "sambal-ui-material"    // OPTIONAL, theme to use
};

```