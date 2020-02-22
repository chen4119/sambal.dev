---
headline: Get started
description: Some description
category: Guides
order: 1
---

## Install

```ShellSession
npm install --save-dev sambal-cli
```

## Create sambal.config.js file

```js
import {from} from "rxjs";

async function route(store) {
    const content$ = store.content();
    // return an observable (or array of observables) of rendered obj
}

module.exports = {
    host: "https://myhost.com",                // REQUIRED
    contentPath: "content",                    // optional, root folder for your content.  Support markdown, yaml, or json format
    content$: from([{                          // optional, content observable.  Allow user to pull json data from anywhere
        headline:'Remove content',
        url: 'https://remotehost.com/id'
    }]),
    collections: [{                            // optional, list of collection definitions
        name: "blogsByAuthor",
        groupBy: "author",
        sortBy: [{field: "dateCreated", order: "desc"}]
    }],
    route$: route                              // REQUIRED, takes an instance of LinkedDataStore and returns an observable (or array of observables) of rendered obj
};
```

## Create boilerplate schema.org types

```ShellSession
npx sambal schema.org person person.yml

npx sambal schema.org blogposting blogpost.yml
```

## Index content into collections you defined

```ShellSession
npx sambal index
```

## Generate website into public folder

```ShellSession
npx sambal build
```
