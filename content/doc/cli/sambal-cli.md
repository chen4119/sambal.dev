---
headline: Sambal cli
description: Generate schema.org boilerplate types, index data into collections, generate HTML documents
category: CLI
order: 1
---

# Sambal cli

Generate schema.org boilerplate type in yaml or json format.  A subset of the more commonly used fields is generated.  If you want all the fields, add -f, --full option to generate the full schema

```ShellSession
npx sambal schema.org <schema.org type> <output file> [-f, --full]
```

Start dev server at http://localhost:3000 and reload browser if javascript changed

```ShellSession
npx sambal serve
```

Generate static HTML files for every link from the sitemap$ observable

```ShellSession
npx sambal build
```