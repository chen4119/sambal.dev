---
"@type": TechArticle
headline: Overview
articleSection: Sample Schema.org
position: 1
---

Sambal does not validate that your data conforms to schema.org.  In fact, you can use plain old json data with Sambal if you want.  Schema.org can seem overwhelming at first with so many fields and so many schemas, most you probably will never use.  One good place to start looking is Google's [search gallery](https://developers.google.com/search/docs/guides/search-gallery) of which schemas their search engine supports.  Following those guidelines will help your website display in richer features in search results.

Sambal will auto generate the title, description, and ld+json meta tags for your webpage like below.  The title is mapped to the "name" field of your schema.org main entity or "head" in the case of a [CreativeWork](https://schema.org/CreativeWork) object.  Therefore consider to always provide a meaningful name (or headline) and description of your main entity.

```html

&lt;title&gt;Title of my article&lt;/title&gt;

&lt;meta name="twitter:card" content="summary" /&gt;
&lt;meta name="twitter:title" content="Title of my article" /&gt;
&lt;meta name="twitter:description" content="Description about my article" /&gt;

    
&lt;meta name="og:url" content="https://example.com/article" /&gt;
&lt;meta name="og:title" content="Title of my article" /&gt;
&lt;meta name="og:description" content="Description about my article" /&gt;

&lt;script type="application/ld+json"&gt;
{
    "@id": "/blog1",
    "@context": {
        "@vocab": "https://schema.org",
        "@base": "https://example.com"
    },
    "@type": "BlogPosting",
    "headline": "Title of my article",
    "description": "Description about my article",
    ...other fields
}
&lt;/script&gt;
```

