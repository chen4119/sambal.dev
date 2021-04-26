---
"@type": TechArticle
headline: Get Started
---

```sh
npm install --save-dev sambal    // install sambal as a dev dependency

npx sambal init                  // create sambal.site.js, sambal.entry.js and sample content

npx sambal serve                 // start dev server on localhost:3000
```

For your convenience add the following sambal CLI commands to package.json

```json
"scripts": {
    "start": "sambal serve",    // start dev server
    "build": "sambal build",    // build static site in /public
    "theme": "sambal theme"     // bundle sambal.entry.js in /dist
}
```



