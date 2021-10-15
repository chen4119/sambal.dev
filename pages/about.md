---
"@type": Article
headline: A linked data static site generator
description: Generate webpage directly from schema.org json-ld data
---

Not another static site generator!  Maybe that's what you're thinking right now but I hope you'll hear me out on why Sambal will be worth your time.  Sambal is designed from the ground up to embrace open standards and the open web.  No more vendor specific content model, vendor specific UI framework, vendor specific template syntax, etc.  In fact, Sambal is not opinionated about how you generate HTML at all!

The main focus for Sambal is the content model.  Sambal natively supports [schema.org](https://schema.org/) [json-ld](https://json-ld.org/) as the content model because schema.org has over 700+ content types and most importantly, it's open and supported by big search engines like Google and Microsoft.

If you have never considered creating your content in schema.org json-ld, here are 3 major benefits that hopefully will convince you to try.

1. Using schema.org vocabulary automatically makes your content search engine friendly.  Sambal can automatically add application/ld+json, facebook, and twitter metadata tags to your webpage

2. Unlike plain old json, json-ld (aka json linked data) can reference other data fragments with a url just like linking to another webpage with a hyperlink.  Say goodbye to duplicating data in every markdown or yaml file.

3. No need to model your own content, it's time consuming and it's not compatible with anybody else's content model.

Unlike other static site generators which focus exclusively on generating static HTML, Sambal generate both HTML and schema.org json-ld files.  By hosting these json-ld files on your website, every piece of your raw content will have a unique URL that you can reference from other json-ld data.  As an example, check out the schema.org json-ld representation of this page [here](https://sambal.dev/about/schema.json).  Now I can reference it from any json-ld like so

```yaml
"@context": "https://schema.org"
"@type": "ItemList"
itemListElement:
  - "@id": https://sambal.dev/about/schema.json
```


