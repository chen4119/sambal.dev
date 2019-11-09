---
headline: pushSchemaOrgItemList
description: Transform an array of items to schema.org ItemList type.  Every item in the array will be transformed into the specified schema.org type
id: pushSchemaOrgItemList
order: 6
---

## pushSchemaOrgItemList

<p class="lead">Transform an array of items to schema.org ItemList type.  Every item in the array will be transformed into the specified schema.org type</p>

```ts
pushSchemaOrgItemList(itemType: string, options: {field?: string, itemListProps?: object, context?: any} = {itemListProps: {}})
```

__Parameters:__

<span class="text-primary">__(Required) itemType:__</span> schema.org type

<span class="text-primary">__(Optional) options.field:__</span> Transform json data from field

<span class="text-primary">__(Optional) options.itemListProps:__</span> Extra props to add to schema.org ItemList

<span class="text-primary">__(Optional) options.context:__</span> Json-ld context


### __Examples__