---
headline: paginate
description: Use bufferCount to break a stream of data into pages of certain size.  Paginate will keep track of the number of pages, the begin and end index count of the items in the page.  Source data passed to paginate needs to be an array. 
codeRepository: https://github.com/chen4119/sambal
codeSampleType: code snippet
programmingLanguage: Typescript
runtimePlatform: Node.js 8+
category: RxJs Operators
order: 4
---

Output data will have the following schema

<pre>
<code>
{
    page: number,       // Page count
    begin: number,      // Begin index count
    end: number,        // End index count
    items: any[]        // Source data
    hasNext: boolean    // Has next page?
}
</code>
</pre>

```ts
paginate()
```

### __Examples__