---
headline: toHtml
description: Mutate rendered html before returing it. Need to be call after rendering
codeRepository: https://github.com/chen4119/sambal
codeSampleType: code snippet
programmingLanguage: Typescript
runtimePlatform: Node.js 8+
category: RxJs Operators
order: 7
---

```ts
toHtml(mutateHtml: {
    editAttribs?: (name: string, attribs: HtmlAttributes) => HtmlAttributes,
    prepend?: (name: string, attribs: HtmlAttributes) => HtmlNode[],
    append?: (name: string, attribs: HtmlAttributes) => HtmlNode[],
    replace?: (name: string, attribs: HtmlAttributes) => HtmlNode
} = {})
```

__Parameters:__

<span class="text-primary">__(Optional) editAttribs:__</span> Function to modify attributes
<span class="text-primary">__(Optional) prepend:__</span> Function to prepend html nodes
<span class="text-primary">__(Optional) append:__</span> Function to append html nodes
<span class="text-primary">__(Optional) replace:__</span> Function to replace html node

### __Examples__