---
"@type": Article
headline: Get Started
description: Get started with Sambal static site generator
articleSection: root
---

```bash
npm install --save-dev sambal    # install sambal as a dev dependency

npx sambal init                  # create sambal.site.js, sambal.entry.js and sample content

npx sambal serve                 # start dev server on localhost:3000
```

To generate your website

```bash
npx sambal build                 # build static site in /public
```

For your convenience add the following sambal CLI commands to package.json

```json
"scripts": {
    "start": "sambal serve",    // start dev server
    "build": "sambal build",    // build static site in /public
}
```



