---
headline: Another static site generator?
description: The goal of Sambal is to transform your proprietary data into HTML and semantic metadata.  It natively supports json-ld format and schema.org vocabulary and provide a seamless way to simultaneouly transform your data into HTML and schema.org json-ld.  This way, your HTML and metadata are always consistent with each other.
category: Introduction
order: 2
---
# Another static site generator?

There are a lot of static site generators out there.  Jekyll, Hugo, GatsbyJS are just a few of the more popular ones.  Why should you choose to use Sambal?  You might be asking yourself that question now.  Allow us to re-introduce you a static site generator.

Traditionally, the main job of a static site generator is to transform your data into HTML.  Metadata, on the other hand, has always been left aside as an afterthought.  In fact in the earliest days of website development when Yahoo reign supreme, metadata was a joke.  People add bogus keywords and hidden text to increase SEO.  Obviously, it's much harder to manipulate search engines these days and metadata on your website has become increasingly important.  Google, Microsoft and Yandex created schema.org in 2011 to standardize the metadata of some of the most frequently seen content on the web.  Many of the most trafficked websites already use it and it powers the [Google search result feature](https://developers.google.com/search/docs/guides/intro-structured-data).  Unfortunately structured data is a bit harder to get right.

In recognition of the importance of metadata, the goal of Sambal is to transform your data into HTML and semantic metadata.  It natively supports json-ld format, schema.org vocabulary.  Adding schema.org metadata is as easy as making one function call which auto validate your data against schema.org type and add it to &lt;head&gt;. Everything you would expect to generate production ready HTML is also supported: React inspired render function, css minimizing, and javascript rollup.  Otherwise, Sambal is un-opinionated about your directory structure, where your data resides (i.e. REST, GraphQL or locally), or what UI library you want to use, if any, as long as you can roll it into a HTML5 custom element.  





