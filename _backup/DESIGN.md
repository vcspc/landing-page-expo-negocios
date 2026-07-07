---
name: Eco-Corporate Modernism
colors:
  surface: '#f9f9f8'
  surface-dim: '#d9dad9'
  surface-bright: '#f9f9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f3'
  surface-container: '#edeeed'
  surface-container-high: '#e7e8e7'
  surface-container-highest: '#e1e3e2'
  on-surface: '#191c1c'
  on-surface-variant: '#414844'
  inverse-surface: '#2e3131'
  inverse-on-surface: '#f0f1f0'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3f6653'
  primary: '#012d1d'
  on-primary: '#ffffff'
  primary-container: '#1b4332'
  on-primary-container: '#86af99'
  inverse-primary: '#a5d0b9'
  secondary: '#56642b'
  on-secondary: '#ffffff'
  secondary-container: '#d6e7a1'
  on-secondary-container: '#5a682f'
  tertiary: '#002d1c'
  on-tertiary: '#ffffff'
  tertiary-container: '#00452e'
  on-tertiary-container: '#75b393'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c1ecd4'
  primary-fixed-dim: '#a5d0b9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#274e3d'
  secondary-fixed: '#d9eaa3'
  secondary-fixed-dim: '#bdce89'
  on-secondary-fixed: '#161f00'
  on-secondary-fixed-variant: '#3e4c16'
  tertiary-fixed: '#b1f0ce'
  tertiary-fixed-dim: '#95d4b3'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#0e5138'
  background: '#f9f9f8'
  on-background: '#191c1c'
  surface-variant: '#e1e3e2'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  title-md:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is rooted in the intersection of corporate professionalism and the organic richness of the Amazonian landscape. It targets high-level executives, entrepreneurs, and government stakeholders participating in the 'Expo Negócios' event. The visual narrative is built on **Modern Minimalism**—leveraging expansive white space, rigorous grid alignment, and a sophisticated nature-inspired palette to convey stability, innovation, and environmental consciousness.

The emotional response should be one of "Structured Vitality." It feels established and trustworthy like a financial institution, yet fresh and breathable like the natural regions it represents. The UI avoids unnecessary decoration, allowing the high-contrast color palette and refined typography to command attention.

## Colors

The palette is extracted directly from the regional identity of the event, emphasizing a deep, prestigious "Forest Green" as the primary anchor.

- **Primary (#1B4332):** A deep, ink-like green used for headlines, primary buttons, and critical branding elements. It provides the "corporate" weight.
- **Secondary (#8A9A5B):** An olive-gold tone used for accents, highlights, and secondary actions. It provides a warm, organic contrast to the deep primary.
- **Tertiary (#2B6777):** A muted teal/blue accent used for data visualization, links, or to represent water elements within the event context.
- **Neutral (#F8F9F8):** An off-white, slightly warm "Paper" gray used for backgrounds to reduce eye strain and maintain a premium feel.
- **Status Colors:** Use a refined palette for feedback—Success (Emerald), Warning (Ochre), and Error (Deep Terracotta) to remain within the organic theme.

## Typography

The typography strategy uses **Manrope** for structural hierarchy (headers and titles) to provide a modern, geometric, yet friendly professional look. **Hanken Grotesk** is used for body copy and labels to ensure maximum legibility in data-heavy or information-rich environments like booth schedules and directories.

Key emphasis is placed on **letter-spacing** for labels; small metadata should feel architectural. Titles use tight tracking to appear more impactful and cohesive. High contrast between the primary green text and the off-white background is mandatory for accessibility and a premium "editorial" feel.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid Grid**. Content is contained within a 1280px max-width container on desktop to ensure readability, while the background elements stretch to fill the viewport. 

- **Grid:** 12-column system for desktop, 6-column for tablet, and 2-column for mobile.
- **Rhythm:** An 8px base unit drives all padding and margins. 
- **White Space:** Generous vertical spacing (section gaps of 80px - 120px) is required to maintain the minimalist aesthetic and allow the "business-nature" theme to feel unhurried and expansive.
- **Mobile:** Margins shrink to 16px, and multi-column card layouts reflow into a single-column vertical stack.

## Elevation & Depth

To maintain a minimalist and clean corporate look, this design system avoids heavy drop shadows. Instead, it utilizes **Tonal Layering** and **Micro-Borders**.

- **Surface Tiers:** Backgrounds use the Neutral color, while cards and containers use pure #FFFFFF to create a subtle lift.
- **Outlines:** Elements like input fields and secondary cards use 1px solid borders in a very light version of the Primary green (opacity 10-15%).
- **Interaction Depth:** Only active or hovered states (like a hovered booth card) should trigger a soft, ambient shadow (e.g., `0 10px 30px rgba(27, 67, 50, 0.08)`), giving the impression of the element floating slightly off the page.

## Shapes

The shape language is **Soft and Precise**. We use a 4px (0.25rem) base radius to ensure the interface feels professional and "engineered" rather than "playful." 

- **Standard Elements:** Buttons and input fields use the base 4px radius.
- **Large Containers:** Image galleries or major content cards use the `rounded-lg` (8px) setting.
- **Icons:** Should be stroke-based (2px weight) with slightly rounded terminals to match the font geometry of Manrope.

## Components

- **Buttons:** Primary buttons are solid Forest Green with white text. Secondary buttons use a Forest Green 1px outline with the Olive Green for text. Use "Manrope Bold" for button labels.
- **Cards:** White background with a 1px soft-green border. Headlines inside cards should be Primary color, while body text is Hanken Grotesk in a slightly muted gray.
- **Input Fields:** Flat design with a 1px bottom border that turns into a full 1px box on focus. Use a subtle Olive Green for the focus border.
- **Chips/Badges:** Used for event categories (e.g., "Networking," "Tech," "Agro"). These use low-saturation background tints of the primary colors with high-saturation text.
- **Lists:** Clean, spacious rows separated by 1px horizontal rules. Use Chevron-right icons in Tertiary teal to indicate drill-down actions.
- **Event-Specific Components:** 
    - **Booth Locator:** High-contrast map markers using the Primary/Secondary palette.
    - **Speaker Profiles:** Circular avatars with a 2px Olive Green border ring.