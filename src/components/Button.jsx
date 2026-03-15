import React from "react";
import "./Button.css";

/**
 * Button Component
 *
 * A flexible, reusable button component with multiple variants and sizes
 *
 * @param {string} variant - 'primary', 'secondary', 'outline', 'ghost', 'danger'
 * @param {string} size - 'sm', 'md', 'lg', 'xl'
 * @param {boolean} fullWidth - Make button full width
 * @param {function} onClick - Click handler
 * @param {boolean} disabled - Disable button
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 */

const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  onClick,
  disabled = false,
  children,
  className = "",
  type = "button",
  ...props
}) => {
  const buttonClasses = [
    "btn",
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth && "btn-full",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
