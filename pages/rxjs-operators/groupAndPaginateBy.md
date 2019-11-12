---
headline: groupAndPaginateBy
description: Group by field then paginate each group
id: groupAndPaginateBy
order: 2
---

## groupAndPaginateBy

<p class="lead">Group by field then paginate each group.  Paginate will keep track of the page count, the begin and end index count of the items in the page.  The resulting data will have the following schema</p>
<pre>
<code>
{
    groupBy // Group by key,
    page // Page count,
    begin // Begin index count,
    end // End index count,
    items // Source data,
    hasNext // Has next page?
}
</code>
</pre>

```ts
groupAndPaginateBy(field: string, pageSize: number = Number.MAX_SAFE_INTEGER)
```

__Parameters:__

<span class="text-primary">__(Required) field:__</span> Field to group by

<span class="text-primary">__(Optional) pageSize:__</span> Page Size


### __Examples__