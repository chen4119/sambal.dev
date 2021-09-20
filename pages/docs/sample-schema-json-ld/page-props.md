---
"@type": Article
headline: Webpage props
articleSection: Sample Schema.org
position: 2
---

Other than the required mainEntity of a webpage, there are many other properties you can set for your webpage using [_page.yml](docs/core/router/#pageyml).  Here are some examples


### Header with navigation and action

```yml
"@type": WPHeader
headline: Sambal
hasPart:
  - "@type": SiteNavigationElement
    name: About
    url: /about
  - "@type": SiteNavigationElement
    name: Docs
    url: /docs/get-started
potentialAction:
  - "@type": "DownloadAction"
    target: https://github.com/chen4119/sambal
```

### Sidebar with nagivation

```yml
"@type": WPSideBar
hasPart:
  - "@type": SiteNavigationElement
    name: Get Started
    url: /docs/get-started
```