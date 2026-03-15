# Color Scheme Update Summary

## New Minimal Color Palette

The component library has been updated to use a sleek, minimal black and white color scheme with teal accents, inspired by modern design aesthetics.

### Color Palette

#### Primary Colors

- **Black**: `#000000` - Primary buttons, text, borders
- **White**: `#ffffff` - Backgrounds, secondary buttons

#### Accent Color

- **Teal**: `#14b8a6` - Highlight color used sparingly
  - Dark: `#0d9488`
  - Light: `#2dd4bf`
  - Subtle: `#ccfbf1`

#### Grey Scale (for muted text and subtle backgrounds)

- **Muted Grey**: `#737373` (gray-500) - Secondary text
- **Light Grey**: `#f5f5f5` (gray-100) - Subtle backgrounds
- **Border Grey**: `#e5e5e5` (gray-200) - Borders

### Button Variants

All button styles have been updated to the new color scheme:

1. **Primary (Black)**
   - Background: Black
   - Text: White
   - Hover: Dark grey

2. **Secondary (White)**
   - Background: White
   - Text: Black
   - Border: Black
   - Hover: Inverts to black background with white text

3. **Outline**
   - Background: Transparent
   - Text: Black
   - Border: Black
   - Hover: Fills with black

4. **Accent (Teal)** - NEW!
   - Background: Teal
   - Text: White
   - Hover: Darker teal
   - Use sparingly for call-to-action elements

5. **Ghost**
   - Background: Transparent
   - Text: Black
   - Hover: Light grey fill

### Navigation Updates

- Logo hover color changed from blue to teal
- Active link underline changed to teal
- Navigation buttons updated to black/white scheme
- New accent variant available for nav buttons

### Design System Variables Updated

```css
--color-primary: #000000 (Black) --color-accent: #14b8a6 (Teal)
  --text-primary: #000000 (Black) --text-secondary: #737373 (Muted grey)
  --bg-primary: #ffffff (White) --bg-secondary: #fafafa (Light grey)
  --bg-dark: #000000 (Black);
```

### Hero Component

- Default gradient background updated to black gradient
- Better contrast with new color scheme

### Usage Guidelines

1. **Primary actions**: Use black buttons
2. **Secondary actions**: Use white buttons with black border
3. **Call-to-action highlights**: Use teal accent buttons sparingly
4. **Body text**: Black (#000000)
5. **Secondary/caption text**: Muted grey (#737373)
6. **Backgrounds**: White or very light grey (#fafafa)

### Migration Notes

- All components automatically use the new color scheme via CSS variables
- No component API changes required
- The `accent` variant is now available for Button and Navigation.Button components
- Existing code will continue to work with updated colors

### See It In Action

Visit `/showcase` to see all components with the new color scheme.
