---
headline: Sambal
description: A linked data static site generator
---

```ShellSession
$ npm install --save-dev sambal-cli

$ mkdir content/blogs

$ touch content/blogs/hello-world.md

```

<p class="lead text-muted">Edit content/blogs/hello-world.md</p>

```md
---
headline: My first blogpost!
description: Starting my blog with Sambal
author:
    "@id": https://chen4119.me/about.html#about
keywords: ["sambal", "jamstack"]
---
Hello world
```

```bash
touch sambal.config.js

touch blog.js
```

<p class="lead text-muted">Edit sambal.config.js</p>

```js
const {blogPost$} = require("./blog");

async function route(store) {
    const content$ = store.content();
    return [
        blogPost$(content$)
    ];
}

module.exports = {
    host: "https://myhost.com",
    contentPath: "content",
    route$: route
};

```

<p class="lead text-muted">Edit blog.js</p>

```js

const {template, render, pushSchemaOrgJsonLd, toSchemaOrgJsonLd} = require("sambal");

const renderBlogPost = ({css, headline, author, text}) => {
    // css in js
    const classes = css.style({
        author: {
            "font-style": "italic"
        }
    });
    return template`
        <html>
            <body>
                <h1>${headline}</h1>
                <p class=${classes.author}>By ${author.name}</p>
                ${text}
            </body>
        </html>
    `;
};

function page$(content$) {
    return content$
    .pipe(pushSchemaOrgJsonLd((d) => toSchemaOrgJsonLd(d, "BlogPosting")))
    .pipe(render(renderBlogPost));
}

module.exports = {
    blogPost$: page$
};

```

<p class="lead text-muted">Run sambal build to generate static html files in public folder</p>

```bash
npx sambal build
```


<p class="lead text-muted">Your first blog post, complete with schema.org metadata and collision free css class names, generated at public/blogs/hello-world/index.html.  </p>

```html
<html>
  <head>
    <style>
      .author-0-0-1 {
        font-style: italic;
      }
    </style>
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@graph": [
          {
            "headline": "My first blogpost!",
            "description": "Starting my blog with Sambal",
            "author": { "@id": "about#about" },
            "keywords": ["sambal", "jamstack"],
            "text": "<p>Hello world</p>\n",
            "url": "https://myhost.com/blogs/hello-world",
            "@id": "_:1",
            "@context": "http://schema.org",
            "@type": "BlogPosting"
          },
          {
            "name": "Wan Chun Chen",
            "email": "chen4119@hotmail.com",
            "familyName": "Chen",
            "givenName": "Wan Chun",
            "description": "Javascript developer.  Making linked data useful.",
            "sameAs": [
              "https://github.com/chen4119",
              "https://www.linkedin.com/in/wan-chun-chen-9a95a010"
            ],
            "url": "https://chen4119.me/about",
            "@id": "about#about",
            "@type": "Person"
          }
        ]
      }
    </script>
  </head>
  <body>
    <h1>My first blogpost!</h1>
    <p class="author-0-0-1">By Wan Chun Chen</p>
    <p>Hello world</p>
  </body>
</html>
```
