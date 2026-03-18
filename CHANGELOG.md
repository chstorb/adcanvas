# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- Carousel navigation arrows invisible in custom themes: introduced dedicated `--adcanvas-btn-bg`, `--adcanvas-btn-color`, `--adcanvas-btn-border` variables, decoupled from card color tokens

## [1.1.0] - 2026-03-18

### Added
- **CSS Variables (Design API):** Introduced `:root`-scoped `--adcanvas-*` custom properties for colors, spacing, radii, shadows, and image heights
- Full documentation of Design API variables in README.md
- Custom Theme example in demo page (`docs/demo/index.html`)

### Changed
- All 6 layouts (list, multiplex, infeed, sidebar, hero, carousel) now use CSS variables instead of hardcoded values
- Themes (light, dark, premium) refactored to override variables only — no longer override per-element class properties
- Carousel button hover now uses `filter: brightness(0.9)` for theme-aware hover effect
- Bumped version to `1.1.0` in `adcanvas.css` header

## [1.0.1] - 2026-03-06 (Patch)

### Added
- Improved error handling with detailed logging
- Data validation to prevent XSS injection
- JSDoc comments throughout codebase
- Browser Support documentation
- Error handling documentation with debug mode
- API Reference documentation

### Changed
- Fixed demo paths (docs/demo/index.html)
- Unified JSON format documentation
- CSS comment typo fixes (Multiplex-Layout)
- CONFIG constants for carousel configuration
- Carousel DOM element validation

### Fixed
- Carousel null-check errors
- Missing passive event listeners (touch performance)
- Autoplay timer reset on manual clicks
- Icon duplication in demo folder

### Security
- Added HTML sanitization (XSS protection)
- Added input validation for ad data

## [1.0.0] - 2026-03-06

### Added
- Initial release
- 6 configurable ad layouts (list, multiplex, infeed, sidebar, hero, carousel)
- 3 themes (light, dark, premium)
- Carousel with autoplay, touch swipe, smooth scrolling
- Remote JSON feed with fallback embedded data
- Responsive design (mobile-first)
- Lightweight (zero dependencies)
- Works with Jekyll, static HTML, SPAs
- CDN-ready (jsDelivr, UNPKG)
- Automatic initialization on page load
- Framework-agnostic

---

## Version Details

### Version 1.0.0 Release Info
- **Status:** Stable, Production-Ready
- **Date:** March 6, 2026
- **Size:** ~15KB (minified), ~5KB (gzipped)
- **Compatibility:** Modern browsers (Chrome, Firefox, Safari, Edge)
