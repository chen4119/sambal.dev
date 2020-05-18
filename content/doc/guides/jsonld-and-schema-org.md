---
headline: Json-ld and Schema.org
description: Transform any json to schema.org json-ld with Sambal
category: Guides
order: 3
---

# Json-ld

[Json-ld](https://json-ld.org/) is basically just plain old json but with extra metadata fields.  You can transform any json object into a json-ld simply by providing @context.  For example

```json
{
    "firstName": "John",
    "lastName": "Smith",
    "email": "john.smith@host.com"
}
```

becames a schema.org Person json-ld when you add 

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

The @context field tells the json-ld processor that you are using schema.org vocabulary and to map firstName and lastName to schema.org defined givenName and familyName.  Manually converting json to json-ld is really tedious so Sambal provides a simple function to transform any json to schema.org json-ld.  Using the same example as above, you would do

```js
const {toSchemaOrgJsonLd} = require("sambal");

const originalJson = {
    "firstName": "John",
    "lastName": "Smith",
    "email": "john.smith@host.com"
};

const context = {
    "firstName": "http://schema.org/givenName",
    "lastName": "http://schema.org/familyName"
};

const jsonld = toSchemaOrgJsonLd(originalJson, "Person", context);
```

# Schema.org

[Schema.org](https://schema.org/) is a set of schemas for structured data markup on webpages.  It is important for SEO because all big search engines support it and use it as a signal for search ranking.  Sambal provides an easy way to transform your source data into schema.org metadata in your webpage with just one line of code.

```js
const {template, render, pushJsonLd, toSchemaOrgJsonLd} = require("sambal");
const {of} = require("rxjs");

of({
    "familyName": "Smith",
    "givenName": "John",
    "description": "Making linked data useful",
    "sameAs": [
        "https://github.com/johnny123",
    ]
})
.pipe(pushJsonLd((d) => toSchemaOrgJsonLd(d, "Person"))) // add schema.org Person
.pipe(render(({familyName, givenName}) => {
    return template`
        <html>
            <body>
                <h1>I am ${givenName} ${familyName}</h1>
            </body>
        </html>
    `;
}));
```


Sambal CLI provides a command to automatically generate any schema.org type skeleton in yaml or json format with extra indication about which fields are required/recommended by Google.  Each type will have more fields than you'll ever need do no need to feel bad if you're just using a small subset.  You should try to populate the fields recommended by Google as those will most likely give your site better SEO.

```sh
npx sambal schema.org person ./person.yaml
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