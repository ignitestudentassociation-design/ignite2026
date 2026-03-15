# IGNITE Frontend

A TypeScript React application matching the IGNITE organization design.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Add your images to the `public/images/` folder:
   - `public/images/logo.png` - Your IGNITE logo
   - `public/images/team-photo.jpg` - Your team/family photo

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
├── public/
│   └── images/          # Add logo.png and team-photo.jpg here
├── src/
│   ├── components/
│   │   ├── Header.tsx   # Navigation header
│   │   └── Header.css
│   ├── pages/
│   │   ├── About.tsx    # Main about page
│   │   └── About.css
│   ├── App.tsx          # Main app with routing
│   ├── App.css
│   ├── main.tsx
│   └── index.css
└── package.json
```

## Features

- Dark theme with gold (#d4a574) accents matching IGNITE branding
- Sticky navigation header with hover effects
- Hero section with organization description
- Family/team photo section with overlay text
- "What is Ignite" informational section
- Three vision cards with hover animations
- Fully responsive design
- TypeScript for type safety
- React Router for navigation

## Design Details

- Background: #1a1f26 (dark blue-gray)
- Accent color: #d4a574 (gold)
- Text colors: #fff (white), #b0b0b0 (light gray)
- Card backgrounds: #0f1419 (darker shade)
- Border colors: #3a3a3a, #8b7355 (brown-gold for image frame)

## Development

The app runs on http://localhost:5173/ by default.
