---
"@type": TechArticle
identifier: core/collection
headline: Collection
articleSection: Core concept
position: 6
---

Collection is a way to group and sort content.  For example in a blog, you will need a collection of all your blog posts sorted by dateCreated in descending order.  You may also want blog posts grouped by tags.

# Setup

Collections are defined in sambal.site.js with the following schema

```js
export const siteConfig = {
    collections: [
        {
            "@id": "blogs/byAuthor",                      // REQUIRED - collection id
            "@type": "SiteNavigationElement",             // OPTIONAL - SiteNavigationElement is a special type of collection
            src: ["blogs/**/*"],                          // REQUIRED - List of glob, urls 
            groupBy: (mainEntity) => {                    // OPTIONAL - Group by partition key
                return {
                    // group by author's name
                    author: mainEntity.author.name
                };
            },
            sortBy: {                                     // OPTIONAL - Sort by propName and order
                prop: "dateCreated",
                order: "desc"
            }
        }
    ]
};
```

### Group by

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




