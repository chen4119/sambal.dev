---
"@type": TechArticle
headline: A linked data static site generator
description: A linked data static site generator
---

Ahhh yes, another static site generator. Before you flip the page though, I hope you'll hear me out on why Sambal might be worth your time.  Sambal is designed from the ground up to embrace open standards and the open web.  No more vendor specific content model, vendor specific UI framework, nor vendor specific directory structure, etc.

Sambal simply uses schema.org json-ld as the content model and let you generate static HTML however you like.  There are so many great ways of generating HTML out in the wild that it's counter productive to invent another.  Instead, the main focus for Sambal is the content model.

Traditionally, CMS and other static site generators delegate the task of content modeling to their users.  While the flexibility has always been advertised as a feature, in practice, it's a burden to the users.  Content modeling is hard and for many common use cases, completely unnecessary.  There is no need to re-invent the wheel with your own taxonomy when Schema.org already have hundreds of well known types defined and openly available.  In addition, big search engines like Google, Microsoft, etc. have converged on using schema.org json-ld as the preferred format for structured data.  This means by using schema.org json-ld as the content model for your website, it is search engine optimized on day one!

Sambal automatically generates your schema.org json-ld into static json files that you can host along with your static website.  Every piece of your schema.org json-ld will have a unique URL that you can share with others just like how you share URL to your webpage.  As an example, check out the schema.org json-ld representation of this page [here](https://sambal.dev/content/about-sambal.json)
