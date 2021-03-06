---
"@type": TechArticle
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
            uri: "blogs/byAuthor",                                              // REQUIRED - collection uri
            match: ["/blogs/**/*"],                                             // REQUIRED - Globs to match uris
            groupBy: (mainEntity) => {                                          // OPTIONAL - Group by partition key
                return {
                    // group by author's name
                    author: mainEntity.author.name
                };
            },
            sort: (a, b) => {                                                   // OPTIONAL - Sort
                return b.dateCreated.getTime() - a.dateCreated.getTime();
            }
        }
    ]
};
```

# Group by

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




