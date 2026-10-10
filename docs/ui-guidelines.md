# UI guidelines (Refresh v3)

These rules guide the v3 UI/UX refresh tracked in #91. They are a small, practical layer on top of TocasUI, not a new design system. Each page change lands in its own PR and follows these rules.

**Core principle:** keep the KageRyo personality, improve how information is presented; keep the engineering depth, lower the cost of reading it.

## What stays

- Vue 3 + TocasUI 5.7, the four main routes (`/`, `/about`, `/projects`, `/contact`) and optional `/projects/:slug` detail pages.
- zh-TW / en / ja, light / dark themes, the deliberate mixed-language copy (for example "A Student && Developer from Taiwan." next to Chinese text).
- Personal elements: the KageRyo illustration and greeting, the Quote, Featured Photos, the "See More" drawer, profile photos, the shared career headline under every page title.
- Noto Sans TC, the TocasUI palette and the existing focus ring. No new fonts, colors or animation libraries.

## Choose the container by content type

Cards are for **choosing between things**. Everything else is laid out with typography, whitespace and hairline dividers.

| Content            | Pattern                                  | Why                                                                           |
| ------------------ | ---------------------------------------- | ----------------------------------------------------------------------------- |
| Home hero          | Image + text, two columns                | Keeps the personal identity first                                             |
| Home selected work | Columns with a top rule, no box          | Visitors pick a project, but three boxes in a row would look like a dashboard |
| Education          | Horizontal entries, no border            | Only two short entries                                                        |
| Experience         | Full-width rows with a date column       | Longer text reads better at full width                                        |
| Skills             | One tinted panel with labelled chip rows | The only boxed block on About; chips scan quickly                             |
| Certificates       | Collapsed accordion                      | Secondary information                                                         |
| Projects overview  | Cards                                    | Visitors compare and choose projects                                          |
| Project detail     | Article with side headings               | Continuous reading; diagrams and evidence are the visual anchors              |
| Media / coverage   | Thumbnail + source + headline rows       | Like a news list, only when real coverage exists                              |

A bordered `ts-box` is appropriate when the block is one choosable item among peers, or a self-contained widget (modal, form, table). It is **not** appropriate to wrap a paragraph, a timeline entry, or a whole page section.

## Layout

- **Container:** TocasUI `ts-container` (unchanged).
- **Sections:** `.editorial-section` (in `assets/css/style.css`) gives each page section `3rem` vertical padding (`2rem` below 768px) and separates consecutive sections with a 1px `--ts-gray-300` rule.
- **Reading width:** prose and long lists use `.reading-width` (max `44rem`, about 45 CJK or 75 Latin characters per line).
- **Side headings:** on project detail pages, a section's kicker and `h2` sit in a narrow left column (about 30%) with the content on the right at 768px and up; they stack below 768px.
- **Spacing:** multiples of `0.25rem`; in practice `0.5 / 1 / 1.5 / 2 / 3rem`. Inside a section, related items are `1–1.5rem` apart; sections are `3rem` apart.
- **Breakpoints:** TocasUI's (`mobile` < 768px, `tablet` 768–1023px, `desktop` ≥ 1024px). Every page must fit a 390px viewport without horizontal scrolling.

## Typography

| Role                               | Implementation                                      |
| ---------------------------------- | --------------------------------------------------- |
| Page title (banner)                | `h1.ts-header.is-huge.is-heavy` (30px), unchanged   |
| Section kicker                     | `SectionKicker` component, see below                |
| Section heading                    | `h2.ts-header.is-big.is-heavy` (24px)               |
| Entry title                        | `h3.ts-header.is-heavy` (17px)                      |
| Meta (dates, organisation, status) | `ts-text is-description`, tabular figures for dates |
| Body                               | 15px TocasUI base, line-height 1.75                 |

The section kicker is a small label above a section heading, such as `02 / Education`: 0.8rem, uppercase, `0.12em` tracking, `--ts-gray-600`, with the number in `--ts-link-700`. It is always English, like the shared headline, and `aria-hidden` because the `h2` carries the meaning.

Headings stay sequential (`h1` → `h2` → `h3`). Kickers number the sections of one page in reading order (`01`, `02`, …) and are used on pages read top to bottom (About, project details). The home page keeps its own rhythm and uses plain `h2` headings.

## Images, diagrams and media

- Only real, public-safe assets with a known source and permission. Never mock screenshots or invent coverage.
- Always declare `width` / `height`; serve right-sized WebP; `loading="lazy"` below the fold; meaningful `alt`, and a visible caption with source or credit when the image is evidence.
- Recommended ratios: hero 16:9, screenshots at native ratio (16:10 or 16:9), event photos 3:2.
- Diagrams are built in HTML/CSS when they are simple flows, so they translate, adapt to dark mode and stay readable by screen readers. Cite the source (for example the pull request) in the caption.
- Missing media renders nothing — no placeholders, no empty sections.

## Links, buttons and states

- One filled (primary) button per block; the rest are outlined. On Home the primary action is **View Projects**.
- Inline links keep the underline; external links use `is-external-link` and open in a new tab with `rel="noopener noreferrer"`.
- Evidence links (PRs, issues, publications) show their status as text, never by color alone.
- The global focus ring (3px `#005fcc`, 3px offset) applies to every interactive element; don't remove it.

