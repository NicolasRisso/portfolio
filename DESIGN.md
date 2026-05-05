---
name: Game Programmer Portfolio
colors:
  surface: '#081425'
  surface-dim: '#081425'
  surface-bright: '#2f3a4c'
  surface-container-lowest: '#040e1f'
  surface-container-low: '#111c2d'
  surface-container: '#152031'
  surface-container-high: '#1f2a3c'
  surface-container-highest: '#2a3548'
  on-surface: '#d8e3fb'
  on-surface-variant: '#cac4cd'
  inverse-surface: '#d8e3fb'
  inverse-on-surface: '#263143'
  outline: '#948f97'
  outline-variant: '#49454c'
  surface-tint: '#cdc1df'
  primary: '#cdc1df'
  on-primary: '#342d43'
  primary-container: '#120b20'
  on-primary-container: '#817792'
  inverse-primary: '#635a73'
  secondary: '#ddb7ff'
  on-secondary: '#490080'
  secondary-container: '#6f00be'
  on-secondary-container: '#d6a9ff'
  tertiary: '#c0c1ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#030047'
  on-tertiary-container: '#676bf6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eaddfb'
  primary-fixed-dim: '#cdc1df'
  on-primary-fixed: '#1f182d'
  on-primary-fixed-variant: '#4b435b'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6900b3'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#081425'
  on-background: '#d8e3fb'
  surface-variant: '#2a3548'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-snippet:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

This design system is engineered to project a professional, high-technical-competence image for a game programmer. The aesthetic is "Tactical Minimalist"—combining the restraint of high-end software tools with the atmospheric depth of modern gaming interfaces. 

The visual narrative focuses on precision and logic. It utilizes a dark-first approach to reduce eye strain and mirror code environments, while integrating "Electric Purple" accents to represent energy and creativity. The "Masculine" feel is achieved through structural rigidity, deep tonal ranges, and a lack of unnecessary ornamentation.

The primary design style is **Modern/Glassmorphism**, utilizing translucent layers to suggest complex depth without cluttering the interface. Subtle wave background elements provide a sense of organic movement, contrasting the sharp, technical precision of the UI components.

## Colors

The palette is anchored in deep, midnight purples and slate grays to establish a grounded, masculine foundation. 

- **Primary Background:** A near-black purple (#090613) provides the canvas for high-contrast interactions.
- **Surface Colors:** Slate grays are used for containers, often with reduced opacity to facilitate glassmorphism.
- **Accents:** Electric purple (#A855F7) is reserved for interactive states, key calls-to-action, and critical data highlights. 
- **Gradients:** Wave elements should utilize a subtle linear gradient from the primary deep purple to a muted slate, maintaining a low-profile background presence.

## Typography

This design system uses a dual-font strategy to balance technical grit with readability.

- **Space Grotesk** is used for headlines. Its geometric and slightly eccentric terminals evoke a futuristic, "cutting-edge" technical feel suitable for a game programmer.
- **Inter** is used for body copy and UI labels. It provides a neutral, highly legible contrast to the expressive headlines, ensuring that technical descriptions and project details are easy to digest.

Text should primarily be rendered in high-contrast slate-white (#F8FAFC), with secondary information in a muted slate (#94A3B8).

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** model for desktop, ensuring that content feels structured and intentional. 

- **Grid:** A 12-column grid with a 1200px maximum width.
- **Rhythm:** An 8px linear scale is used to define margins and padding, ensuring mathematical consistency across the UI.
- **Density:** High whitespace is encouraged around project imagery, while technical specs should use tighter spacing (sm/md) to mimic a developer's dashboard or IDE layout.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** rather than traditional drop shadows. 

1. **Base Layer:** The deepest background, featuring the subtle wave elements.
2. **Surface Layer:** Semi-transparent containers (`rgba(30, 41, 59, 0.5)`) with a 12px to 20px backdrop-blur. 
3. **Stroke/Outline:** Elements should use a 1px solid border with low opacity (`rgba(255, 255, 255, 0.1)`) to define edges without adding visual weight.
4. **Interactive Bloom:** On hover, active elements should emit a soft "electric purple" outer glow (0px 0px 15px rgba(168, 85, 247, 0.3)) to simulate hardware lighting.

## Shapes

The design system adopts a **Soft** shape language. 

By using 0.25rem (4px) as the base corner radius, the UI maintains a "precise" and "engineered" feel. Large cards or glass containers should step up to 0.75rem (12px) to ensure they feel modern and approachable, but never "bubbly." Buttons and inputs should remain on the sharper end of the scale to reinforce the masculine, professional tone.

## Components

### Buttons
- **Primary:** Solid Electric Purple background with white text. High-contrast, no shadow, but 1px white top-border for a subtle "beveled" tech look.
- **Secondary:** Ghost button style with the 1px white-transparent border and blur background.
- **State Changes:** On hover, primary buttons should increase in saturation; secondary buttons should increase background opacity.

### Cards (Project Showcases)
Utilize the glassmorphism surface. Imagery should be slightly desaturated, returning to full color only on hover. Include "Tags" or "Chips" at the bottom for languages (C++, C#, GLSL).

### Chips / Tags
Small, dark-slate backgrounds with "label-caps" typography. Use a subtle purple accent border for the primary language of the project.

### Input Fields & Controls
Strictly rectangular with 4px corners. Backgrounds should be darker than the surface layer to create a "punched-in" effect. The focus state must use a 2px electric purple glow.

### Wave Background Elements
Non-interactive, vector-based SVG waves at the top and bottom of the page. These should animate slowly or remain static with a very low-opacity gradient to avoid distracting from the technical portfolio content.