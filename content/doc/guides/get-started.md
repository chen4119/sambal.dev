---
headline: Get started
description: Get started
category: Guides
order: 1
---

## Install

```ShellSession
npm install --save-dev sambal-cli sambal webpack
```

## Create sambal.config.js file

```js
const {from, of} = require("rxjs");
const {render, template} = require("sambal");

function sitemap() {
    return from([
        '/first-blog',
    ]);
}

// render function returns an observable
function render({path, params}) {
    return of({headline: "hello world"})
    .pipe(render(({headline}) => {
        return template`
            <html>
                <body>
                    <h1>${headline}</h1>
                </body>
            </html>
        `;
    }));
}

function sitemap() {
    return from([
        '/',
        '/user/user123',
    ]);
}

module.exports = {
    routes: [
        {path: '/', render: render},                 // REQUIRED. Array of routes with expressjs style path and a render function  
        {path: '/user/:username', render: render}
    ],
    sitemap$: sitemap()                              // REQUIRED.  Observable of all possible urls in your website.  
};
```

## Create boilerplate schema.org types

```ShellSession
npx sambal schema.org person person.yml

npx sambal schema.org blogposting blogpost.yml
```

## Start dev server at http://localhost:3000 and reload browser if javascript changed

```ShellSession
npx sambal serve
```

## Generate static HTML documents into public folder

```ShellSession
npx sambal build
```
