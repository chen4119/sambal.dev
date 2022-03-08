---
"@type": Article
headline: Image
description: Sambal can auto convert jpg, webp, gif and png image to schema.org ImageObject structured data
articleSection: Core concept
position: 5
---

# Render &lt;img&gt; HTML from schema.org ImageObject structured data

Sambal can auto convert jpg, webp, gif and png image to schema.org ImageObject structured data with the following fields.

```json
{
    "@type": "ImageObject",
    "url": "https://example.com/data/images/image-1.jpg",   // Absolute URL to the image
    "contentUrl": "/data/images/image-1.jpg",               // Relative URL to your hostname
    "encodingFormat": "image/jpg",                          // Mime type of your image
    "width": "<actual width of image>",                     // Actual width of your image
    "height": "<actual height of image>"                    // Actual height of your image
}
```

From this ImageObject structured data, you have all the information you need to render &lt;img&gt; HTML.

```html

```

# Reference image(s) in schema.org json-ld

Referencing an image is exactly the same as referencing another yaml or json file.  Sambal will take care of converting an image into an ImageObject structured data.  For example, to reference a local image file at data/images/image-1.jpg

```markdown
---
"@type": BlogPosting
headline: My first blog post
image:
  "@id": /data/images/image-1.jpg
---
My first blog post!
```

The blogpost json-ld will look like this

```json
{
    "@type": "BlogPosting",
    "headline": "My first blog post",
    "image": {
        "@type": "ImageObject",
        "url": "https://example.com/data/images/image-1.jpg",
        "contentUrl": "/data/images/image-1.jpg",
        "encodingFormat": "image/jpg",
        "width": "<actual width of image>",
        "height": "<actual height of image>"
    },
    "text": "My first blog post!",
    "encodingFormat": "text/markdown"
}
```

To reference more than one image

```markdown
---
"@type": BlogPosting
headline: My first blog post
image:
  - "@id": /data/images/image-1.jpg
  - "@id": /data/images/image-2.jpg
---
My first blog post!
```

The blogpost json-ld will look like this

```json
{
    "@type": "BlogPosting",
    "headline": "My first blog post",
    "image": [
        {
            "@type": "ImageObject",
            "url": "https://example.com/data/images/image-1.jpg",
            "contentUrl": "/data/images/image-1.jpg",
            "encodingFormat": "image/jpg",
            "width": "<actual width of image>",
        "height": "<actual height of image>"
        },
        {
            "@type": "ImageObject",
            "url": "https://example.com/data/images/image-2.jpg",
            "contentUrl": "/data/images/image-2.jpg",
            "encodingFormat": "image/jpg",
            "width": "<actual width of image>",
        "height": "<actual height of image>"
        }
    ],
    "text": "My first blog post!",
    "encodingFormat": "text/markdown"
}
```


# Image optimization and thumbnails

Sambal can optimize your image and generate additional thumbnails by using query parameters when referencing an image.  Below is the list of query parameters supported.

```text
w=100                        // Resize image width to 100px
h=100                        // Resize image height to 100px
output=webp|png|jpg|gif      // Image output format.  Possible values webp, png, jpg, gif
thumbnails=50w,25w,50h       // Generate 3 thumbnails
```

Some examples

```yml
image:
  "@id": /data/images/image-1.jpg?w=150&output=webp  # Resize image-1 width to 150px and output in webp format
```

```yml
image:
  "@id": http://example.com/image-2.jpg?thumbnails=50w,25w  # Works with absolute url.  Generate 2 thumbnails, one width=50px, one width=25px
```