## Color and theming

- Use TocasUI tokens only (`--ts-gray-*`, `--ts-link-700`, `ts-content is-tertiary`), which already switch through `light-dark()`. No raw hex values in components.
- Text contrast is at least 4.5:1 in both themes: `--ts-gray-600` on the page background is about 7:1 in light mode, and `--ts-gray-500` / `--ts-gray-600` are 8:1 or more in dark mode.
- Dividers use `--ts-gray-300`, which is visible in both themes.

## Motion

No new animations. Hover and focus changes may transition color only. The global `prefers-reduced-motion` rule stays in place.

## Wireframes

### About — desktop (≥ 768px)

```text
┌ banner ─────────────────────────────────────────────────────────┐
│ Chien-Hsun Chang                                                │
│ Backend / Platform Engineer | AI Systems / MLOps                │
└─────────────────────────────────────────────────────────────────┘
 01 / INTRODUCTION
 ┌─────────────┐  Chien-Hsun Chang 張健勳
 │   photo     │  A Student && Developer from Taiwan.
 │             │  (cap icon) Education — CCU M.S. student
 └─────────────┘  Summary paragraph (reading width) · motto
                  [Download Resume (PDF)] [GitHub]
                  Gender · Age (secondary line)
 ─────────────────────────────────────────────────────────────────
 02 / EDUCATION
 Education
 2025/08 ~ 2027/08              2021/09 ~ 2025/06
 National Chung Cheng Univ.     National Taichung Univ. of S&T
 M.S. in CSIE                   B.Eng. in Intelligent Production
 ─────────────────────────────────────────────────────────────────
 03 / EXPERIENCE
 Work Experience
 2025/08 ~ Present   Research Assistant / Project Lead
                     National Chung Cheng University
                     • highlight  • highlight  • highlight
 ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 2025/08 ~ Present   System Administrator …
 ─────────────────────────────────────────────────────────────────
 04 / SKILLS
 Skills
 ░ Languages       [Python] [Go] [Rust] …                        ░
 ░ Backend & Data  [FastAPI] …                                   ░
 ─────────────────────────────────────────────────────────────────
 05 / CERTIFICATES
 Certificates ▸ (collapsed)
```

### About — mobile (390px)

```text
 Chien-Hsun Chang
 Backend / Platform Engineer | …
 01 / INTRODUCTION
 [ photo, full width ]
 Chien-Hsun Chang 張健勳
 … summary …
 [Download Resume (PDF)]
 [GitHub]
 ───────────────
 02 / EDUCATION
 Education
 2025/08 ~ 2027/08
 National Chung Cheng University
 M.S. in CSIE
 2021/09 ~ 2025/06
 …
 ───────────────
 03 / EXPERIENCE
 2025/08 ~ Present
 Research Assistant / Project Lead
 National Chung Cheng University
 • highlight …
 ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 …
```

### Project detail (KServe) — desktop

```text
┌ banner ─────────────────────────────────────────────────────────┐
│ Open Source                                                     │
│ Contributing to KServe (CNCF)                                   │
│ One-paragraph lede: what the project is and what I changed.     │
│ Open Source Contributor · Sep 2025 – Present                    │
│ [Python] [Go] [Kubernetes] [CRD] [Helm]                         │
└─────────────────────────────────────────────────────────────────┘
 01 / CONTRIBUTIONS  │ ✓ Merged  Logging configuration fix
 Contributions at a  │           kserve#4687 · kserve#3919
 Glance              │ ○ Open    runtimeClassName support
                     │           kserve#5198 · kserve#5057
 ─────────────────────────────────────────────────────────────────
 02 / PROBLEM        │ Problem & Goal paragraphs / list
 Problem & Goal      │
 ─────────────────────────────────────────────────────────────────
 03 / ROLE           │ …
 ─────────────────────────────────────────────────────────────────
 04 / ARCHITECTURE   │ ┌ diagram: where each change takes effect ┐
 Architecture        │ │ configure_logging() → hasHandlers() → … │
                     │ └ caption: drawn from kserve#4687, #5198 ─┘
                     │ • details …
 ─────────────────────────────────────────────────────────────────
 05 / TRADE-OFFS  ·  06 / OUTCOMES  ·  07 / MEDIA (only if any)
 ← Back to Projects
```

### Project detail — mobile (390px)

```text
 Open Source
 Contributing to KServe (CNCF)
 Lede paragraph …
 Role · Period
 [Python] [Go] …
 01 / CONTRIBUTIONS
 Contributions at a Glance
 ✓ Merged
 Logging configuration fix
 kserve#4687 · kserve#3919
 ───────────────
 02 / PROBLEM
 Problem & Goal
 …
 04 / ARCHITECTURE
 [diagram steps stack vertically ↓]
```

## Review checklist for each v3 PR

- [ ] Containers follow the table above; no new boxes around prose or timeline rows.
- [ ] zh-TW, en and ja render without missing keys; mixed-language copy is intentional.
- [ ] Light and dark themes checked; contrast ≥ 4.5:1 for text.
- [ ] 1280px and 390px checked; no horizontal scrolling.
- [ ] Keyboard order follows the visual order; focus ring visible.
- [ ] Images have dimensions, alt text, lazy loading below the fold and a real source.
- [ ] No invented achievements, metrics, endorsements or coverage.
