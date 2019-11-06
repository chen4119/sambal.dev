---
headline: Get started
description: Some description
id: get-started
order: 1
---

__Install__

```js
npm install --save-dev sambal-ssg
```

__Create a markdown file__

Create a person.md file with the following content

```md
---
name: John Smith
email: john.smith@hotmail.com
gender: Male
description: John Smith's profile
sameAs:
  - https://github.com/johnsmith
---
```

__Make a static web page with schema.org metadata__

Create a generate.js file with the following content

```js

const {localFileMultiCast, render, Packager, pushSchemaOrgJsonLd, template} = require("sambal-ssg");

const packager = new Packager("./public");

const renderPerson = ({name}) => {
    return template`
        <html>
            <head>
                <title>My first page</title>
            </head>
            <body>
                <h1>Hello world from ${name}</h1>
            </body>
        </html>
    `;
};

const source = localFileMultiCast("person.md");

source
.pipe(pushSchemaOrgJsonLd("Person"))
.pipe(render(renderPerson))
.subscribe(packager.route("person.html"));

source.connect(); // connect() to start multicast
```

Run it

```js
node generate.js
```

public/person.html is generated!

```html
<html>
  <head>
    <title>My first page</title>
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "email": "john.smith@hotmail.com",
            "gender": "Male",
            "description": "John Smith's profile",
            "name": "John Smith",
            "sameAs": ["https://github.com/johnsmith"],
            "@id": "_:1"
          }
        ]
      }
    </script>
  </head>
  <body>
    <h1>Hello world from John Smith</h1>
  </body>
</html>
```
