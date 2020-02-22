---
headline: Rendering to HTML
description: To render a json object to HTML, you just need to provide a render function with a props object as the only argument, inspired by React's render function
category: Guides
order: 3
---

# Rendering to HTML

To render a json object to HTML, you just need to provide a render function with a props object as the only argument, inspired by React's render function.  For example

```js

const {of} = require("rxjs");
const {render, template} = require("sambal-ssg");

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
.subscribe(d => console.log(d.html.html()));

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

Just plain old Javascript template literal but with some powerful features built in.

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