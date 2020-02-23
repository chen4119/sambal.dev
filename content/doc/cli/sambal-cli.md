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

Index content from contentPath or content$ into user defined collections

```ShellSession
npx sambal index
```

Generate HTML documents from route$ observable

```ShellSession
npx sambal build
```