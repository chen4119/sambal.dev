---
"@type": TechArticle
identifier: core/linked-data
headline: Linked data
articleSection: Core concept
position: 4
---

The core concept behind linked data is that every piece of data has their own globally unique identifier so that anyone can unambigiously reference it, similar to how every webpage has it own unique url so if you share the url with your friends, they can visit the same webpage.  

# Everything is schema.org json-ld

Sambal implements the linked data concept by treating every piece of data as schema.org json-ld.  Json-ld is a linked data format based on JSON so it's completely compatible with any JSON data but with three extra fields, @context, @type and @id.  Sambal automatically adds @context and @id to your data so the only extra field you need to add is @type.  For example, if you create a markdown file of your blog post under content/2021/first-blog.md

```markdown
---
"@type": BlogPosting
headline: My first blog post
keywords:
  - sambal
  - linked data
---
My first blog post!
```

Sambal will automatically default the context to https://schema.org, add the base url as the host of your website and derive the id as the relative path of your file from the root content folder.

```json
{
    "@context": {
        "@vocab": "https://schema.org",
        "@base": "https://example.com"
    },
    "@id": "2021/first-blog",
    "@type": "BlogPosting",
    "headline": "My first blog post",
    "keywords": ["sambal", "linked data"],
    "text": "My first blog post!"
}
```

# Image files are schema.org json-ld too!

Schema.org json-ld data can describe different types of media too!  Sambal support automatically generating ImageObject json-ld for jpeg, gif, webp, png image files.  All you need to do is drop an image file into the content folder.  For example if you add the file content/2021/media/image-1.jpg as an image for your blog post, you can reference it from your blogpost

```markdown
---
"@type": BlogPosting
headline: My first blog post
keywords:
  - sambal
  - linked data
image:
  "@id": 2021/media/image-1
---
My first blog post!
```

Sambal will automatically resolve the image reference and generate the json-ld

```json
{
    "@context": {
        "@vocab": "https://schema.org",
        "@base": "https://example.com"
    },
    "@id": "2021/first-blog",
    "@type": "BlogPosting",
    "headline": "My first blog post",
    "keywords": ["sambal", "linked data"],
    "image": {
        "@id": "2021/media/image-1",
        "contentUrl": "2021/media/image-1.jpg",
        "encodingFormat": "image/jpg",
        "width": "&lt;actual width of image&gt;",
        "height": "&lt;actual height of image&gt;"
    },
    "text": "My first blog post!"
}
```


# Link data like you link html page

The main motivation behind linked data is obviously the ability to link data together.  So how is this relevant to static site generator?  Content tend to be duplicated across many websites, trapped in HTML document that is hard to unbundle and re-use.  Some example include a restaurant profile in Yelp and Seamless.  A person's resume in Linkedin and their own personal website.  They are really just different view of the same content.

Sambal solves this problem by automatically publishing the schema.org json-ld you used to generate your website into independent json files that can be statically hosted in your website.  Now in addition to sharing url to your webpage, you can also share url to your schema.org json-ld data.

As you saw in the example above when /2021/first-blog referenced /2021/media/image-1.  Json-ld reference another piece of data by using @id

```js
{
    image: {
        "@id": "2021/media/image-1"  // relative path to content root folder
    },
    author: {
        "@id": "https://example.org/author/john-smith" // absolute url
    }
}
```


