---
"@type": Article
headline: Sample schema.org json-ld
description: List of sample schema.org json-ld
articleSection: Resources
position: 3
---

Schema.org can seem overwhelming at first with so many fields and so many schemas, most you probably will never use.  One good place to get started is Google's [search gallery](https://developers.google.com/search/docs/guides/search-gallery) of supported schemas.  Following those guidelines will help your website display in richer features in search results.  Below are some sample schemas you might find useful.


* [Article](/docs/resources/sample-schema-json-ld#article)
* [Event](/docs/resources/sample-schema-json-ld#event)
* [Person](/docs/resources/sample-schema-json-ld#person)
* [Place](/docs/resources/sample-schema-json-ld#place)

# Article

```md
---
"@type": "Article"
headline: Title of your article
description: Summary of your article
datePublished: 2021-05-01
dateModified: 2021-05-01
image:
  "@id": link to image or url
author:
  "@id": link to person
publisher:
  "@id": link to organization
---

Body of your article
```

# Event

```yml
"@type": Event
name: Title of event
description: Description of event
startDate: 2021-05-01T19:00-05:00
endDate: 2021-05-02T23:00-05:00
image:
  "@id": link to image or url
# For more options, see https://schema.org/EventAttendanceModeEnumeration
eventAttendanceMode: https://schema.org/OnlineEventAttendanceMode
# For more options, see https://schema.org/EventStatusType
eventStatus: https://schema.org/EventPostponed
offers:
  "@type": Offer
  price: 31
  priceCurrency: USD
location:
  "@id": link to place
performer:
  "@id": link to person
organizer:
  "@id": link to organization or person
```

# Person

```yml
"@type": Person
name: John Smith
email: john@email.com
familyName: Smith
gender: Male
givenName: John
sameAs:
  - https://github.com/john
  - https://www.linkedin.com/in/john-123
```

# Place

```yml
"@type": Place
name: Name of place
address:
  "@type": PostalAddress
  streetAddress: 123 Main st.
  addressLocality: Queens
  postalCode: 11428
  addressRegion: NY
  addressCountry: US
```
