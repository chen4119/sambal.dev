---
headline: Rendering to HTML
description: Implement React style render functions to render data to HTML using plain old Javascript template literal
category: Guides
order: 2
---

# Rendering to HTML

Implement React style render functions to render data to HTML using plain old Javascript template literal

```js

const {of} = require("rxjs");
const {render, template, toHtml} = require("sambal");

function renderer({title, message}) {
    return template`
        <html>
            <head>
                <title>${title}</title>
            </head>
            <body>
                <h1>${message}</h1>
            </body>
        </html>
    `;
}

of({
    title: 'My first page',
    message: 'Hello world'
})
.pipe(render(renderer))
.pipe(toHtml())
.subscribe(html => console.log(html));

// output:
//
// <html>
//     <head>
//         <title>My first page</title>
//     </head>
//     <body>
//         <h1>Hello world</h1>
//     </body>
// </html>

```

But with some powerful features

__Render an array__

```js

const navigation = [
    {
        label: 'About',
        href: '/about.html'
    },
    {
        label: 'faq',
        href: '/faq.html'
    }
];

function renderer({navigation}) {
    return template`
        <ul>
            ${navigation.map(item => {
                return template`
                    <li><a href="${item.href}">${item.label}</a></li>
                `;
            })}
        </ul>
    `;
}

// output:
// <ul>   
//     <li><a href="/about.html">About</a></li>
//     <li><a href="/faq.html">faq</a></li>
// </ul>


```

__Nested render functions__

```js

function renderFooter() {
    return template`
        <footer>Rendered by Sambal</footer>
    `;
}

function renderer() {
    return template`
        <html>
            <body>
                ${renderFooter()}
            </body>
        </html>
    `;
}

// output:
// <html>
//     <body>
//         <footer>Rendered by Sambal</footer>
//     </body>
// </html>


```

__Render a promise__

```js

function renderer() {
    return template`
        <html>
            <body>
                ${loadHtml("fragments/head.html")}
            </body>
        </html>
    `;
}

```