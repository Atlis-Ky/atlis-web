import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

/**
 * Navigation Component
 *
 * A modern, responsive navigation bar with mobile menu support
 *
 * @param {string} logo - Logo text or brand name
 * @param {React.ReactNode} children - Navigation items
 * @param {boolean} transparent - Transparent background
 * @param {boolean} sticky - Sticky positioning
 * @param {string} className - Additional CSS classes
 */

const Navigation = ({
  logo = "Brand",
  children,
  transparent = false,
  sticky = true,
  className = "",
  ...props
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navClasses = [
    "nav",
    transparent && "nav-transparent",
    sticky && "nav-sticky",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={navClasses} {...props}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          {logo}
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu">{children}</div>

        {/* Mobile Menu Toggle */}
        <button
          className="nav-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-mobile ${mobileMenuOpen ? "active" : ""}`}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            onClick: () => setMobileMenuOpen(false),
          }),
        )}
      </div>
    </nav>
  );
};

/**
 * NavItem - Individual navigation link
 */
const NavItem = ({ to, children, onClick, className = "", ...props }) => {
  return (
    <Link
      to={to}
      className={`nav-item ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
};

/**
 * NavButton - Call-to-action button in navigation
 */
const NavButton = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`nav-button nav-button-${variant} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Navigation.Item = NavItem;
Navigation.Button = NavButton;

export default Navigation;
