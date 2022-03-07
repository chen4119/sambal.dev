---
"@type": Article
headline: A json-ld static site generator
description: Generate SEO website directly from schema.org json-ld data
---

If you're thinking not another static site generator...I know but I hope you'll hear me out on why Sambal is different.  Whereas the purpose of many static site generators is to help users generate HTML or bundle javascript more efficiently, that is not what Sambal is about.  Sambal simply let you use your favorite UI library as you normally would so you don't have to learn anything new.

Instead, the main focus for Sambal is the content model.  It natively supports [schema.org](https://schema.org/) structured data to help you generate a more meaningful and SEO website based on the semantic meaning of your data.  Compare to other static site generators where they essentially don't care about the meaning of your data, Sambal's focus on data semantics has 3 major advantages: 

1. It can automatically add schema.org structured data, facebook open graph, and twitter metadata tags to your webpage.

2. You can build UI themes based on the semantic meaning of your data and not rely on the property name of your data.  To illustrate the difference, it's unambiguous what blogpost tags are but you can encode tags in your blogpost with many names, i.e. keywords, categories, tags, etc.  By relying solely on property names, UI themes are brittle in nature. 

3. Leverage the power of linked data.  Unlike plain old json, json-ld (aka json linked data) can reference other data fragments with a url just like linking to another webpage with a hyperlink.  Say goodbye to duplicating data in static markdown or yaml file.

Schema.org has over 700+ content types and supported by Google, Microsoft and Yandex so it's the ideal content model for the web.  By creating your content in schema.org vocabularies, your data will automatically be search engine optimized and you will never have to worry about vendor lock-in.

Sambal generate both the HTML page and the raw schema.org json-ld representation of your content.  By hosting these json-ld files on your website, every piece of your raw content will have a unique URL that you can reference from other json-ld data.  As an example, check out the schema.org json-ld representation of this page [here](https://sambal.dev/about/schema.json).  Now I can reference it from any json-ld like so

```yaml
"@context": "https://schema.org"
"@type": "ItemList"
itemListElement:
  - "@id": https://sambal.dev/about/schema.json
```


