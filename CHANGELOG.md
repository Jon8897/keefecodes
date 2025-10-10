# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Optimise particle performance and dynamic color switching based on theme.
- Connect Sanity CMS for blog and projects.
- Add image optimisation and lazy loading for better performance.
- Expand SEO metadata and Open Graph support.
- Improve CI/CD workflow with environment-based deploy options.

---

## [1.0.0.1] - 2025-10-10
- Improved **Particles.js** performance by reducing particle count and speed.
- Added **theme-based particle color switching** for dark/light mode.
- Compressed **Hero image** to `.webp` format for faster load times.
- Cleaned and documented **CI/CD GitHub Actions** workflow file.
- Minor routing and accessibility adjustments.

---

## [1.0.0.0] - 2025-05-02
### Added
- Full portfolio layout using **React (Vite)** and **TailwindCSS**.
- **Framer Motion** animations across Hero and section transitions.
- **Dark/Light theme toggle** with context provider.
- **Hero section** featuring interactive **Particles.js** background.
- **Responsive navigation bar** with smooth scrolling and mobile menu.
- **Footer** with social links and site navigation.
- **SEO-friendly structure** (meta tags, title management, accessibility pass).
- **GitHub Actions CI/CD pipeline** for live deployment to Hostinger via SSH.
- **Sanity CMS integration** (base schema setup for blog and projects – pending content sync).
- Initial setup of **repository** and **project directory organization**.

### Fixed
- Deployment failures due to SSH/SCP authentication errors (resolved with SSH key + secret cleanup).
- Routing issue causing 404 on `/blog` (temporary fix, pending CMS integration).

### Known Issues
- **Particles.js performance lag** on homepage (especially mobile devices).
- **Large hero image** and overlapping animations affect initial page load time.
- Blog section not yet connected to Sanity dataset.
- Image optimization and code-splitting not yet applied.
