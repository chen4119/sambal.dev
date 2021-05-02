---
"@type": TechArticle
identifier: core/rendering-html
headline: Rendering HTML
articleSection: Core concept
position: 2
---

There are many ways you can generate HTML and that's why by design, Sambal gets out of the way by simply offering a renderPage function.  This provides maximal flexibility in letting the you use the UI library you're most comfortable with.  Out of the box, Sambal supports React and Javascript template literal to generate HTML.

### React

```js
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


### Javascript template literal

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

# Bundling Javascript, css, and other assets

browserBundle is an object of multi Javascript entry filepath.  Sambal will bundle each entry file using webpack.  Author can include the bundle in their webpage by adding a script tag and using the entry name in the src attribute.  Sambal will replace the name with the real path in the generated webpage.
