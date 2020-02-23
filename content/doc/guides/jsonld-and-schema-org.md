---
headline: Json-ld and Schema.org
description: Some description
category: Guides
order: 2
---

# Schema.org

[Schema.org](https://schema.org/) is a set of schemas for structured data markup on webpages.  It was started by Google, Yahoo, Microsoft and Yandex in 2011.  Many high traffic sites like Linkedin, AllRecipes, IMDb, Wikipedia, etc. are already using it.  It's the metadata that powers virtual assistants, events and flight reminders in your e-mail, and the featured search results on Google.  It can be encoded in many formats such as rdf, microdata and json-ld.

Sambal provides a cli tool to automatically generate any schema.org type skeleton in yaml or json format with extra indication about which fields are required/recommended by Google.  Each type has more fields than you'll need.  You don't need to use every field but should try to populate the fields recommended by Google as those will most likely give your site better SEO.

```ShellSession
sambal schema.org person ./person.yaml
```

will output

```yml
name: text - required by Google
image: 'ImageObject (http://schema.org/ImageObject) or url - recommended by Google'
description: text - recommended by Google
identifier: Unique identifier or URL
sameAs: url
url: url
colleague: 'Person (http://schema.org/Person) or url'
email: text
familyName: text
follows: 'Person (http://schema.org/Person)'
gender: 'text or Male, Female'
givenName: text
knows: 'Person (http://schema.org/Person)'
nationality: 'Country (http://schema.org/Country)'
worksFor: 'Organization (http://schema.org/Organization)'
```


# Json-ld

Json-ld seems like the most obvious format to encode schema.org since json is already so widely used and any json object can be turned into json-ld simply by adding @context.  For example, you have the following json data.

```json

{
    "firstName": "John",
    "lastName": "Smith",
    "email": "john.smith@host.com"
}

```

To transform that to a schema.org Person json-ld, you don't even need to change your data format, you just add a few extra fields.

```json

{
    "@context": [
        "http://schema.org/",
        {
            "firstName": "http://schema.org/givenName",
            "lastName": "http://schema.org/familyName"
        }
    ],
    "@type": "Person",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john.smith@host.com"
}

```

That's it!  You now have a schema.org person json-ld object!  The @context field tells the json-ld processor that you are using schema.org vocabulary and to map firstName and lastName to schema.org defined givenName and familyName.
