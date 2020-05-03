---
headline: SambalCollection
description: Index data from content$ observable into user specified collections
codeRepository: https://github.com/chen4119/sambal
codeSampleType: code snippet
programmingLanguage: Typescript
runtimePlatform: Node.js 8+
category: Classes
order: 1
---

## SambalCollection

<p class="lead">Index data from content$ observable into user specified collections</p>

```ts
constructor(private collections: CollectionDef[], private userOptions: StoreOptions = {})
```

__Parameters:__

<span class="text-primary">__(Required) collections:__</span> List of collection definitions

<span class="text-primary">__(Optional) userOptions.cacheFolder:__</span> Folder to store indexed data.  Default to ./.sambal


<p class="lead">Collection schema</p>
<pre>
<code>
{
    name: string,                                       // REQUIRED - Name of your collection
    groupBy?: string | string[],                        // OPTIONAL - Group by fieldname(s). Field value has to be string, number, date, or an array of one of these types
    sortBy?: [{field: string, order: "desc" | "asc"}]   // OPTIONAL - Sort by fieldname(s) and the order.  Field value has to be string, number, or date
}
</code>
</pre>

### __Public functions__

```ts
indexContent(content$): Promise<void>
```

<p class="lead">Index data from contentPath and content$ observable into user specified collections</p>

__Parameters:__

<span class="text-primary">__(Required) content$:__</span> Content data observable


```ts
collection(name: string, partition?: object): Observable<any>
```

<p class="lead">Return observable of data from specified collection</p>

__Parameters:__

<span class="text-primary">__(Required) name:__</span> Name of collection

<span class="text-primary">__(Optional) partition:__</span> Partition key of the groupBy partition.  i.e. {username: "user1"}

```ts
stats(collectionName: string): Promise<object>
```

<p class="lead">Return size of specified collection</p>

__Parameters:__

<span class="text-primary">__(Required) collectionName:__</span> Name of collection


### __Examples__