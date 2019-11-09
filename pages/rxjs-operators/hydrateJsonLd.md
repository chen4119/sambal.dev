---
headline: hydrateJsonLd
description: Fetch json-ld @id links into data.  Links can be a local filepath or a http link.  Local file path is always relative to the project root path and prefixed with "_:", piggybacking off of json-ld's syntax for a blank node
id: hydrateJsonLd
order: 3
---

## hydrateJsonLd

<p class="lead">Fetch json-ld @id links into data.  Links can be a local filepath or a http link.  Local file path is always relative to the project root path and prefixed with "_:", piggybacking off of json-ld's syntax for a blank node</p>

<p class="lead">Support content types markdown, json, yaml, or html with embedded schema.org json-ld</p>

```ts
hydrateJsonLd(field?: string)
```

__Parameters:__

<span class="text-primary">__(Optional) field:__</span> Hydrate json-ld data from field

### __Examples__