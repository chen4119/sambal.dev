---
headline: Sambal
description: A semantic static site generator
---


<p class="lead text-muted">Your blogpost.md</p>

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

<p class="lead text-muted">Use Sambal to tranform into HTML with schema.org metadata</p>


```js
const {jsonldMultiCast, render, Packager, pushSchemaOrgJsonLd, template} = require("sambal-ssg");

const packager = new Packager("./public");

const renderBlogPost = ({headline, author, text}) => {
    return template`
        <html>
            <body>
                <h1>${headline}</h1>
                <p>By ${author.name}</p>
                ${text}
            </body>
        </html>
    `;
};

// load markdown file and hydrate author from https://chen4119.me/about.html#about
const source = jsonldMultiCast("blogpost.md");

source
.pipe(pushSchemaOrgJsonLd("BlogPosting")) // transform data to schema.org BlogPosting
.pipe(render(renderBlogPost)) // render to HTML
.subscribe(packager.route("blogpost.html")); // create blogpost.html

source.connect(); // start RxJs multicast
```

<p class="lead text-muted">Your HTML file is created at public/blogpost.html</p>

```html
<html>
  <head>
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@graph": [
          {
            "headline": "My first blogpost!",
            "description": "Starting my blog with Sambal",
            "author": { "@id": "https://chen4119.me/about.html#about" },
            "keywords": ["sambal", "jamstack"],
            "text": "<p>Hello world</p>\n",
            "@id": "_:1",
            "@context": "http://schema.org",
            "@type": "BlogPosting"
          },
          {
            "name": "Wan Chun Chen",
            "email": "chen4119@hotmail.com",
            "familyName": "Chen",
            "gender": "Male",
            "givenName": "Wan Chun",
            "description": "Javascript developer.  Making linked data useful.",
            "sameAs": [
              "https://github.com/chen4119",
              "https://www.linkedin.com/in/wan-chun-chen-9a95a010"
            ],
            "url": "https://chen4119.me/about.html",
            "@id": "https://chen4119.me/about.html#about",
            "@type": "Person"
          }
        ]
      }
    </script>
  </head>
  <body>
    <h1>My first blogpost!</h1>
    <p>By Wan Chun Chen</p>
    <p>Hello world</p>
  </body>
</html>
```