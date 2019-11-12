---
headline: Packager
description: Responsible for packaging your website into a destination folder.  The route function returns an observable to process your data stream into HTML files
id: Packager
order: 1
---

## Packager

<p class="lead">Responsible for packaging your website into a destination folder.  The route function returns an observable to process your data stream into HTML files.  It expects the source data to have format</p>

<pre>
<code>
{
    data // Your data,
    html // A Cheerio object with your rendered HTML
}
</code>
</pre>

With the Cheerio html, Packager will

1. Find css links, minify it, hash it, copy it to destination folder
2. Find js links, rollup, copy it to destination folder
3. Add schema.org metadata, if any
4. Write html file to route

```ts
constructor(private dest: string, options = {})
```
<p class="lead">Default option</p>
<pre>
<code>
{
    prettyHtml: true // prettify html
}
</code>
</pre>

__Parameters:__

<span class="text-primary">__(Required) dest:__</span> Destination path.  All HTML and artifacts will be created here

```ts
route(template: string | ((props: any) => string)): Observer<any>
```

<p class="lead">Return observer to process your data stream into HTML files</p>

__Parameters:__

<span class="text-primary">__(Required) template:__</span> An output filepath or function that return a filepath based on source data

```ts
copy(...sources: string[])
```

__Parameters:__

<span class="text-primary">__(Required) sources:__</span> Copy source file or folder to destination path

```ts
clean()
```
<p class="lead">Delete all files in destination folder</p>

### __Examples__