---
"@type": Article
headline: URI Resolver
articleSection: Core concept
position: 7
---

URI plays a central role in Sambal.  Every piece of json-ld has a unique uri just like how every webpage has a unique url.  Fun fact, url is a type of uri!  Out of the box, Sambal can resolve a relative path to a local file or an absolute url to a remote resource as long as no authentication is needed.  For urls that are not public or not REST endpoints, you can add custom resolvers to fetch the data.  Examples include fetching data from CMS or graphQL endpoints.

# Resolver config

Add custom resolvers in your sambal.site.js file to handle urls from a particular host.  For example, to handle urls from wordpress.com

```js
export const siteConfig = {
    // ... other configs
    resolvers: [
        {
            host: "public-api.wordpress.com",
            resolveUri: async (uri) => {
                // Use wordpress javascript sdk to fetch data and return in schema.org json-ld
            }
        }
    ]
};
```