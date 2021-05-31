---
"@type": TechArticle
headline: Theme
articleSection: Core concept
position: 5
---

These days you can find plenty of free themes online that can help you create a website in no time, which is great, but usually the content model is severely limited and only valid for that particular theme.  Switching to another theme most likely means you need to modify your content structure even though your content didn't change.

Sambal theme is different because it is designed to render HTML using schema.org as the content model.  This means that as long as content creator publish their content in schema.org json-ld, they can freely switch themes and not have to worry if their content is compatible with the theme.  UI developer now also has a much richer set of content model to design their themes for.  They can create a theme that renders a blogpost, a recipe, a person's resume, or a product for sale.

Sambal theme is designed so that the content creater can work independently from the UI developer without stepping on each other.

# Using a theme

Using a Sambal theme is as simple as adding another Sambal project as a submodule in your project and setting the theme config in sambal.site.js.  

As an example to use the sambal-ui-material theme, run the following in your root project folder to add sambal-ui-material as a submodule

```sh
git submodule add https://github.com/chen4119/sambal-ui-material.git

cd sambal-ui-material

npm install

npm run theme  // build project into /dist

```

Then add theme config to your sambal.site.js

```js
export const siteConfig = {
    // ...other configs
    theme: "sambal-ui-material"
};
```

# Publish a theme to share

As demonstrated above, to share a theme, all you really need to do is to open source it in Github.
