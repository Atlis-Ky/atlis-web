import React from "react";
import "./Layout.css";

/**
 * Container Component
 *
 * Responsive container with max-width constraints
 *
 * @param {string} size - 'sm', 'md', 'lg', 'xl', '2xl', 'full'
 * @param {React.ReactNode} children - Container content
 * @param {string} className - Additional CSS classes
 */

const Container = ({ size = "xl", children, className = "", ...props }) => {
  const containerClasses = ["container", `container-${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
};

/**
 * Section Component
 *
 * Full-width section with vertical padding
 *
 * @param {string} padding - 'none', 'sm', 'md', 'lg', 'xl'
 * @param {string} background - 'default', 'secondary', 'dark', 'gradient'
 * @param {React.ReactNode} children - Section content
 * @param {string} className - Additional CSS classes
 */

const Section = ({
  padding = "lg",
  background = "default",
  children,
  className = "",
  ...props
}) => {
  const sectionClasses = [
    "section",
    `section-padding-${padding}`,
    `section-bg-${background}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClasses} {...props}>
      {children}
    </section>
  );
};

/**
 * Grid Component
 *
 * Flexible grid layout system
 *
 * @param {number} cols - Number of columns (1-12)
 * @param {string} gap - 'sm', 'md', 'lg', 'xl'
 * @param {React.ReactNode} children - Grid items
 * @param {string} className - Additional CSS classes
 */

const Grid = ({
  cols = 3,
  gap = "md",
  children,
  className = "",
  responsive = true,
  ...props
}) => {
  const gridClasses = [
    "grid-layout",
    `grid-cols-${cols}`,
    `grid-gap-${gap}`,
    responsive && "grid-responsive",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={gridClasses} {...props}>
      {children}
    </div>
  );
};

/**
 * Flex Component
 *
 * Flexible flexbox layout
 *
 * @param {string} direction - 'row', 'col'
 * @param {string} justify - 'start', 'end', 'center', 'between', 'around'
 * @param {string} align - 'start', 'end', 'center', 'stretch'
 * @param {string} gap - 'sm', 'md', 'lg', 'xl'
 * @param {boolean} wrap - Enable flex wrap
 * @param {React.ReactNode} children - Flex items
 * @param {string} className - Additional CSS classes
 */

const Flex = ({
  direction = "row",
  justify = "start",
  align = "start",
  gap = "md",
  wrap = false,
  children,
  className = "",
  ...props
}) => {
  const flexClasses = [
    "flex-layout",
    `flex-${direction}`,
    `justify-${justify}`,
    `items-${align}`,
    `flex-gap-${gap}`,
    wrap && "flex-wrap",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={flexClasses} {...props}>
      {children}
    </div>
  );
};

/**
 * Spacer Component
 *
 * Add vertical or horizontal spacing
 *
 * @param {string} size - 'sm', 'md', 'lg', 'xl', '2xl'
 * @param {string} axis - 'vertical', 'horizontal'
 */

const Spacer = ({ size = "md", axis = "vertical" }) => {
  const spacerClass =
    axis === "vertical" ? `spacer-y-${size}` : `spacer-x-${size}`;

  return <div className={spacerClass} />;
};

export { Container, Section, Grid, Flex, Spacer };
export default Container;
