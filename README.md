# Ignite Website - Hero Section

A stunning Next.js hero section with animations and hover effects matching the Ignite brand design.

## Features

- Full-screen hero section with background image
- Animated "IGNITE" title with glow effect
- Smooth hover effects on navigation links
- Animated buttons with gradient overlays
- Social media icons with rotation and scale effects
- Bouncing scroll-down arrow
- Responsive design with Tailwind CSS

## Color Scheme

- Gold: `#D4A574`
- Orange: `#F5A623`
- Dark Background: `#0A0A0A`

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Add your images to the `public/images/` folder:
   - `hero-bg.jpg` - Background image
   - `logo.png` - Ignite logo

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Animations & Effects

- **Title**: Float animation with gradient glow
- **Navigation**: Underline slide effect on hover
- **Buttons**: Scale, shadow, and gradient transitions
- **Social Icons**: Rotate and scale on hover with color change
- **Scroll Arrow**: Smooth bounce animation

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── HeroSection.tsx
├── public/
│   └── images/
│       ├── hero-bg.jpg
│       └── logo.png
└── tailwind.config.js
```

## Customization

Edit `tailwind.config.js` to adjust colors and animations.
Modify `components/HeroSection.tsx` for content and layout changes.
