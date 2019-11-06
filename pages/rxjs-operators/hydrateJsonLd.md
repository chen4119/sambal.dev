---
headline: hydrateJsonLd
description: Convert a json object into a schema.org jsonld object
id: hydrateJsonLd
order: 3
---

## hydrateJsonLd

<p class="lead">Transform source json data into the specified schema.org json-ld type, removing any fields that are not part of the schema or has invalid type</p>

```ts
hydrateJsonLd(field?: string)
```

__Parameters:__

<span class="text-primary">__(Required) type:__</span> schema.org type

<span class="text-primary">__(Optional) options.field:__</span> Transform json data from field

<span class="text-primary">__(Optional) options.context:__</span> Json-ld context


### __Examples__