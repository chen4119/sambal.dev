---
"@type": TechArticle
headline: Images
articleSection: Core concept
position: 5
---

Sambal supports auto converting jpg, webp, gif and png images to schema.org ImageObject json-ld.  All you need to do is drop an image file into either the pages or data folder.  When the image is referenced, it will appear as an ImageObject json-ld.  For example, if you have an image file at data/images/image-1.jpg.  You reference this image from your blogpost at pages/blogs/2021/blog1.md as such

```markdown
---
"@type": BlogPosting
headline: My first blog post
image:
  "@id": images/image-1
---
My first blog post!
```

The blogpost json-ld will look like this

```js
{
    "@id": "/blogs/2021/blog1",
    "@type": "BlogPosting",
    headline: "My first blog post",
    image: {
        "@id": "/images/image-1",
        "@type": "ImageObject",
        contentUrl: "/images/image-1.jpg",
        encodingFormat: "image/jpg",
        width: "&lt;actual width of image&gt;",
        height: "&lt;actual height of image&gt;"
    },
    "text": "My first blog post!",
    "encodingFormat": "text/markdown"
}
```

# ImageTransformation config

You can also configure Sambal to transform images to your desired width, height and format by adding image transform configs in your sambal.site.js file with the following schema

```js
export const siteConfig = {
    // ... other configs
    imageTransforms: [
        {
            match: "images/**/*",               // REQUIRED - Match all files under pages/images/ and data/images
            width: 500,                         // OPTIONAL - Resize image width to 500px, preserve aspect ratio
            height: 500,                        // OPTIONAL - Resize image height to 500px, preserve aspect ratio
            encodingFormat: "image/webp",       // OPTIONAL - Transform image to webp
            thumbnails: [                       // OPTIONAL - Generate thumbnails
                {
                    suffix: "50",               // REQUIRED - Add suffix to image name. i.e. image-1-50
                    width: 50,                  // OPTIONAL - Resize thumbnail width to 50px, preserve aspect ratio
                    height: 50                  // OPTIONAL - Resize thumbnail width to 50px, preserve aspect ratio
                }
            ]
        }
    ]
};
```