---
headline: loadJsonLd
description: Load json-ld data from markdown, yaml, json file or http url
codeRepository: https://github.com/chen4119/sambal
codeSampleType: code snippet
programmingLanguage: Typescript
runtimePlatform: Node.js 8+
category: RxJs Operators
order: 2
---

```ts
function loadJsonLd(hydrateOptions?: {
    fetcher?: (url: string) => Promise<any>,
    context?: any
})
```

__Parameters:__

<span class="text-primary">__(Optional) fetcher:__</span> Function to get data for the requested url

<span class="text-primary">__(Optional) context:__</span> json-ld context

### __Examples__