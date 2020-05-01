---
headline: Bundling Javascript
description: Group and sort data into collection
category: Guides
order: 4
---

# Bundling javascript with Webpack

Although [Webpack](https://webpack.js.org/) is a required dependency for Sambal CLI, having a webpack.config.js file is optional.  You only need to provide this file if you want to bundle Javascript with your website.  Sambal will automatically bundle the entry files and replace any &lt;script&gt; reference to javascript files.  For example in your webpack.config.js:

```js
module.exports = {
    mode: "production",
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, "public/js"),
        publicPath: '/js',
        filename: "[name]-[hash].js"
    }
}
```

Sambal will bundle ./js/index.js into public/js and wherever you have the following &lt;script&gt; tag

```html
<script src="./js/index.js"></script>
```

It will be replaced with 

```html
<script src="/js/main-123455.js"></script>
```

Having automatic Javascript bundling opens up a whole new world of interactivity to an otherwise boring and static HTML document.  You can bundle [Bootstrap](https://getbootstrap.com/), [Font Awesome](https://fontawesome.com/), [React app](https://reactjs.org/), or [Polymer LitElement](https://lit-element.polymer-project.org/) web components.  Yet at the same time, you're not pigeoning your website into a Single Page Application or a static website.  Sambal provides the flexibility for developers to mix and match for optimal efficiency.