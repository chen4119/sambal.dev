---
headline: LinkedDataStore
description: Index data from contentPath and content$ observable into user specified collections.  Auto resolve json-ld data
category: Classes
order: 1
---

## LinkedDataStore

<p class="lead">Index data from contentPath and content$ observable into user specified collections.  Auto resolve json-ld data</p>

```ts
constructor(private host: string, private userOptions: StoreOptions = {})
```

__Parameters:__

<span class="text-primary">__(Required) host:__</span> Domain host of the website, i.e. https://myhost.com

<span class="text-primary">__(Optional) userOptions.contentPath:__</span> Local path to content folder.  Support markdown, yaml, and json files

<span class="text-primary">__(Optional) userOptions.content$:__</span> Content data observable.  Data can be either json or json-ld

<span class="text-primary">__(Optional) userOptions.collections:__</span> List of collection definitions.

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
indexContent(): Promise<void>
```

<p class="lead">Index data from contentPath and content$ observable into user specified collections</p>

```ts
content(): Observable<any>
```

<p class="lead">Return observable of data from contentPath and content$</p>

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