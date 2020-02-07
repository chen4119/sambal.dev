---
headline: Get started
description: Some description
category: Introduction
order: 1
---

# Introduction

Sambal is essentially a library of custom RxJs operators so if you're already familiar with [RxJs](https://rxjs-dev.firebaseapp.com/), you'll feel right at home.  The main concept behind Sambal is framing your data as streams of json-ld data.  If you're not familiar with json-ld, no worries, we're no experts either.  Think of it as a superset of json, kinda like how Typescript is a superset of Javascript, so any json data will work.  It just won't have any semantic meaning.

The process of generating your static site simply consists of combining and transforming streams of json-ld data into a valid HTML document.  This is where RxJs excels and you also have the entire existing [RxJS operators](https://rxjs-dev.firebaseapp.com/guide/operators) in your disposal to create your data pipeline.  Let's get started.


## Install

```js
npm install --save-dev sambal-ssg
```


## Leveraging RxJs

__Merge a list of static page with a list of blog post__

```js
const {from} = require("rxjs");
const {mergeAll} = require("rxjs/operators");
const {jsonldMultiCast} = require("sambal-ssg");

const pageSource = jsonldMultiCast("pages");
const blogSource = jsonldMultiCast("blogs");

from([pageSource, blogSource])
.pipe(mergeAll())

pageSource.connect();
blogSource.connect();
```

__Multicast data to multiple data streams__

```js
const {bufferCount} = require("rxjs/operators");
const {jsonldMultiCast, render, paginate} = require("sambal-ssg");

const blogSource = jsonldMultiCast("blogs");

blogSource
.pipe(bufferCount(10))
.pipe(paginate())
.pipe(render(getBlogListRenderer()))

blogSource
.pipe(pushSchemaOrgJsonLd("BlogPosting"))
.pipe(render(getBlogPostRenderer()))

blogSource.connect();
```
