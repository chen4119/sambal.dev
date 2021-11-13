---
"@type": Article
headline: Event
articleSection: Sample Schema.org
position: 3
---

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