# Component Library

This folder contains reusable React components for the Atlis music project website.

## Components

### Typography Components (`Typography.jsx`)

- **Heading** - Semantic headings (h1-h6) with consistent styling
- **Text** - Flexible text with size, weight, and color options
- **Lead** - Large introductory text
- **Label** - Form label component

### UI Components

- **Button** (`Button.jsx`) - Multi-variant button (primary, secondary, outline, ghost, danger)
- **Navigation** (`Navigation.jsx`) - Responsive navbar with mobile menu

## Quick Import

```jsx
import { Heading, Text, Lead, Button, Navigation } from "./components";
```

## Design System

All components use CSS variables from `/src/styles/design-system.css`.

- Typography
- Spacing
- Borders & Shadows
- Transitions

Customize the design system by editing the CSS variables.
