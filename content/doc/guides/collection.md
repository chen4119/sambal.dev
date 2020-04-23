---
headline: Collection
description: Group and sort data into collection
category: Guides
order: 4
---

# Collection

Usually when you need to sort, filter, or partition your data, you would use some kind of a database.  However, there is always going to be a cost and scalability consideration associated with using a database.  Before choosing to use one, it is worth asking youself whether your data can be indexed at build time and stored statically on the local file system, generally the cheapest, most plentiful and lowest latency storage available.  You will be trading away flexibility for scalability and cost.  It might not work for everyone but there are plenty of use cases where it is good enough.

For example, a blog.  At build time, you can index all your blog entries by date created, by the author, or even by the tags used.  At run time, you don't need to query a database because it is already indexed locally.  The downside is if you add, update, or remove a blog entry, you will need to re-index your content and build your website again.

SambalCollection is the build time data indexer for this purpose.  It can sort and group any json data into collections you defined.  A collection schema is defined as such.  Name of the collection is required then you can specify your sort order(s) or partition key(s).

<pre>
<code>
{
    name: string,                                       // REQUIRED - Name of your collection
    groupBy?: string | string[],                        // OPTIONAL - Group by fieldname(s). Field value has to be string, number, date, or an array of one of these types
    sortBy?: [{field: string, order: "desc" | "asc"}]   // OPTIONAL - Sort by fieldname(s) and the order.  Field value has to be string, number, or date
}
</code>
</pre>

For the blog example, you might define these collections.  LatestBlogs collection sort all blog entries by latest timestamp and blogsByKeywords collection partition blog entries by keywords then sort by latest timestamp.  

```js
const {SambalCollection} = require("sambal");
const {from} = require("rxjs");

const collections = [{
    name: "latestBlogs",
    sortBy: [{field: "dateCreated", order: "desc"}]
}, {
    name: "blogsByKeywords",
    groupBy: "keywords",
    sortBy: [{field: "dateCreated", order: "desc"}]
}];

const store = new SambalCollection(collections);

// User can pull data from anywhere they wish, CMS, API, local filesystem, etc.
const content$ = from([{
    url: "/blog-post-1",
    keywords: ["tag1", "tag2"],
    dateCreated: "2020-02-13"
}, {
    url: "/blog-post-2",
    keywords: ["tag1", "tag3"],
    dateCreated: "2020-01-13"
}]);

// Index content by providing a content$ observable where SambalCollection will iterate through every data and index it according to the user defined collections
store.indexContent(content$);
```

SambalCollection doesn't care what the json data look like.  The only restriction is that it needs to have a unique url field.  It's used as the resource identifier for that piece of data.  To access latestBlogs collection, you do 

```js
store.collection("labestBlogs");
```

To access a partition in a collection, you do

```js
store.collection("blogsByKeywords", {keywords: "tag1"});
```

