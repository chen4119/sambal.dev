---
"@type": Article
headline: Rendering HTML
articleSection: Core concept
position: 3
---

There are many great UI libraries, HTML template engines you can use to generate HTML.  Sambal is designed to get out of your way so you can use any method you're most comfortable with.  Out of the box, Sambal supports React and Javascript template literal to generate HTML but as long as your renderPage function return HTML string or a promise that resolves to HTML string, it'll work!

# React

```jsx
import React from "react";
export function renderPage({ page, options }) {
    const { mainEntity } = page;
    return (
        &lt;html&gt;
            &lt;head&gt;
                &lt;script src="page1"&gt;&lt;/script&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;BlogPost post={mainEntity}&gt;
            &lt;/body&gt;
        &lt;/html&gt;
    );
}
```


# Javascript template literal

```js
import { template } from "sambal";
export async function renderPage({ page, options }) {
    const { mainEntity } = page;
    return template`
        &lt;html&gt;
            &lt;head&gt;
                &lt;script src="page1"&gt;&lt;/script&gt;
            &lt;/head&gt;
            &lt;body&gt;
                ${renderBlogPost(mainEntity)}
            &lt;/body&gt;
        &lt;/html&gt;
    `;
}
```

# Auto render ld+json, Facebook and Twitter meta tags

Since Sambal uses schema.org as the content model, it can easily derive ld+json, Facebook and Twitter meta tags for every webpage.  No need to transform or map your data like you would with other static site generators.  You get SEO for free by using schema.org!


# Bundling Javascript, css, and other assets

Static HTML sites are great but eventually you'll need some client side Javascript to spice up your site.  Sambal uses [Webpack](https://webpack.js.org/) internally to bundle Javascript. To include js bundle in your webpage, provide a mapping of bundle name to entry filepath in sambal.entry.js browserBundle config.

```js
export const browserBundle = {
    entry: {
        bundle1: "./src/bundle1.js",
        bundle2: "./src/bundle2.js",
    }
};
```

To include a bundle in your webpage, just add a script tag using the bundle name as the src.  Sambal will automatically substitute it with the real file path.

```html
&lt;script src="bundle1"&gt;&lt;/script&gt;
```

