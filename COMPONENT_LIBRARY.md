# Component Library Documentation

A comprehensive, reusable component library for your music project website, inspired by modern web design principles.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Design System](#design-system)
3. [Components](#components)
   - [Layout](#layout-components)
   - [Typography](#typography-components)
   - [UI Components](#ui-components)
4. [Usage Examples](#usage-examples)

---

## Getting Started

### Import Components

```jsx
// Import individual components
import { Button, Card, Navigation } from "./components";

// Or import specific components
import Button from "./components/Button";
import { Heading, Text } from "./components/Typography";
import { Container, Section } from "./components/Layout";
```

### Design System CSS

The design system CSS is automatically imported in `main.jsx`. It provides CSS variables for:

- Colors (primary, accent, grays, semantic colors)
- Typography (font sizes, weights, line heights)
- Spacing (consistent spacing scale)
- Borders & Shadows
- Transitions

---

## Design System

### Color Variables

```css
--color-primary:
  #2563eb --color-accent: #8b5cf6 --color-gray-900 through --color-gray-100
    --color-success,
  --color-warning, --color-error;
```

### Spacing Scale

```css
--space-1: 4px --space-2: 8px --space-4: 16px --space-6: 24px --space-8: 32px
  --space-12: 48px --space-16: 64px;
```

### Typography Scale

```css
--text-xs: 12px --text-sm: 14px --text-base: 16px --text-lg: 18px
  --text-xl: 20px --text-2xl: 24px --text-4xl: 36px;
```

---

## Components

### Layout Components

#### Container

Responsive container with max-width constraints.

```jsx
import { Container } from "./components";

<Container size="xl">Your content here</Container>;
```

**Props:**

- `size`: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' (default: 'xl')

#### Section

Full-width section with vertical padding and background options.

```jsx
import { Section } from "./components";

<Section padding="lg" background="gradient">
  Your content here
</Section>;
```

**Props:**

- `padding`: 'none' | 'sm' | 'md' | 'lg' | 'xl' (default: 'lg')
- `background`: 'default' | 'secondary' | 'dark' | 'gradient' (default: 'default')

#### Grid

Responsive grid layout system.

```jsx
import { Grid } from "./components";

<Grid cols={3} gap="lg" responsive={true}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>;
```

**Props:**

- `cols`: 1-12 (default: 3)
- `gap`: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `responsive`: boolean (default: true)

#### Flex

Flexible flexbox layout.

```jsx
import { Flex } from "./components";

<Flex direction="row" justify="between" align="center" gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>;
```

**Props:**

- `direction`: 'row' | 'col' (default: 'row')
- `justify`: 'start' | 'end' | 'center' | 'between' | 'around' (default: 'start')
- `align`: 'start' | 'end' | 'center' | 'stretch' (default: 'start')
- `gap`: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `wrap`: boolean (default: false)

---

### Typography Components

#### Heading

Semantic heading component (h1-h6).

```jsx
import { Heading } from "./components";

<Heading level="1" align="center" weight="bold">
  Your Title
</Heading>;
```

**Props:**

- `level`: '1' | '2' | '3' | '4' | '5' | '6' (default: '2')
- `align`: 'left' | 'center' | 'right' (default: 'left')
- `weight`: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'

#### Text

Flexible text component with styling options.

```jsx
import { Text } from "./components";

<Text size="lg" weight="medium" color="secondary">
  Your text content
</Text>;
```

**Props:**

- `size`: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' (default: 'base')
- `weight`: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
- `color`: 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'success' | 'warning' | 'error' (default: 'primary')
- `align`: 'left' | 'center' | 'right' (default: 'left')
- `as`: HTML tag (default: 'p')

#### Lead

Large introductory text.

```jsx
import { Lead } from "./components";

<Lead>This is an introductory paragraph with larger text.</Lead>;
```

---

### UI Components

#### Button

Flexible button component with multiple variants and sizes.

```jsx
import { Button } from "./components";

<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>;
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `fullWidth`: boolean (default: false)
- `disabled`: boolean (default: false)
- `onClick`: function
- `type`: 'button' | 'submit' | 'reset' (default: 'button')

#### Card

Flexible card container with optional sections.

```jsx
import { Card } from "./components";

<Card variant="elevated" hoverable>
  <Card.Header>
    <Heading level="4">Card Title</Heading>
  </Card.Header>
  <Card.Body>
    <Text>Card content goes here</Text>
  </Card.Body>
  <Card.Footer>
    <Button size="sm">Action</Button>
  </Card.Footer>
</Card>;
```

**Props:**

- `variant`: 'default' | 'elevated' | 'outlined' | 'minimal' (default: 'default')
- `hoverable`: boolean (default: false)
- `onClick`: function (makes card clickable)

**Subcomponents:**

- `Card.Header`
- `Card.Body`
- `Card.Footer`
- `Card.Image`

#### Navigation

Modern, responsive navigation bar.

```jsx
import Navigation from "./components/Navigation";

<Navigation logo="Brand Name" sticky={true}>
  <Navigation.Item to="/">Home</Navigation.Item>
  <Navigation.Item to="/about">About</Navigation.Item>
  <Navigation.Button variant="primary">Sign Up</Navigation.Button>
</Navigation>;
```

**Props:**

- `logo`: string (default: 'Brand')
- `transparent`: boolean (default: false)
- `sticky`: boolean (default: true)

**Subcomponents:**

- `Navigation.Item`: Navigation link
- `Navigation.Button`: CTA button

#### Hero

Large hero section for landing pages.

```jsx
import { Hero } from "./components";

<Hero
  title="Welcome to My Site"
  subtitle="Build amazing experiences"
  variant="gradient"
  size="lg"
>
  <Button size="lg">Get Started</Button>
</Hero>;
```

**Props:**

- `title`: string
- `subtitle`: string
- `variant`: 'default' | 'gradient' | 'dark' | 'minimal' (default: 'gradient')
- `size`: 'sm' | 'md' | 'lg' | 'xl' (default: 'lg')
- `align`: 'left' | 'center' | 'right' (default: 'center')
- `backgroundImage`: string (URL)

---

## Usage Examples

### Landing Page Example

```jsx
import {
  Hero,
  Section,
  Container,
  Grid,
  Card,
  Button,
  Heading,
  Text,
} from "./components";

function LandingPage() {
  return (
    <>
      <Hero
        title="Welcome to Atlis"
        subtitle="Experience the sound"
        variant="gradient"
        size="xl"
      >
        <Button size="lg">Listen Now</Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </Hero>

      <Section padding="xl" background="default">
        <Container>
          <Heading level="2" align="center">
            Featured Albums
          </Heading>
          <Grid cols={3} gap="lg" responsive>
            <Card variant="elevated" hoverable>
              <Card.Image src="/album1.jpg" alt="Album" />
              <Card.Body>
                <Heading level="4">Album Title</Heading>
                <Text color="secondary">2026</Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" size="sm">
                  Listen
                </Button>
              </Card.Footer>
            </Card>
            {/* More cards... */}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
```

### Form Example

```jsx
import { Container, Card, Heading, Label, Button } from "./components";

function ContactForm() {
  return (
    <Container size="md">
      <Card variant="elevated">
        <Card.Header>
          <Heading level="3">Get in Touch</Heading>
        </Card.Header>
        <Card.Body>
          <form>
            <div>
              <Label htmlFor="name" required>
                Name
              </Label>
              <input type="text" id="name" />
            </div>
            <div>
              <Label htmlFor="email" required>
                Email
              </Label>
              <input type="email" id="email" />
            </div>
            <Button type="submit" fullWidth>
              Submit
            </Button>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
}
```

---

## Best Practices

1. **Consistent Spacing**: Use the spacing scale from the design system
2. **Color Usage**: Stick to the defined color palette
3. **Typography Hierarchy**: Use heading levels semantically
4. **Responsive Design**: All components are mobile-first
5. **Composition**: Combine components to create complex layouts

---

## Component Showcase

Visit `/showcase` route to see all components in action with live examples.

---

## Customization

To customize the design system, edit `/src/styles/design-system.css` and modify the CSS variables.

Example:

```css
:root {
  --color-primary: #your-color;
  --text-base: 18px;
}
```

All components will automatically use the updated values.
