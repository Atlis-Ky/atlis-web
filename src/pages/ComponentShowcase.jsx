import React from "react";
import {
  Container,
  Section,
  Grid,
  Flex,
  Spacer,
  Heading,
  Text,
  Lead,
  Button,
  Card,
  Hero,
} from "../components";

function ComponentShowcase() {
  return (
    <div className="showcase">
      {/* Hero Section */}
      <Hero
        title="Component Library Showcase"
        subtitle="Explore all the reusable components built for your music project"
        variant="gradient"
        size="lg"
      >
        <Button size="lg">Get Started</Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </Hero>

      {/* Typography Section */}
      <Section padding="xl" background="default">
        <Container>
          <Heading level="2" align="center">
            Typography Components
          </Heading>
          <Spacer size="lg" />

          <Heading level="1">Heading Level 1</Heading>
          <Heading level="2">Heading Level 2</Heading>
          <Heading level="3">Heading Level 3</Heading>
          <Heading level="4">Heading Level 4</Heading>

          <Spacer size="md" />

          <Lead>
            This is a lead paragraph. Perfect for introductory text that needs
            to stand out.
          </Lead>

          <Text size="base">
            This is regular body text. It's the standard size for most content
            and ensures excellent readability across all devices.
          </Text>

          <Text size="sm" color="secondary">
            This is small secondary text, great for captions or metadata.
          </Text>
        </Container>
      </Section>

      {/* Button Section */}
      <Section padding="xl" background="secondary">
        <Container>
          <Heading level="2" align="center">
            Button Variants
          </Heading>
          <Spacer size="lg" />

          <Flex justify="center" gap="lg" wrap={true}>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="danger">Danger Button</Button>
          </Flex>

          <Spacer size="lg" />

          <Heading level="3" align="center">
            Button Sizes
          </Heading>
          <Spacer size="md" />

          <Flex justify="center" gap="lg" wrap={true} align="center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </Flex>
        </Container>
      </Section>

      {/* Card Section */}
      <Section padding="xl" background="default">
        <Container>
          <Heading level="2" align="center">
            Card Components
          </Heading>
          <Spacer size="lg" />

          <Grid cols={3} gap="lg" responsive={true}>
            <Card variant="elevated" hoverable>
              <Card.Header>
                <Heading level="4">Elevated Card</Heading>
              </Card.Header>
              <Card.Body>
                <Text>
                  This card has an elevated shadow effect and hover animation.
                </Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" size="sm">
                  Learn More
                </Button>
              </Card.Footer>
            </Card>

            <Card variant="outlined" hoverable>
              <Card.Header>
                <Heading level="4">Outlined Card</Heading>
              </Card.Header>
              <Card.Body>
                <Text>This card uses a border outline for a cleaner look.</Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline" size="sm">
                  Discover
                </Button>
              </Card.Footer>
            </Card>

            <Card variant="minimal" hoverable>
              <Card.Header>
                <Heading level="4">Minimal Card</Heading>
              </Card.Header>
              <Card.Body>
                <Text>A minimal design with a subtle background color.</Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="ghost" size="sm">
                  Explore
                </Button>
              </Card.Footer>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Layout Section */}
      <Section padding="xl" background="dark">
        <Container>
          <Heading level="2" align="center" style={{ color: "white" }}>
            Layout Components
          </Heading>
          <Lead style={{ color: "white", textAlign: "center" }}>
            Flexible containers, grids, and flex layouts for any design
          </Lead>
          <Spacer size="lg" />

          <Grid cols={2} gap="lg" responsive={true}>
            <Card variant="elevated">
              <Card.Body>
                <Heading level="5">Grid Layout</Heading>
                <Text>Responsive grid system with 1-12 columns</Text>
              </Card.Body>
            </Card>

            <Card variant="elevated">
              <Card.Body>
                <Heading level="5">Flex Layout</Heading>
                <Text>Flexible flexbox containers with alignment controls</Text>
              </Card.Body>
            </Card>

            <Card variant="elevated">
              <Card.Body>
                <Heading level="5">Container</Heading>
                <Text>Responsive containers with max-width constraints</Text>
              </Card.Body>
            </Card>

            <Card variant="elevated">
              <Card.Body>
                <Heading level="5">Section</Heading>
                <Text>Full-width sections with padding and backgrounds</Text>
              </Card.Body>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Color System */}
      <Section padding="xl" background="default">
        <Container>
          <Heading level="2" align="center">
            Design System Colors
          </Heading>
          <Spacer size="lg" />

          <Grid cols={4} gap="md" responsive={true}>
            <div
              style={{
                backgroundColor: "var(--color-primary)",
                padding: "var(--space-6)",
                borderRadius: "var(--border-radius)",
                color: "white",
                textAlign: "center",
              }}
            >
              <Text color="inverse" weight="semibold">
                Primary
              </Text>
            </div>
            <div
              style={{
                backgroundColor: "var(--color-accent)",
                padding: "var(--space-6)",
                borderRadius: "var(--border-radius)",
                color: "white",
                textAlign: "center",
              }}
            >
              <Text color="inverse" weight="semibold">
                Accent
              </Text>
            </div>
            <div
              style={{
                backgroundColor: "var(--color-gray-800)",
                padding: "var(--space-6)",
                borderRadius: "var(--border-radius)",
                color: "white",
                textAlign: "center",
              }}
            >
              <Text color="inverse" weight="semibold">
                Dark
              </Text>
            </div>
            <div
              style={{
                backgroundColor: "var(--color-gray-200)",
                padding: "var(--space-6)",
                borderRadius: "var(--border-radius)",
                textAlign: "center",
              }}
            >
              <Text weight="semibold">Light</Text>
            </div>
          </Grid>
        </Container>
      </Section>
    </div>
  );
}

export default ComponentShowcase;
