---
"@type": TechArticle
headline: A linked data static site generator
description: A linked data static site generator
---

Ahhh yes, another static site generator. Before you flip the page though, I hope you'll hear me out on why Sambal might be worth your time.  Sambal is designed from the ground up to embrace open standards and to enhance data sharing and component reusability.  Not just reusablity in your own website but reusability by anyone.  Just like how the open web was designed for.

Sambal natively uses schema.org json-ld as the content model for site generation.  By doing so, it acts as a well known schema to clearly separate the role of a content creator and the role of a ui developer.  Content creators can publish their content in schema.org format without knowing in advance how the website will be built.  On the other hand, UI developers can design a website with respect to schema.org types like BlogPosting, Organization, Person, etc. without creating their own taxonomy.

Traditionally, content model has not been a concern for static site generators.  Users model their own data schema and build their site with respect to their own schema.  While the flexibility is nice, it also leads to incompatibility.  The vast majority of content on the web has pretty standard schema.  For example, a blog, e-commerce site, personal website, etc.  There is no need to re-invent the wheel with your own taxonomy.  Now that all the big search engines like Google, Microsoft, etc. have converged on using schema.org structured data to understand your website, it makes even more sense for the sake of SEO to create your content in schema.org from the beginning.  This avoids the mistake prone process of transforming your content to schema.org format after your HTML has been generated.


