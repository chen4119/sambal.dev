---
headline: Json-ld and Schema.org
description: Some description
id: jsonld-and-schema-org
order: 1
---

# Schema.org

[Schema.org](https://schema.org/) is a set of schemas for structured data markup on webpages.  It was started by Google, Yahoo, Microsoft and Yandex in 2011.  Many high traffic sites like Linkedin, AllRecipes, IMDb, Wikipedia, etc. are already using it.  It's the metadata that powers virtual assistants, events and flight reminders in your e-mail, and the featured search results on Google.  It can be encoded in rdf, microdata and json-ld.

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

That's it!  You now have a schema.org person json-ld object!  The @context field tells the json-ld processor that you are using schema.org vocabulary and to map firstName and lastName to schema.org defined givenName and familyName.  Sambal has a 



An important thing to note is that json-ld is a generic data format and not exclusively tied to schema.org in any way.  You can also use json-ld to encode ActivityPub or FOAF or other semantic vocabularies.  By supporting json-ld natively in Sambal, 

Unfortunately a lot of the legacy softwares available today does not make it easy for you to embed schema.org in your website.  Every CMS has it's own database schema and every webmaster represent his data in his own unique schema.  As a result, the translation to schema.org metadata at a later stage of development involves a lot of manual labor and not always easy.


