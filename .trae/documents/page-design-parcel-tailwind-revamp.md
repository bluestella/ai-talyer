# Page Design Spec — Parcel + Tailwind Revamp (Desktop-first)

## Global Design System

### Layout
- Desktop-first, max content width: 1200–1280px.
- Use a hybrid layout approach:
  - Flexbox for header/footer and simple horizontal alignment.
  - CSS Grid for section layouts and image galleries.
- Spacing system: 4px baseline (Tailwind spacing scale), with section padding typically `py-16` to `py-28` on desktop.
- Breakpoints (Tailwind default):
  - `sm` for small devices, `md` for tablets, `lg` for desktop, `xl/2xl` for large desktop.

### Global Styles (Tokens)
- Background: near-black / deep navy (e.g., `#05070B`), with subtle gradients.
- Surface: dark elevated panels (e.g., `#0B1220`) for cards.
- Text:
  - Primary: off-white (e.g., `#F5F7FA`).
  - Secondary: cool gray (e.g., `#B4C0D1`).
- Accent: metallic gold or electric blue accent (pick one and apply consistently) used for CTAs, focus rings, dividers.
- Typography:
  - Headings: modern display serif or high-contrast sans; use large scale for hero (e.g., 56–72px desktop).
  - Body: clean sans, 16–18px desktop.
- Buttons:
  - Primary: solid accent background, dark text; hover increases brightness + slight lift.
  - Secondary: transparent with 1px border; hover adds subtle background tint.
- Links: underline on hover; use accent color for emphasis.
- Motion: minimal and premium (150–250ms transitions), avoid bouncy effects.

### Reusable Components
- Top Nav
  - Left: logo/wordmark.
  - Right: nav links (Home, Contact) + primary CTA button.
  - On small screens: collapse to hamburger panel.
- Section Container
  - `mx-auto px-6 lg:px-10` with consistent vertical rhythm.
- Media Block
  - Image/video with overlay gradient + caption.
- Card
  - Dark surface + subtle border + soft shadow.

---

## Page: Home

### Meta Information
- Title: "[Brand] — Private Aviation" (replace with your brand name)
- Description: One-sentence premium positioning + CTA intent.
- Open Graph:
  - `og:title`, `og:description`, `og:image` (hero image), `og:type=website`.

### Page Structure
Stacked premium sections with strong media:
1) Top Nav (sticky)
2) Hero (full-bleed)
3) Value proposition sections (split layouts)
4) Visual showcase (gallery)
5) Reassurance content (static)
6) Footer

### Sections & Components
1. Top Nav
   - Sticky with slight blur/backdrop.
   - Primary CTA button routes to `/contact`.

2. Hero (full-bleed)
   - Background: video or high-res image with gradient overlay.
   - Content:
     - H1 headline (short, high-impact).
     - 1–2 line subheadline.
     - Primary CTA (to Contact) + Secondary CTA (scroll to next section).
   - Interaction:
     - CTA hover states and focus states.

3. Value Proposition Sections
   - 2–4 content blocks.
   - Layout: alternating split (text left / media right, then swap).
   - Each block includes:
     - Title, short paragraph, 2–3 bullets.

4. Visual Showcase
   - Desktop: 3–4 column grid of images.
   - Tablet/mobile: 2 columns then 1 column.
   - Optional lightbox behavior is NOT required; keep to static grid unless already present in current site.

5. Reassurance Content
   - A calm, readable section on dark surface.
   - Layout: 3-card grid with short headings + 2 lines of copy.

6. Footer
   - Columns: navigation, contact info, small legal line.
   - Ensure contrast and readability.

---

## Page: Contact Us

### Meta Information
- Title: "Contact Us — [Brand]"
- Description: Encourage inquiries; mention response timeframe if you want.
- Open Graph:
  - `og:title`, `og:description`, `og:image` (brand/hero image), `og:type=website`.

### Page Structure
Left-right layout on desktop, stacked on mobile:
- Left: form
- Right: direct contact details + short reassurance note

### Sections & Components
1. Top Nav
   - Same global nav for consistency.

2. Contact Header
   - Page title + 1 short paragraph setting expectations.

3. Lead Form (primary)
   - Fields (minimum viable):
     - Name (required)
     - Email (required)
     - Phone (optional)
     - Message (required)
   - Field design:
     - Dark inputs, 1px border, clear focus ring in accent.
     - Inline validation messages below each field.
   - Submit button:
     - Primary CTA style.
   - Submission states:
     - Loading: disable inputs + show “Sending…”
     - Success: show confirmation panel (keep user on page).
     - Error: show error message + allow retry.

4. Direct Contact Details (secondary)
   - Display business email and phone (as provided).
   - Optional location text (no map required).

5. Privacy Note
   - Short line below form: what you collect + how you use it.

### Responsive Behavior
- Desktop (`lg+`): 2-column grid with comfortable spacing.
- Tablet/mobile: stack content; keep submit CTA visible and full-width.

### Accessibility
- Ensure keyboard navigation for all fields and buttons.
- Use proper labels, `aria-describedby` for validation errors, and high-contrast text.
- Success/error messages should be announced (ARIA live region).