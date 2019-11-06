---
headline: Sambal and RxJs
description: Some description
id: sambal-and-rxjs
order: 1
---

# Sambal and RxJs

Our data tend to be scattered all over the web these days.  Documents in Google Drive, photos in Instagram, code in GitHub, etc.  As a content creator, it'll be nice to leverage all these data regardless of which platform it's stored in.  A design goal for Sambal static site generator is to provide an easy and well known way to link disparate data from anywhere into a format you can use to generate a webpage.  That's why Sambal builds on top of RxJs to load and transform data.  Every Sambal operator is essentially an RxJs operator so you can take full advantage of existing [RxJS operators](https://rxjs-dev.firebaseapp.com/guide/operators).  Here are some stuff that's possible with RxJs.

__Combining data from different source__

```js
forkJoin({
    jsonld: fromSchemaOrg("jsonld/site.yml"),
    navigation: renderNavigation({navigation: navigation})
})
.subscribe(d => console.log(d));

```

__Multicast data to different streams without loading twice__

```js

```

__Transforming a regular JSON to schema.org json-ld__

```js

```

__Paginate data__

```js

```



__localFileMultiCast__

Loads a local json, markdown, or yaml file or directory and pipes it to a connectable multicast.  If data is json-ld, automatically fetch links.

post1.yml

```yml
headline: My first blogpost
description: Sambal is awesome!
```

Load post1.yml

```js
const source = localFileMultiCast("post1.yml");
source.subscribe(d => console.log(d));
source.connect(); // connect() start the multicast
```

Load all files in blogs directory

```js
const source = localFileMultiCast("blogs/");
```


__aggregateBy__


groupAndPaginateBy
paginate

