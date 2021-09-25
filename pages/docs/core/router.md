---
"@type": Article
headline: Router
articleSection: Core concept
position: 2
---

# Pages folder

Sambal has a file system router where every file path under the pages directory becomes a route in your website.

```text
pages/index.yml  -> "/"
pages/blogs/blog1.md -> "/blogs/blog1"
```

Supported File types are markdown, json, yaml or image files.  The content of the file is the schema.org main entity of the page.  For example, if pages/blogs/blog.md has this content

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

Sambal will transform the blog post to be the main entity of the /blogs/blog1 page.  Sambal will auto populate the url of the WebPage.

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
    }
}
```

# _page.yml

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
        "@type": "BlogPosting",
        headline: "My first blog post",
        keywords: ["sambal", "linked data"],
        text: "My first blog post!",
        encodingFormat: "text/markdown",
        mainEntityOfPage: "/blogs/blog1"
    }
}
```

To override a higher level _page.yml, create a new _page.yml file in a subfolder.  So for the example below, if you create pages/blogs/_page.yml, then both /blogs/blog1 and /blogs/2021/blog2 will inherit from pages/blogs/_page.yml while "/" will inherit from pages/_page.yml

```text
pages/_page.yml
pages/index.yml
pages/blogs/_page.yml
pages/blogs/blog1.md
pages/blogs/2021/blog2.md
```
