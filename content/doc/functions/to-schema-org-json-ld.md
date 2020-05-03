---
headline: toSchemaOrgJsonLd
description: Transform source json data into the specified schema.org json-ld type, removing any fields that are not part of the schema or has invalid type
codeRepository: https://github.com/chen4119/sambal-cli
codeSampleType: code snippet
programmingLanguage: Typescript
runtimePlatform: Node.js 8+
category: Functions
order: 1
---

```ts
toSchemaOrgJsonLd(json: any, type: string, context?: any)
```

__Parameters:__

<span class="text-primary">__(Required) json:__</span> Any json data

<span class="text-primary">__(Required) type:__</span> schema.org type

<span class="text-primary">__(Optional) context:__</span> Json-ld context


### __Examples__