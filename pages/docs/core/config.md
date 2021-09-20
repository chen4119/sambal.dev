---
"@type": Article
headline: Configuration
articleSection: Core concept
position: 1
---

# Project structure

Below is a skeleton of how a Sambal project would look like.

```text
/.sambal              // reserved for Sambal temporary files
/pages                // Root directory for pages of your website
/data                 // Root directory for json-ld
sambal.site.js        // website config file
sambal.entry.js       // ui entry file
package.json          // node.js package file
```

# sambal.site.js

Export site config

```js
export const siteConfig = {
    baseUrl: "https://sambal.dev", // REQUIRED
    collections: [],               // OPTIONAL - group and sort pages into collections
    imageTransforms: [],           // OPTIONAL - transform images
    theme: "sambal-ui-material",   // OPTIONAL - theme to use
    resolvers: []                  // OPTIONAL - custom fetchers to resolve uri
};

```

# sambal.entry.js

This is the entry file for Sambal to render html.  The only required function to implement is renderPage where page is a schema.org WebPage object and options is user defined options.  User may not need to implement this file if a theme is specified in sambal.site.js to render HTML.  If both a theme and sambal.entry.js exist, sambal.entry.js will take precedence over the theme.  

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
