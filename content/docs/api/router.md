---
"@type": APIReference
identifier: api/router
headline: Router
articleSection: API
position: 1
---

Router object passed to siteMap function in sambal.site.js

```js
function siteMap(router) => {
    // use router to define pages in your website
}
```

__Singe page functions:__

### aboutPage(path, mainEntity, options?)
### collectionPage(path, mainEntity, options?)
### contactPage(path, mainEntity, options?)
### itemPage(path, mainEntity, options?)
### landingPage(path, mainEntity, options?)        // Default path to "/"
### notFound(path)                                 // 404 page
### profilePage(path, mainEntity, options?)


__Options:__

```js
{
    canonical?,  // Boolean.  Set path as canonical if there are multiple
    page?        // Set extra props for the schema.org webpage
}
```

__Iterator functions:__

### iterateItems(src, getRoute)

### paginateCollection(collectionIRI, pageSize, getRoute)

### paginatePartition(collectionIRI, partitionKey, pageSize, getRoute)

