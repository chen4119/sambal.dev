---
"@type": Article
headline: Rendering HTML
description: Sambal automatically adds structured data meta tags to your HTML and is unopinionated about which UI library you use
articleSection: Core concept
position: 3
---

There are many great UI libraries and HTML template engines you can use to generate HTML so the most productive thing Sambal can do is simply get out of your way so you can use everything in your arsenal.  Out of the box, Sambal provides a [Javascript template literal](docs/api/template) to generate HTML but how you implement your renderPage function is up to you as long as it returns HTML string or a promise that resolves to HTML string.  That's all Sambal cares about.

# Javascript template literal

```js
import { template } from "sambal";
export async function renderPage({ page, options }) {
    const { mainEntity } = page;
    return template`
        &lt;html&gt;
            &lt;head&gt;
                &lt;script src="index.js"&gt;&lt;/script&gt;
            &lt;/head&gt;
            &lt;body&gt;
                ${renderBlogPost(mainEntity)}
            &lt;/body&gt;
        &lt;/html&gt;
    `;
}
```

# React

```jsx
import React from "react";
import ReactDOMServer from "react-dom/server";
export function renderPage({ page, options }) {
    const HtmlDoc = ({ mainEntity }) => (
        &lt;html&gt;
            &lt;head&gt;
                &lt;script src="index.js"&gt;&lt;/script&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;BlogPost post={mainEntity}&gt;
            &lt;/body&gt;
        &lt;/html&gt;
    );

    return ReactDOMServer.renderToString(
        &lt;HtmlDoc mainEntity={page.mainEntity} /&gt;
    );
}
```

# Nunjucks

```js
import nunjucks from "nunjucks";
export async function renderPage({ page, options }) {
    return nunjucks.render("myHtmlPage.html", page);
}
```

# You can SEO for free

You get SEO for free if you use schema.org json-ld!  No need to transform or map your data like you would with other static site generators.  Sambal will auto generate the title, description, Open Graph, Twitter and ld+json meta tags for your webpage like below.  The title is mapped to the "name" field of your schema.org main entity or "headline" in the case of a [CreativeWork](https://schema.org/CreativeWork) object.  Always consider to provide a meaningful name (or headline) and description for your main entity.

```html

&lt;title&gt;Title of my article&lt;/title&gt;

&lt;meta name="twitter:card" content="summary" /&gt;
&lt;meta name="twitter:title" content="Title of my article" /&gt;
&lt;meta name="twitter:description" content="Description about my article" /&gt;

    
&lt;meta name="og:url" content="https://example.com/article" /&gt;
&lt;meta name="og:title" content="Title of my article" /&gt;
&lt;meta name="og:description" content="Description about my article" /&gt;

&lt;script type="application/ld+json"&gt;
{
    "@context": {
        "@vocab": "https://schema.org",
        "@base": "https://example.com"
    },
    "@type": "BlogPosting",
    "headline": "Title of my article",
    "description": "Description about my article",
    ...other fields
}
&lt;/script&gt;
```


# Add client side javascript

Static HTML sites are great but eventually you'll need some client side Javascript to spice up your site.  Sambal uses [Webpack](https://webpack.js.org/) internally to bundle Javascript.  You just need to include it in your HTML document and Sambal will take care of bundling the Javascript and all it's dependencies.  Note that the src path will always be evaluated relative to your root project path.

Add script in &lt;head&gt;

```html
&lt;html&gt;
    &lt;head&gt;
        &lt;script src="index.js"&gt;&lt;/script&gt;
    &lt;/head&gt;
&lt;/html&gt;
```

Or at the end of &lt;body&gt; to prevent blocking.  You have 100% control of your HTML document.

```html
&lt;html&gt;
    &lt;body&gt;
        ...your HTML body
        &lt;script src="index.js"&gt;&lt;/script&gt;
    &lt;/body&gt;
&lt;/html&gt;
```

# Add CSS

There are 3 ways you can add css to your HTML.  In every case, Sambal will take care of bundling the CSS and all it's dependencies

1. Use stylesheet link

```html
&lt;html&gt;
    &lt;head&gt;
        &lt;link rel="stylesheet" href="styles.css"&gt;
    &lt;/head&gt;
&lt;/html&gt;
```

2. Inline &lt;style&gt;

```html
&lt;style&gt;
    h1 {
        color: red;
    }
&lt;/style&gt;
```

3. Import it from javascript file

```js
import "./styles.css"
```
