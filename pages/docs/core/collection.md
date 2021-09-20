---
"@type": Article
headline: Collection
articleSection: Core concept
position: 6
---

Collection is a way to group and sort data.  For example in a blog, you can use collection to sort all your blog posts by dateCreated in descending order.  You may also want another collection with blog posts grouped by tags.

# Collection config

Add collections in your sambal.site.js file with the following schema

```js
export const siteConfig = {
    // ... other configs
    collections: [
        {
            uri: "blogs/byAuthor",                                           // REQUIRED - collection uri
            match: ["/blogs/**/*"],                                          // REQUIRED - Globs to match uris
            groupBy: (mainEntity) => {                                       // OPTIONAL - Group by partition key
                return {
                    // group by author's name
                    author: mainEntity.author.name
                };
            },
            sort: (a, b) => {                                                // OPTIONAL - Sort
                return b.dateCreated.getTime() - a.dateCreated.getTime();
            }
        }
    ]
};
```

# Different ways to group by

Group by function returns one or more arbitrary partition key in which all content with the same partition key will be grouped.

```js
(mainEntity) => {
    // group by year
    return {
        year: mainEntity.dateCreated.getFullYear()
    }
}

(mainEntity) => {
    // group by section and author
    return {
        section: mainEntity.articleSection,
        author: mainEntity.author.name
    }
}

(mainEntity) => {
    // group by each tag
    return mainEntity.keywords.map(tag => ({
        tag: tag
    }));
}
```

# Using collection

Say you want to render a list of blogposts ordered by date created, you can define a collection of all your blogposts sorted by date

```js
export const siteConfig = {
    // ... other configs
    collections: [
        {
            uri: "blogs/latest",
            match: ["/blogs/**/*"],
            sort: (a, b) => {
                return b.dateCreated.getTime() - a.dateCreated.getTime();
            }
        }
    ]
};
```

You can then access the collection by it's uri in your /blogs yaml file

```yml
"@id": blogs/latest
```

Sambal will output a collection as a schema.org ItemList

```js
{
    "@type": "ItemList",
    itemListElement: [
        {
            "@type": "BlogPosting",
            ...more blog props
        },
        ...more blogposting
    ]
}
```

# Querying collection by partition key

If your collection implemented a groupBy function, you can query your collection by the partition key.  For example, the /blogs/byAuthor collection above is partitioned by author's name so to get a list of all blogposts by John Smith, you can query with this uri

```text
/blogs/byAuthor?author=John Smith
```

Or if you are partitioning by author and year like so

```js
(mainEntity) => {
    // group by section and author
    return {
        author: mainEntity.author.name,
        year: mainEntity.dateCreated.getFullYear()
    }
}
```

You can get a list of all blogposts by John Smith written in 2019 with this uri

```sh
/blogs/byAuthor?author=John Smith&year=2019
```
