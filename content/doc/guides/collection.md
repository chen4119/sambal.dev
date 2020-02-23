---
headline: Collection
description: Group and sort data into collection
category: Guides
order: 4
---

# Collection

LinkedDataStore allow users to provide two input sources, contentPath and content$.  ContentPath is the root folder for your local content files.  Content$ is a RxJx observable interface.  Observable provides a very flexible and powerful way for users to pull data from any source imaginable.  Data can be in json or json-ld format.  Any @id links in json-ld data will be automatically resolved by LinkedDataStore.  

Users can index their data locally into collections for quick retrieval later.  A collection is defined as such:

<pre>
<code>
{
    name: string,                                       // REQUIRED - Name of your collection
    groupBy?: string | string[],                        // OPTIONAL - Group by fieldname(s). Field value has to be string, number, date, or an array of one of these types
    sortBy?: [{field: string, order: "desc" | "asc"}]   // OPTIONAL - Sort by fieldname(s) and the order.  Field value has to be string, number, or date
}
</code>
</pre>

For example, for your blog, you will need a collection of your blog posts sorted by latest timestamp.

```js
{
        name: "latestBlogs",
        sortBy: [{field: "dateCreated", order: "desc"}]
}
```

Blog posts generally have a list of tags like so

```js
{
        headline: "blog post 1",
        keywords: ["tag1", "tag2"]
},
{
        headline: "blog post 2",
        keywords: ["tag1", "tag3"]
},
```

You can easily group blog posts by keyword and sorted by latest timestamp with the collection below.  As such, "tag1" partition will contain both "blog post 1" and "blog post 2".  "tag2" partition will only contain "blog post 1" and "tag3" contain "blog post 2".

```js
{
        name: "blogsByKeywords",
        groupBy: "keywords",
        sortBy: [{field: "dateCreated", order: "desc"}]
}
```