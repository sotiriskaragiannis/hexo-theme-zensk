# hexo-theme-zensk
## ZenSK - Hexo Minimalist Theme

---

Simple functions, but super small files.

Configuration file reference `_config.zen.yml`

Forked from [Zen](https://github.com/mouyase/hexo-theme-zen). Removed Twikoo and Beaudar support. Added page `photography` to present a gallery of images. Also added ui toggle for dark mode.

Images should be in the `/blog/source/assets/` to two directories, one for thumbnails (`compressed-images`) and one for the actual images (`full-images`). The images are loaded from a `/blog/source/assets/manifest.js` file that is of the format:

```js
window.manifest = [
    {
        "thumbnail_filename": "image1-min.jpg",
        "fullsize_filename": "image1.jpg"
    },
    {
        "thumbnail_filename": "image2-min.jpg",
        "fullsize_filename": "image2.jpg",
        "class":"big"
    },
    {
        "thumbnail_filename": "image3-min.jpg",
        "fullsize_filename": "image3.jpg",
        "class":"tall"
    },
    {
        "thumbnail_filename": "image4-min.jpg",
        "fullsize_filename": "image4.jpg",
        "class":"wide"
    }
]
```
