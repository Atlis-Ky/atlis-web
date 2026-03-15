import React from "react";
import "./Typography.css";

/**
 * Heading Component
 *
 * Semantic heading component with consistent styling
 *
 * @param {string} level - '1', '2', '3', '4', '5', '6'
 * @param {React.ReactNode} children - Heading content
 * @param {string} className - Additional CSS classes
 * @param {string} align - 'left', 'center', 'right'
 * @param {string} weight - 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'
 */

const Heading = ({
  level = "2",
  children,
  className = "",
  align = "left",
  weight,
  ...props
}) => {
  const Tag = `h${level}`;
  const headingClasses = [
    "heading",
    `heading-${level}`,
    align && `text-${align}`,
    weight && `font-${weight}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={headingClasses} {...props}>
      {children}
    </Tag>
  );
};

/**
 * Text Component
 *
 * Flexible text component with various styling options
 *
 * @param {string} size - 'xs', 'sm', 'base', 'lg', 'xl', '2xl'
 * @param {string} weight - 'light', 'normal', 'medium', 'semibold', 'bold'
 * @param {string} color - 'primary', 'secondary', 'tertiary', 'inverse', 'success', 'warning', 'error'
 * @param {string} align - 'left', 'center', 'right'
 * @param {React.ReactNode} children - Text content
 * @param {string} className - Additional CSS classes
 */

const Text = ({
  size = "base",
  weight,
  color = "primary",
  align = "left",
  children,
  className = "",
  as = "p",
  ...props
}) => {
  const Tag = as;
  const textClasses = [
    "text",
    `text-size-${size}`,
    weight && `font-${weight}`,
    `text-color-${color}`,
    `text-${align}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={textClasses} {...props}>
      {children}
    </Tag>
  );
};

/**
 * Lead Text Component
 *
 * Larger introductory text, typically used below headings
 */

const Lead = ({ children, className = "", ...props }) => {
  return (
    <p className={`text-lead ${className}`} {...props}>
      {children}
    </p>
  );
};

/**
 * Label Component
 *
 * Small label text for forms and UI elements
 */

const Label = ({
  children,
  htmlFor,
  className = "",
  required = false,
  ...props
}) => {
  return (
    <label htmlFor={htmlFor} className={`label ${className}`} {...props}>
      {children}
      {required && <span className="label-required">*</span>}
    </label>
  );
};

export { Heading, Text, Lead, Label };
export default Heading;
