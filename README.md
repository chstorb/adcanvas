# AdCanvas

[![Latest Release](https://img.shields.io/github/v/release/chstorb/adcanvas?label=Latest&style=flat-square)](https://github.com/chstorb/adcanvas/releases/latest)
[![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hy/chstorb/adcanvas?style=flat-square)](https://www.jsdelivr.com/package/gh/chstorb/adcanvas)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/chstorb/adcanvas/auto-release.yml?branch=main&style=flat-square)](https://github.com/chstorb/adcanvas/actions)
[![Status](https://img.shields.io/badge/status-active-brightgreen?style=flat-square)](https://github.com/chstorb/adcanvas)
[![Engine](https://img.shields.io/badge/engine-javascript-yellow?style=flat-square)](src/js/adcanvas.js)
[![Version](https://img.shields.io/github/v/release/chstorb/adcanvas?style=flat-square)](CHANGELOG.md)

A lightweight, zero-dependency ad display engine for modern web applications. Renders customizable ads with multiple layout options, theme support, and automatic fallback mechanisms.

**[📍 Live Demo](https://codepen.io/editor/chstorb/pen/019d15fb-6659-7aa0-a61b-00233f8df247)** | **[🔗 Repository](https://github.com/chstorb/adcanvas)** | **[📄 License](LICENSE)**

## 🚀 Features

- **Zero Dependencies** – Pure vanilla JavaScript, no frameworks or libraries required
- **6 Responsive Layouts** – list, multiplex, in-feed, sidebar, hero, carousel
- **3 Themes** – light (default), dark, and premium color schemes
- **🆕 Design API (CSS Variables)** – Fully customizable tokens for colors, spacing, and more
- **🆕 DataSource Architecture** – Configurable data loading with transform, filter, and sort logic
- **🆕 Custom Templates** – Override any layout template with your own HTML/logic
- **Touch-Friendly Carousel** – Auto-play, swipe gestures, responsive buttons
- **Offline-Ready** – Multi-layer fallback data system
- **Developer-Friendly** – Simple HTML attributes, auto-initialize, no config needed
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

### 🔥 Live Demo (CodePen)

If you want to try AdCanvas instantly without setting up a project, you can use the interactive CodePen demo:

👉 https://codepen.io/editor/chstorb/pen/019d15fb-6659-7aa0-a61b-00233f8df247

This demo shows the basic initialization and rendering flow and is ideal for quick experimentation.

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

## 🎨 Design API – CSS Variables

AdCanvas 1.1 introduces a **CSS Variable system** (Design API) for deep, update-safe customization. All visual tokens are defined in `:root` and can be overridden globally, per-theme, or per-slot.

### Available Variables

| Category | Variable | Default | Description |
|----------|----------|---------|-------------|
| Colors | `--adcanvas-bg` | `#fff` | Background color |
| | `--adcanvas-text` | `#222` | Text color |
| | `--adcanvas-border` | `#ddd` | Border color |
| | `--adcanvas-price` | `#008000` | Price highlight color |
| Radii | `--adcanvas-radius-sm` | `4px` | Small corner radius |
| | `--adcanvas-radius-md` | `6px` | Medium corner radius |
| | `--adcanvas-radius-lg` | `10px` | Large corner radius |
| Shadows | `--adcanvas-shadow` | `0 4px 12px rgba(0,0,0,0.12)` | Card shadow |
| Spacing | `--adcanvas-spacing-xs` | `4px` | Extra-small spacing |
| | `--adcanvas-spacing-sm` | `8px` | Small spacing |
| | `--adcanvas-spacing-md` | `12px` | Medium spacing |
| | `--adcanvas-spacing-lg` | `16px` | Large spacing |
| Image Heights | `--adcanvas-img-list` | `160px` | List layout image height |
| | `--adcanvas-img-multiplex` | `120px` | Multiplex layout |
| | `--adcanvas-img-sidebar` | `140px` | Sidebar layout |
| | `--adcanvas-img-hero` | `240px` | Hero layout |
| | `--adcanvas-img-carousel` | `120px` | Carousel layout |
| Nav Buttons | `--adcanvas-btn-bg` | `#fff` | Button background (decoupled from card bg) |
| | `--adcanvas-btn-color` | `#333` | Arrow/icon color |
| | `--adcanvas-btn-border` | `#ccc` | Button border color |

### Creating a Custom Theme

Define a CSS class that overrides only the variables you want:

```css
/* path: your-styles.css */
.my-brand-theme {
    --adcanvas-bg: #e1f5fe;
    --adcanvas-text: #01579b;
    --adcanvas-border: #4fc3f7;
    --adcanvas-radius-md: 16px;
    --adcanvas-img-list: 200px;
}
```

Apply it directly to your slot:

```html
<div class="adcanvas-ad-slot my-brand-theme" data-layout="list" data-count="3"></div>
```

> No forking of the source CSS required. Your customizations are update-safe and isolated.

## ⚙️ DataSource & Template Architecture

AdCanvas 1.1 features a powerful, modular architecture for data management and rendering, inspired by professional UI frameworks.

### 🧩 DataSource Configuration

The `dataSource` object allows you to control how ads are fetched, processed, and displayed.

```javascript
window.AdCanvasConfig = {
  dataSource: {
    url: "https://example.com/api/ads.json",

    // Optional: Custom fallback data if the fetch fails
    fallback: [
      { productName: "Backup Ad 1", displayPrice: "EUR 99", ... }
    ],

    // Optional: Transform raw data into the expected format
    transform: (data) => data.map(item => ({
      ...item,
      productName: item.title.toUpperCase()
    })),

    // Optional: Filter ads based on custom logic
    filter: (ad) => ad.stock > 0 && ad.currency === "EUR",

    // Optional: Sort ads (e.g., by price)
    sort: (a, b) => parseFloat(a.searchPrice) - parseFloat(b.searchPrice)
  }
};
```

### 🎨 Custom Templates

You can override the default HTML for any layout. This allows for total control over the visual presentation while keeping the core engine logic.

```javascript
window.AdCanvasConfig = {
  templates: {
    // Override the "list" layout template
    list: (ad) => `
      <div class="my-custom-card">
        <a href="${ad.awDeepLink}" rel="sponsored" target="_blank">
          <img src="${ad.merchantImageUrl}" alt="${ad.productName}">
          <h3>${ad.productName}</h3>
          <p class="price">${ad.displayPrice}</p>
        </a>
      </div>
    `,

    // Override the "hero" layout template
    hero: (ad) => `
      <div class="my-custom-hero">
        <h2>${ad.productName}</h2>
        <p>Special Offer: ${ad.displayPrice}</p>
        <button onclick="window.open('${ad.awDeepLink}')">Shop Now</button>
      </div>
    `
  }
};
```

> [!TIP]
> Use the `sanitize()` helper (if available in your scope) or ensure you are not rendering untrusted HTML to prevent XSS attacks.

---


### HTML Attributes on `.adcanvas-ad-slot`

| Attribute | Type | Default | Required | Description |
|-----------|------|---------|----------|-------------|
| `data-layout` | string | "list" | No | Layout type: list, multiplex, infeed, sidebar, hero, carousel |
| `data-count` | number | 3 | No | Number of ads to display (random selection from feed) |
| `data-theme` | string | "light" | No | Theme: light, dark, premium |
| `data-label` | string | "Werbung" | No | Label text displayed above the ad slot ("Anzeige", "Werbung", etc.) |
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

You can override the default feed URL, provide custom **Fallback Ads**, and configure the **DataSource** or **Templates** before loading the script:

```html
<script>
window.AdCanvasConfig = {
  feedUrl: "https://your-server.com/ads.json",
  enableDebug: false,
  
  // New: DataSource configuration
  dataSource: {
    filter: (ad) => ad.currency === "EUR",
    sort: (a, b) => b.searchPrice - a.searchPrice
  },

  // New: Template overrides
  templates: {
    hero: (ad) => `<div class="hero-ad">${ad.productName}</div>`
  },

  fallbackAds: [
      {
        awDeepLink: "https://example.com/product",
        productName: "Featured Demo Product",
        merchantImageUrl: "https://example.com/demo.jpg",
        displayPrice: "EUR 99"
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

1. Fork the repository  
2. Create a feature branch:  
   ```
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes using the required commit conventions:  
   ```
   feat: add amazing feature
   ```
   See the section **Commit Conventions (for Automated Releases)** below.
4. Push your branch:  
   ```
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

### 📝 Commit Conventions (for Automated Releases)

AdCanvas uses an automated release workflow.  
To ensure correct versioning, changelog generation, and release notes, all commits should follow these conventions:

#### Feature Commits
```
feat: short description of the new feature
```
Triggers a **minor version** bump (e.g., 1.2.0 → 1.3.0).

#### Bug Fixes
```
fix: short description of the fix
```
Triggers a **patch version** bump (e.g., 1.2.0 → 1.2.1).

#### Breaking Changes
```
feat!: short description of the breaking change
```
or in the commit body:
```
BREAKING CHANGE: explanation
```
Triggers a **major version** bump (e.g., 1.2.0 → 2.0.0).

#### Other Commit Types
```
docs: ...
chore: ...
refactor: ...
style: ...
test: ...
```
These do **not** affect versioning but are included in the generated changelog.

#### Why This Matters
- Versions are determined automatically from commit messages  
- Release notes are generated automatically  
- `CHANGELOG.md` stays up to date  
- Releases remain consistent and jsDelivr‑compatible  

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

