---
headline: paginate
description: Use bufferCount to break a stream of data into pages of certain size.  Paginate will keep track of the number of pages, the begin and end index count of the items in the page
category: RxJs Operators
order: 2
---

## paginate

<p class="lead">Use bufferCount to break a stream of data into pages of certain size.  Paginate will keep track of the number of pages, the begin and end index count of the items in the page.  Source data passed to paginate needs to be an array and the resulting data will have the following schema</p>
<pre>
<code>
{
    page // Page count,
    begin // Begin index count,
    end // End index count,
    items // Source data,
    hasNext // Has next page?
}
</code>
</pre>

```ts
paginate()
```

### __Examples__