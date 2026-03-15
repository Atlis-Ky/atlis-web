# Component Library

This folder contains reusable React components for the Atlis music project website.

## Components

### Layout Components (`Layout.jsx`)

- **Container** - Responsive container with max-width constraints
- **Section** - Full-width sections with padding and background options
- **Grid** - Flexible grid layout system (1-12 columns)
- **Flex** - Flexbox layout with alignment controls
- **Spacer** - Vertical/horizontal spacing utility

### Typography Components (`Typography.jsx`)

- **Heading** - Semantic headings (h1-h6) with consistent styling
- **Text** - Flexible text with size, weight, and color options
- **Lead** - Large introductory text
- **Label** - Form label component

### UI Components

- **Button** (`Button.jsx`) - Multi-variant button (primary, secondary, outline, ghost, danger)
- **Card** (`Card.jsx`) - Card container with Header, Body, Footer, Image sections
- **Navigation** (`Navigation.jsx`) - Responsive navbar with mobile menu
- **Hero** (`Hero.jsx`) - Large hero sections for landing pages

## Quick Import

```jsx
// Import all components
import {
  Container,
  Section,
  Grid,
  Flex,
  Heading,
  Text,
  Lead,
  Button,
  Card,
  Navigation,
  Hero,
} from "./components";
```

## Usage Example

```jsx
import { Hero, Container, Grid, Card, Button } from "./components";

function MyPage() {
  return (
    <>
      <Hero title="Welcome" subtitle="Your subtitle">
        <Button>Get Started</Button>
      </Hero>

      <Container>
        <Grid cols={3} gap="lg">
          <Card variant="elevated" hoverable>
            <Card.Body>Content</Card.Body>
          </Card>
        </Grid>
      </Container>
    </>
  );
}
```

## Documentation

See `/COMPONENT_LIBRARY.md` in the root directory for complete documentation.

## Design System

All components use CSS variables from `/src/styles/design-system.css` for:

- Colors
- Typography
- Spacing
- Borders & Shadows
- Transitions

Customize the design system by editing the CSS variables.
