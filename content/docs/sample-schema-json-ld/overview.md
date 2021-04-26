---
"@type": TechArticle
identifier: sample-schema-json-ld
headline: Overview
articleSection: Sample Schema.org
position: 1
---

Sambal does not impose any requirement on which fields are mandatory but a good advice is to check Google's structured data gallery for advice.  It's to your advantage to fill out as many of their required fields to improve SEO.  

Sambal helps you populate these fields so you don't need to

```yml
# Default to schema context
"@context":
  "@vocab": https://schema.org
  "@base": &lt;Your base url, i.e. https://example.com&gt;

# For local content files.  For remote files, the url will be the @id, if omitted
"@id": &lt;relative path to your file from root content folder&gt;
```


Sambal futher supports autopopulation for these schema types

ImageObject

```yml
contentUrl: df
encodingFormat: df
width: d
height: d

```

Below are some sample schema.org json-lds you can use as a template to get started.

