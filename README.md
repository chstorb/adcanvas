# AdCanvas

[![Latest Release](https://img.shields.io/github/v/release/chstorb/adcanvas?label=Latest&style=flat-square)](https://github.com/chstorb/adcanvas/releases/latest)
[![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hy/chstorb/adcanvas?style=flat-square)](https://www.jsdelivr.com/package/gh/chstorb/adcanvas)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/chstorb/adcanvas/auto-release.yml?branch=main&style=flat-square)](https://github.com/chstorb/adcanvas/actions)
[![Status](https://img.shields.io/badge/status-active-brightgreen?style=flat-square)](https://github.com/chstorb/adcanvas)
[![Engine](https://img.shields.io/badge/engine-javascript-yellow?style=flat-square)](src/js/adcanvas.js)

A lightweight, zero-dependency ad display engine for modern web applications. Renders customizable ads with multiple layout options, theme support, and automatic fallback mechanisms.

**[📍 Live Demo](https://chstorb.github.io/adcanvas/docs/demo/)** | **[🔗 Repository](https://github.com/chstorb/adcanvas)** | **[📄 License](LICENSE)**

## 🚀 Features

- **Zero Dependencies** – Pure vanilla JavaScript, no frameworks or libraries required
- **6 Responsive Layouts** – list, multiplex, in-feed, sidebar, hero, carousel
- **3 Themes** – light (default), dark, and premium color schemes
- **Touch-Friendly Carousel** – Auto-play, swipe gestures, responsive buttons
- **Offline-Ready** – Fallback data for when feed is unavailable
- **Developer-Friendly** – Simple HTML attributes, auto-initialize, no config needed
- **CDN-Ready** – Available via jsDelivr and UNPKG
- **Accessible** – Keyboard navigation, ARIA labels, semantic HTML
- **Production-Ready** – XSS-safe sanitization, input validation, error handling

## 📦 Installation

### Via CDN (Recommended)

Add to your HTML `<head>` section:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/chstorb/adcanvas@latest/dist/adcanvas.min.css">

<!-- JavaScript -->
<script type="module" src="https://cdn.jsdelivr.net/gh/chstorb/adcanvas@latest/dist/adcanvas.min.js" defer></script>
```

### Local / Self-Hosted

1. Download or clone the repository:

```bash
git clone https://github.com/chstorb/adcanvas.git
cd adcanvas
```

2. Copy files to your project:

```bash
cp src/js/adcanvas.js your-project/
cp src/css/adcanvas.css your-project/
# Or use minified versions from dist/
cp dist/adcanvas.min.js your-project/
cp dist/adcanvas.min.css your-project/
```

3. Include in your HTML:

```html
<link rel="stylesheet" href="/path/to/adcanvas.min.css">
<script type="module" src="/path/to/adcanvas.min.js" defer></script>
```

### TypeScript Support

If you're using TypeScript, type definitions are available:

```typescript
import type { AdCanvasAd, AdCanvasAdSlot } from 'adcanvas';
```

See [dist/adcanvas.d.ts](dist/adcanvas.d.ts) for full type definitions.

## 🎯 Quick Start

### Basic Usage

Add a simple ad slot to your HTML:

```html
<div class="adcanvas-ad-slot"></div>
```

The engine automatically initializes on page load and displays 3 random ads in list layout.

### With Attributes

Control layout, count, and theme:

```html
<!-- Multiplex grid layout, 6 ads, dark theme -->
<div class="adcanvas-ad-slot" 
     data-layout="multiplex" 
     data-count="6" 
     data-theme="dark"></div>

<!-- Carousel with autoplay -->
<div class="adcanvas-ad-slot" 
     data-layout="carousel" 
     data-count="10" 
     data-autoplay="true" 
     data-interval="4000"></div>

<!-- Premium hero layout -->
<div class="adcanvas-ad-slot" 
     data-layout="hero" 
     data-count="1" 
     data-theme="premium"></div>
```

That's it! The engine loads your feed and renders ads automatically.

## 📊 Layouts

Choose how your ads are displayed:

| Layout | Use Case | Responsive | Auto-Play | Best For |
|--------|----------|------------|-----------|----------|
| **list** | Simple vertical cards | ✅ Full width | ❌ No | Sidebars, feeds |
| **multiplex** | CSS Grid gallery | ✅ Adaptive columns | ❌ No | Product walls, galleries |
| **infeed** | Horizontal cards (image + content) | ✅ Adapts | ❌ No | Blog posts, articles |
| **sidebar** | Centered narrow layout | ✅ Parent-width | ❌ No | Sidebars (< 300px) |
| **hero** | Large featured ad | ✅ Responsive height | ❌ No | Homepage, hero sections |
| **carousel** | Swipeable horizontal scroll | ✅ Touch-friendly | ✅ Optional | Mobile-first, features |

### Layout Examples

#### List Layout
Vertical stack of cards, each with image, title, and price. Best for sidebars and simple feeds.

```html
<div class="adcanvas-ad-slot" data-layout="list" data-count="3"></div>
```

#### Multiplex Layout
CSS Grid that adapts column count based on available space. Responsive and mobile-friendly.

```html
<div class="adcanvas-ad-slot" data-layout="multiplex" data-count="8"></div>
```

#### Carousel Layout
Horizontal scrollable carousel with prev/next buttons and optional auto-play. Touch-swipe enabled.

```html
<div class="adcanvas-ad-slot" 
     data-layout="carousel" 
     data-count="10" 
     data-autoplay="true" 
     data-interval="4000"></div>
```

## 🎨 Themes

Apply color schemes via the `data-theme` attribute:

| Theme | Background | Text | Border | Price | Use Case |
|-------|-----------|------|--------|-------|----------|
| **light** | White | Dark | Gray | Green | Default, most compatible |
| **dark** | Dark gray | Light | Dark | Green | Night mode, dark UIs |
| **premium** | Cream | Dark brown | Gold | Green | Luxury, high-end products |

```html
<!-- Light theme (default) -->
<div class="adcanvas-ad-slot" data-theme="light"></div>

<!-- Dark theme -->
<div class="adcanvas-ad-slot" data-theme="dark"></div>

<!-- Premium theme -->
<div class="adcanvas-ad-slot" data-theme="premium"></div>
```

## ⚙️ API Reference

### HTML Attributes on `.adcanvas-ad-slot`

| Attribute | Type | Default | Required | Description |
|-----------|------|---------|----------|-------------|
| `data-layout` | string | "list" | No | Layout type: list, multiplex, infeed, sidebar, hero, carousel |
| `data-count` | number | 3 | No | Number of ads to display (random selection from feed) |
| `data-theme` | string | "light" | No | Theme: light, dark, premium |
| `data-autoplay` | boolean | false | No | Enable carousel autoplay |
| `data-interval` | number | 4000 | No | Autoplay interval in milliseconds |

### Data Format

The engine expects a JSON array from your feed endpoint. Each ad object should include:

**Required Fields:**
- `awDeepLink` (string): Affiliate/tracking link URL
- `productName` (string): Display name
- `merchantImageUrl` (string): Product image URL
- `displayPrice` (string): Formatted price (e.g., "EUR199", "USD49.99")

**Optional Fields:**
- `merchantName` (string): Brand/merchant name
- `merchantId` (string): Internal identifier
- `currency` (string): Currency code (EUR, USD, etc.)
- Any additional custom fields (will be ignored)

**Example:**

```json
[
  {
    "awDeepLink": "https://www.awin1.com/pclick.php?...",
    "productName": "Luxury Resort Vacation",
    "merchantImageUrl": "https://example.com/resort.jpg",
    "displayPrice": "EUR1299",
    "merchantName": "Travel Agency",
    "merchantId": "12345"
  },
  {
    "awDeepLink": "https://www.awin1.com/pclick.php?...",
    "productName": "City Hotel Package",
    "merchantImageUrl": "https://example.com/hotel.jpg",
    "displayPrice": "EUR499",
    "merchantName": "Booking Partner",
    "merchantId": "12346"
  }
]
```

### Rendering Behavior

- **Random Selection:** Ads are randomly sampled from the feed (using Fisher-Yates shuffle)
- **Caching:** Feed data is fetched once per page load and cached in memory
- **Validation:** Invalid ad objects are automatically filtered out
- **Responsive:** All layouts adapt to parent container width

### Error Handling

The engine gracefully handles errors:

- **Invalid JSON:** Falls back to embedded sample data, logs warning
- **Network Error:** Uses fallback data, logs error with URL
- **Missing Slot:** Skips silently
- **Invalid Ad Data:** Filters out bad records, processes valid ones
- **Missing DOM Elements (Carousel):** Logs error, skips carousel for that slot

**Debug Mode:**

Enable detailed logging:

```html
<script>
window.AdCanvasConfig = { enableDebug: true };
</script>
```

Check browser console for detailed messages.

### Configuration (Advanced)

You can override the default feed URL and provide custom **Fallback Ads** before loading the script:

```html
<script>
window.AdCanvasConfig = {
  feedUrl: "https://your-server.com/ads.json",
  enableDebug: false, // Set to true for detailed console logs
  fallbackAds: [
      {
        awDeepLink: "https://example.com/product",
        productName: "Featured Demo Product",
        merchantImageUrl: "https://example.com/demo.jpg",
        displayPrice: "EUR99"
      }
  ]
};
</script>
<script type="module" src="https://cdn.jsdelivr.net/gh/chstorb/adcanvas@latest/dist/adcanvas.min.js" defer></script>
```

### JavaScript API

The engine auto-initializes on `DOMContentLoaded`. No manual API calls are needed.

If you need to manually initialize (e.g., for dynamically loaded HTML):

```javascript
// After adding new .adcanvas-ad-slot elements to DOM
// The engine will auto-init on the next DOMContentLoaded cycle
// Or refresh the page to trigger initialization
```

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest 2 versions | ✅ Full Support |
| Firefox | Latest 2 versions | ✅ Full Support |
| Safari | Latest 2 versions | ✅ Full Support |
| Edge | Latest 2 versions | ✅ Full Support |
| iOS Safari | Latest 2 versions | ✅ Full Support |
| Chrome Mobile | Latest | ✅ Full Support |
| Firefox Mobile | Latest | ✅ Full Support |
| Samsung Internet | Latest | ✅ Full Support |
| Internet Explorer 11 | - | ❌ Not Supported |
| Opera Mini | - | ⚠️ Limited (No Fetch API) |

### Minimum Requirements

- **JavaScript:** ES2017+ (async/await, Fetch API, Promise)
- **CSS:** CSS Grid, Flexbox support
- **HTML:** HTML5 DOM API

### Known Limitations

- **Internet Explorer 11:** Requires polyfills for async/await and Fetch. Use cdn.jsdelivr.net fallback feed only.
- **Opera Mini:** Touch swipe may not work. Use button navigation instead.
- **Older Android Browsers:** Test before deployment

## 🔧 Development

### Local Setup

1. **Clone the repository:**

```bash
git clone https://github.com/chstorb/adcanvas.git
cd adcanvas
```

2. **File Structure:**

```
src/
  js/adcanvas.js           # Unminified source
  css/adcanvas.css         # Unminified styles
dist/
  adcanvas.js              # Copy of source
  adcanvas.min.js          # Minified
  adcanvas.css             # Copy of source
  adcanvas.min.css         # Minified
docs/demo/
  index.html                     # Live demo page
README.md                        # This file
CHANGELOG.md                     # Version history
```

3. **Build (if needed):**

The auto-release pipeline (`.github/workflows/auto-release.yml`) automatically minifies and releases on push to main.

To manually build:

```bash
# Install build tools
npm install -g terser clean-css-cli

# Minify JavaScript
terser src/js/adcanvas.js --compress --mangle --output dist/adcanvas.min.js --source-map "url=adcanvas.min.js.map"

# Minify CSS
cleancss --source-map -o dist/adcanvas.min.css src/css/adcanvas.css

# Copy unminified
cp src/js/adcanvas.js dist/adcanvas.js
cp src/css/adcanvas.css dist/adcanvas.css
```

4. **Test Demo Locally:**

```bash
# Open in browser (macOS)
open docs/demo/index.html

# Or use a simple server
python3 -m http.server 8000
# Visit: http://localhost:8000/docs/demo/
```

5. **Modify & Test:**

Edit `src/js/adcanvas.js` or `src/css/adcanvas.css`, run build, then test demo.

6. **Publish:**

The GitHub Actions workflow runs automatically on push to main:
- Minifies JS and CSS
- Creates git tag with version
- Publishes release with minified artifacts
- Updates jsDelivr CDN automatically

### Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Code Guidelines

- Write clean, maintainable JavaScript (ES6+)
- Add JSDoc comments for all functions
- Test changes in `docs/demo/index.html`
- Keep zero-dependency principle
- Update CHANGELOG.md for notable changes
- Ensure all 6 layouts still work correctly

### Testing

The demo page tests all 6 layouts and all 3 themes. Before submitting a PR, please:

1. Test the demo page locally
2. Test on mobile devices (iOS, Android)
3. Test on different browsers (Chrome, Firefox, Safari, Edge)
4. Verify touch gestures work (on mobile)
5. Check console for errors/warnings

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for all versions and changes.

## 📄 License

MIT License – See [LICENSE](LICENSE) file for details.

Copyright © 2026 Christian Storb

## 🤝 Support

- **Issues:** [GitHub Issues](https://github.com/chstorb/adcanvas/issues)
- **Discussions:** [GitHub Discussions](https://github.com/chstorb/adcanvas/discussions)
- **Demo:** [Live Demo](https://chstorb.github.io/products/adcanvas/docs/demo/)

---

**Built with ❤️ | Zero Dependencies | Production Ready**

