# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
