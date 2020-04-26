---
headline: loadJsonLd
description: Load json-ld data from markdown, yaml, json file or http url
category: RxJs Operators
order: 2
---

## loadJsonLd

<p class="lead">Load json-ld data from markdown, yaml, json file or http url</p>

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