---
headline: Packager
description: Bundle all &lt;script&gt; javascript files, add schema.org json-ld metadata and write resulting HTML document to public folder
category: Classes
order: 2
---

## Packager

<p class="lead">Bundle all &lt;script&gt; javascript files, add schema.org json-ld metadata and write resulting HTML document to public folder</p>


```ts
constructor(private obs$: Observable<SambalData>, private options: {prettyHtml?: boolean, bundle?: BundleFunction} = {})
```
<p class="lead">Default option</p>
<pre>
<code>
{
    prettyHtml: true, // prettify HTML
    bundle: async (srcFile: string, destFolder: string) => {
        // do nothing
        return [srcFile];
    }
}
</code>
</pre>

__Parameters:__

<span class="text-primary">__(Required) obs$:__</span> Rendered data observer

<span class="text-primary">__(Optional) options.prettyHtml:__</span> Prettify Html flag.  Default to true

<span class="text-primary">__(Optional) options.bundle:__</span> Implement your own bundle function.  sambal-cli uses webpack

### __Public functions__

```ts
deliver(): Promise<void>
```

<p class="lead">Observe data from obs$ and generate HTML documents</p>


### __Examples__