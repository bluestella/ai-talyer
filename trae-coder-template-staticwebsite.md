# Trae Coder - Static Website Development Template

## Project Overview
You are building a modern static website using Next.js and Tailwind CSS with a simple markdown-based CMS system inspired by Jekyll. This allows clients to update content by editing markdown files without touching code.

## Design Inspiration
Before starting development, explore these resources for modern web design inspiration:

### Primary Inspiration Source:
- **Godly**: https://godly.website/ - Curated collection of the best web design inspiration

### Additional Design Resources:
- **Awwwards**: https://www.awwwards.com/ - Award-winning web designs
- **Dribbble**: https://dribbble.com/ - UI/UX design inspiration
- **Behance**: https://www.behance.net/ - Creative portfolios and projects
- **SiteInspire**: https://www.siteinspire.com/ - Web design showcase

### Design Guidelines:
- Focus on **clean, modern aesthetics** with thoughtful use of whitespace
- Implement **smooth animations and micro-interactions** using Framer Motion or CSS
- Use **bold typography** and clear visual hierarchy
- Ensure **high-quality imagery** and optimized performance
- Create **intuitive navigation** and user experience
- Consider **dark mode** options for modern appeal
- Apply **consistent color schemes** aligned with client branding
- Implement **glassmorphism, gradients, or other trending design patterns** where appropriate

**Action**: Before coding, browse Godly for 10-15 minutes to identify design trends and patterns that would work well for the client's industry and brand.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Content Management**: Markdown files with frontmatter (YAML)
- **Markdown Processing**: gray-matter, remark/rehype
- **Deployment**: Vercel (recommended) or Netlify

## Project Structure
```
project-root/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── blog/
│   │       ├── page.tsx
│   │       └── [slug]/
│   │           └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MarkdownContent.tsx
│   └── lib/
│       └── markdown.ts
├── content/
│   ├── pages/
│   │   ├── about.md
│   │   └── services.md
│   └── blog/
│       ├── post-1.md
│       └── post-2.md
├── public/
│   └── images/
├── tailwind.config.ts
└── package.json
```

## Content Structure (Markdown Files)

### Example Page Markdown (`content/pages/about.md`)
```markdown
---
title: "About Us"
description: "Learn more about our company"
slug: "about"
date: "2024-01-15"
featured_image: "/images/about-hero.jpg"
---

# About Our Company

Your markdown content here...
```

### Example Blog Post (`content/blog/post-1.md`)
```markdown
---
title: "How to Build Modern Websites"
description: "A comprehensive guide"
slug: "modern-websites-guide"
date: "2024-01-20"
author: "John Doe"
tags: ["web development", "nextjs"]
featured_image: "/images/blog/post-1.jpg"
published: true
---

Your blog post content here...
```

## Implementation Requirements

### 1. Markdown Processing Library (`src/lib/markdown.ts`)
Create utility functions to:
- Read markdown files from the `content/` directory
- Parse frontmatter (YAML metadata)
- Convert markdown to HTML
- Get all pages/posts
- Get single page/post by slug
- Sort posts by date
- Filter published content

### 2. Core Components

**MarkdownContent Component**
- Renders parsed markdown as HTML
- Applies proper styling to markdown elements
- Handles images, links, code blocks, etc.

**Header Component**
- Navigation menu (can be defined in a config file or markdown)
- Mobile-responsive hamburger menu
- Logo/branding

**Footer Component**
- Contact information
- Social media links
- Copyright notice

### 3. Dynamic Routes
- `/[slug]` - Dynamic pages from `content/pages/`
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual blog posts

### 4. Tailwind Configuration
- Custom color scheme matching client branding
- Typography plugin for markdown styling
- Responsive breakpoints
- Custom utility classes if needed

## Client Content Management Workflow

### For Non-Technical Clients:
1. **Edit Content**: Modify markdown files in `content/` folder
2. **Add Images**: Upload to `public/images/`
3. **Commit Changes**: Use GitHub Desktop or web interface
4. **Push to Repository**: Changes trigger automatic deployment

### File Naming Convention:
- Pages: `kebab-case-title.md`
- Blog posts: `YYYY-MM-DD-post-title.md` or `post-title.md`

## Configuration File (`site.config.js`)
```javascript
module.exports = {
  siteName: "Client Company Name",
  siteDescription: "Company tagline",
  siteUrl: "https://clientsite.com",
  logo: "/images/logo.svg",
  socialMedia: {
    facebook: "https://facebook.com/...",
    instagram: "https://instagram.com/...",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
}
```

## Key Features to Implement

### Essential:
- ✅ Static site generation (SSG) for all pages
- ✅ Markdown with frontmatter support
- ✅ Responsive design (mobile-first)
- ✅ SEO optimization (metadata, Open Graph)
- ✅ Image optimization (Next.js Image component)
- ✅ Syntax highlighting for code blocks
- ✅ Blog with pagination/filtering
- ✅ RSS feed generation

### Nice-to-Have:
- 🎯 Search functionality
- 🎯 Tags/categories system
- 🎯 Related posts
- 🎯 Table of contents for long posts
- 🎯 Reading time estimate
- 🎯 Dark mode toggle
- 🎯 Contact form with API route

## Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Deployment Checklist
- [ ] Configure environment variables
- [ ] Set up custom domain
- [ ] Enable HTTPS
- [ ] Configure automatic deployments from main branch
- [ ] Set up preview deployments for branches
- [ ] Add Google Analytics / tracking (if needed)
- [ ] Test all pages and links
- [ ] Verify mobile responsiveness
- [ ] Check page load performance

## Client Handoff Documentation
Provide clients with:
1. **Content Guide**: How to edit markdown files
2. **Style Guide**: Available frontmatter fields
3. **Image Guide**: Optimal image sizes and formats
4. **Git Workflow**: How to commit and push changes
5. **Support Contact**: How to reach you for technical issues

## Notes
- All content changes trigger automatic rebuilds on Vercel/Netlify
- Markdown files are version-controlled, providing content history
- No database required - everything is file-based
- Can be extended with API routes for forms or dynamic features
- Easy to migrate to a headless CMS later if needed

---

**Start each project by cloning this template structure and customizing based on client needs.**
