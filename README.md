<p align="center">
  <img src="assets/banner/stc-ads-engine-banner.svg" width="100%" alt="STC Ads Engine Banner">
</p>

<p align="center">
  <img src="https://img.shields.io/github/v/release/chstorb/stc-ads-engine" alt="Latest Release">
  <img src="https://img.shields.io/jsdelivr/gh/hm/chstorb/stc-ads-engine" alt="jsDelivr Hits">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License">
  <img src="https://img.shields.io/badge/Status-Stable-brightgreen" alt="Status">
  <img src="https://img.shields.io/badge/Engine-Vanilla%20JS-orange" alt="Engine">
  <img src="https://img.shields.io/badge/CDN-jsDelivr-ff5500" alt="CDN">
</p>

# STC Ads Engine

- Homepage: https://chstorb.github.io
- Repository: https://github.com/chstorb/stc-ads-engine

A lightweight, framework‑agnostic ad rendering engine that fetches JSON‑based ad feeds and displays them in responsive, themeable layouts.  
Designed for static sites, Jekyll, Blogger, and modern web stacks.

---

## Features

- **Multiple layouts**: list, multiplex, in‑feed, sidebar, hero, carousel  
- **Theme support**: light, dark, premium  
- **JSON‑based data source** (local or remote)  
- **Responsive by default**  
- **Autoplay carousel with smooth scrolling**  
- **Zero dependencies**  
- **Works everywhere**: static HTML, Jekyll, Blogger, CMS, SPA  
- **CDN‑ready** via jsDelivr or UNPKG  
- **Tiny footprint** (minified JS + CSS)

---

## Getting Started

- 👉 Live Demo: https://chstorb.github.io/stc-ads-engine  
- Project Website: https://chstorb.github.io

Include the engine via CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/chstorb/stc-ads-engine@latest/dist/stc-ads-engine.min.css">
<script src="https://cdn.jsdelivr.net/gh/chstorb/stc-ads-engine@latest/dist/stc-ads-engine.min.js" defer></script>
```

Add an ad slot anywhere in your HTML:

```html
<div class="stc-ad-slot" data-layout="list" data-count="3"></div>
```

The engine automatically fetches your JSON feed and renders the ads.

## Layouts


| Layout    |	Description                                      |
|-----------|----------------------------------------------------|
| list	    | Simple vertical list of ads                        |
| multiplex	| Grid layout with multiple items                    |
| infeed	| Inline ads for article feeds                       |
| sidebar	| Compact vertical card                              |
| hero	    | Large hero‑style ad                                |
| carousel	| Horizontal scrollable carousel (supports autoplay) |

Example:

```html
<div class="stc-ad-slot" data-layout="carousel" data-count="10" data-autoplay="true" data-interval="3000"></div>
```

## Themes

Use the data-theme attribute:

```html
<div class="stc-ad-slot" data-layout="list" data-theme="dark"></div>
```

Available themes:

- light (default)
- dark
- premium

## Attributes

| Attribute     | Description                                 |
|---------------|---------------------------------------------| 
| data-layout	| Layout type                                 |
| data-count	| Number of ads to display                    |
| data-theme	| Theme name                                  |
| data-autoplay	| Enable autoplay for carousel (true / false) |
| data-interval	| Autoplay interval in ms                     |
| data-ratio	| Optional image ratio override               |

## JSON Format

The engine expects a simple JSON structure:

```json
[
  {
    "title": "Product Name",
    "price": "€199",
    "image": "https://example.com/image.jpg",
    "url": "https://example.com/product"
  }
]
```

## Demo

A full demo is available in the /demo folder:

```code
demo/index.html
```

You can view it via GitHub Pages once enabled:

```code
https://chstorb.github.io/stc-ads-engine/demo/
```

## Development

```code
src/
  js/
  css/
dist/
demo/
README.md
LICENSE
```

- src/ contains the unminified source files
- dist/ contains production‑ready builds
- demo/ contains the showcase page

## License

MIT License — free for personal and commercial use.

MIT © Christian Storb  
https://chstorb.github.io

## Contributing

Contributions, issues, and feature requests are welcome.
Feel free to open a PR or issue.

## About

STC Ads Engine is developed and maintained by Christian Storb (STORB Consulting).
It is designed to be a clean, modular, and portable solution for rendering ad components across modern web platforms.

