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
    "&lt;li&gt;one&lt;/li&gt;",
    "&lt;li&gt;two&lt;/li&gt;",
    "&lt;li&gt;three&lt;/li&gt;"
];

const html = await template`
    &lt;ul&gt;
        ${listItems}
    &lt;/ul&gt;
`;

/*
    &lt;ul&gt;
        &lt;li&gt;one&lt;/li&gt;
        &lt;li&gt;two&lt;/li&gt;
        &lt;li&gt;three&lt;/li&gt;
    &lt;/ul&gt;
*/
```

# Nested template

```js
import { template } from "sambal";

const itemFragment = template`
    &lt;li&gt;
        &lt;b&gt;Hello world&lt;/b&gt;
    &lt;/li&gt;
`;

const html = await template`
    &lt;ul&gt;
        ${itemFragment}
    &lt;/ul&gt;
`;

/*
    &lt;ul&gt;
        &lt;li&gt;
            &lt;b&gt;Hello world&lt;/b&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
*/
```

# Render promise

```js
import { template } from "sambal";

const fetchData = async () =&gt; {
    // do some custom fetching before rendering html fragment

    return template`&lt;li&gt;hello world&lt;/li&gt;`;
};

const html = await template`
    &lt;ul&gt;
        ${fetchData()}
    &lt;/ul&gt;
`;

/*
    &lt;ul&gt;
        &lt;li&gt;hello world&lt;/li&gt;
    &lt;/ul&gt;
*/
```


