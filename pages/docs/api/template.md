---
"@type": APIReference
headline: Template
description: Plain old Javascript template literal with support for array, promise, and null values
articleSection: API
position: 2
---

A Javascript template literal to render HTML

# Render arrays

```js
import { template } from "sambal";

const listItems = [
    "<li>one</li>",
    "<li>two</li>",
    "<li>three</li>"
];

const html = await template`
    <ul>
        ${listItems}
    </ul>
`;

/*
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
*/
```

# Nested template

```js
import { template } from "sambal";

const itemFragment = template`
    <li>
        <b>Hello world</b>
    </li>
`;

const html = await template`
    <ul>
        ${itemFragment}
    </ul>
`;

/*
    <ul>
        <li>
            <b>Hello world</b>
        </li>
    </ul>
*/
```

# Render promise

```js
import { template } from "sambal";

const fetchData = async () => {
    // do some custom fetching before rendering html fragment

    return template`<li>hello world</li>`;
};

const html = await template`
    <ul>
        ${fetchData()}
    </ul>
`;

/*
    <ul>
        <li>hello world</li>
    </ul>
*/
```


