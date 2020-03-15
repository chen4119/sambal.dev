---
headline: Sambal
description: Build fast and SEO friendly static sites
---

```ShellSession
$ npm install --save-dev sambal-cli
```

<p class="lead topmargin">Write your first blog post</p>

```ShellSession
$ mkdir content/blogs

$ touch content/blogs/hello-world.md
```

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

<p class="lead topmargin">Edit sambal.config.js</p>

```ShellSession
touch sambal.config.js
```

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

<p class="lead topmargin">Edit blog.js</p>

```ShellSession
touch blog.js
```

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

<p class="lead topmargin">Run sambal to generate static html files</p>

```bash
npx sambal build
```


<p class="lead topmargin">Your first blog post, complete with schema.org metadata!  </p>

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
