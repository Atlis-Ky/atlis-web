import React from "react";
import "./Hero.css";
import Button from "./Button";
import { Heading, Lead } from "./Typography";

/**
 * Hero Component
 *
 * Large hero section for landing pages
 *
 * @param {string} title - Main heading
 * @param {string} subtitle - Subtitle or description
 * @param {React.ReactNode} children - Custom content (buttons, etc.)
 * @param {string} variant - 'default', 'gradient', 'dark', 'minimal'
 * @param {string} size - 'sm', 'md', 'lg', 'xl'
 * @param {string} align - 'left', 'center', 'right'
 * @param {string} backgroundImage - URL for background image
 * @param {string} className - Additional CSS classes
 */

const Hero = ({
  title,
  subtitle,
  children,
  variant = "gradient",
  size = "lg",
  align = "center",
  backgroundImage,
  className = "",
  ...props
}) => {
  const heroClasses = [
    "hero",
    `hero-${variant}`,
    `hero-${size}`,
    `hero-align-${align}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <div className={heroClasses} style={style} {...props}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        {title && (
          <Heading level="1" className="hero-title">
            {title}
          </Heading>
        )}
        {subtitle && <Lead className="hero-subtitle">{subtitle}</Lead>}
        {children && <div className="hero-actions">{children}</div>}
      </div>
    </div>
  );
};

export default Hero;
