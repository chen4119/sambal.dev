---
"@type": Article
headline: Theme
description: Build robust UI themes for schema.org structured data.  Simply use npm/yarn workspace to add a Sambal UI theme
articleSection: Core concept
position: 8
---

Sambal is designed to completely separate UI from data.  This is important because it allow a website owner to swap UI (aka theme) in and out without modifying site content.  Too often with other static site generators, you see UI tangled with site content and there is no easy way to change one without adversely affecting the other.  As a result, you end up building fragile UI themes.

With Sambal, UI developer can build UI for schema.org structured datas and as long as website owner also publish their content in schema.org structured data, it will be compatible with each other.  As a result, UI developer can build more robust UI themes and website owner can swap UI themes with more confidence.

# Using npm/yarn workspace to add Sambal themes

Each Sambal theme is a npm/yarn workspace.  You can have as many themes as you like in a Sambal project

```text

/pages                // website pages
sambal.site.js        // website config file
package.json          // website package.json
/first-theme
    sambal.entry.js   // ui entry files
    package.json      // ui package.json
/second-theme
    sambal.entry.js   // ui entry files
    package.json      // ui package.json
```

Remember to add workspaces to your root package.json so that workspace dependencies will be added to the root project

```json
{
    // ... other package.json configs
    "workspaces": [
        "first-theme",
        "second-theme"
    ]
}
```

Then specify which theme to use in sambal.site.js

```js
export const siteConfig = {
    // ...other configs
    theme: "first-theme"
};
```

# Share your theme

Just make your github project public.  Users can add your theme as a git submodule in their project. For example, to add sambal-ui-material theme, follow these 3 simple steps

1. In your root project folder, add sambal-ui-material as a git submodule

```bash
git submodule add https://github.com/chen4119/sambal-ui-material.git
```

2. Add sambal-ui-material as a workspace in package.json

```json
{
    // ... other package.json configs
    "workspaces": [
        "sambal-ui-material"
    ]
}
```

3. Use sambal-ui-material in sambal.site.js

```js
export const siteConfig = {
    // ...other configs
    theme: "sambal-ui-material"
};
```

