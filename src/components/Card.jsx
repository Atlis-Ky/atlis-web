import React from "react";
import "./Card.css";

/**
 * Card Component
 *
 * A flexible container component with optional header, body, and footer sections
 *
 * @param {React.ReactNode} children - Card content
 * @param {string} variant - 'default', 'elevated', 'outlined', 'minimal'
 * @param {boolean} hoverable - Add hover effect
 * @param {function} onClick - Click handler (makes card clickable)
 * @param {string} className - Additional CSS classes
 */

const Card = ({
  children,
  variant = "default",
  hoverable = false,
  onClick,
  className = "",
  ...props
}) => {
  const cardClasses = [
    "card",
    `card-${variant}`,
    hoverable && "card-hoverable",
    onClick && "card-clickable",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

/**
 * CardHeader - Optional card header section
 */
const CardHeader = ({ children, className = "", ...props }) => {
  return (
    <div className={`card-header ${className}`} {...props}>
      {children}
    </div>
  );
};

/**
 * CardBody - Main card content section
 */
const CardBody = ({ children, className = "", ...props }) => {
  return (
    <div className={`card-body ${className}`} {...props}>
      {children}
    </div>
  );
};

/**
 * CardFooter - Optional card footer section
 */
const CardFooter = ({ children, className = "", ...props }) => {
  return (
    <div className={`card-footer ${className}`} {...props}>
      {children}
    </div>
  );
};

/**
 * CardImage - Image component for cards
 */
const CardImage = ({ src, alt, className = "", ...props }) => {
  return (
    <div className={`card-image ${className}`} {...props}>
      <img src={src} alt={alt} />
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
