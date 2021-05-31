---
"@type": TechArticle
headline: Router
articleSection: Core concept
position: 3
---

Sambal has a file system router where every file path under the pages directory becomes a route in your website.

```text
pages/index.yml  -> "/"
pages/blogs/blog1.md -> "/blogs/blog1"
```

File can be in markdown, json or yaml.  The content of the file is the schema.org main entity of the page.  For example, pages/blogs/blog.md might have this content

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

Sambal will transform the main entity to a schema.org WebPage so the page for /blogs/blog1 will become the json-ld object below.  Note that Sambal will auto populate the url and mainEntityOfPage properties of the webpage.  

```js
{
    "@type": "WebPage",
    url: "/blogs/blog1",                            // page url
    mainEntity: {
        "@id": "/blogs/blog1",          
        "@type": "BlogPosting",
        headline: "My first blog post",
        keywords: ["sambal", "linked data"],
        text: "My first blog post!",
        encodingFormat: "text/markdown"
    },
    mainEntityOfPage: "/blogs/blog1"                // canonical url of main entity
}
```

### _page.yml

Now that you have a way to specify the main entity of a webpage.  What if you want to provide more details about the webpage?  _page.yml is a special file you can use to add props to the webpage.  For example, create the file pages/_page.yml with the following content

```yaml
hasPart:
  - "@type": SiteNavigationElement
    name: About
    url: /about
```

Any nested files under pages directory will inherit this page properties.  So now the page for /blogs/blog1 will look like this

```js
{
    "@type": "WebPage",
    url: "/blogs/blog1",
    hasPart: [
        {
            "@type": "SiteNavigationElement",
            name: "About",
            url: "/about"
        }
    ],
    mainEntity: {
        "@id": "/blogs/blog1",          
        "@type": "BlogPosting",
        headline: "My first blog post",
        keywords: ["sambal", "linked data"],
        text: "My first blog post!",
        encodingFormat: "text/markdown"
    },
    mainEntityOfPage: "/blogs/blog1"
}
```

To override a higher level _page.yml, create a new _page.yml file in the subfolder.

Both "/" and "/blogs/blog1" will inherit from pages/_page.yml 

```text
pages/_page.yml
pages/index.yml
pages/blogs/blog1.md
```

Only "/" inherit from pages/_page.yml.  Both /blogs/blog1 and /blogs/2021/blog2 will inherit from pages/blogs/_page.yml

```text
pages/_page.yml
pages/index.yml
pages/blogs/_page.yml
pages/blogs/blog1.md
pages/blogs/2021/blog2.md
```

