# Servicecart Website

A modern, responsive React website for Servicecart - a platform connecting customers with professional service providers.

## Features

- 🎨 Modern, clean design with purple theme
- 📱 Fully responsive mobile-first layout
- ⚡ Built with React 18 and TypeScript
- 🎯 Tailwind CSS for styling
- 🚀 Vite for fast development and building
- 🖼️ Placeholder images for all visuals

## Sections

- **Header** - Fixed navigation with mobile menu
- **Hero** - Eye-catching introduction with app download buttons
- **Services** - Grid of available services
- **How It Works** - Step-by-step process explanation
- **Features** - App feature highlights
- **Why Choose Us** - Benefits showcase
- **Download App** - App download CTA with QR code
- **Team** - Team member profiles
- **Join Provider** - Service provider onboarding
- **Testimonials** - Customer reviews carousel
- **FAQ** - Accordion-style frequently asked questions
- **Footer** - Contact info and links

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Project Structure

```
servicecart-website/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Team.tsx
│   │   ├── DownloadApp.tsx
│   │   ├── JoinProvider.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Customization

### Colors

The primary purple color scheme can be customized in `tailwind.config.js`:

```js
colors: {
  primary: {
    // Customize your purple shades here
  }
}
```

### Images

Replace placeholder images by updating the `src` attributes in component files. All images currently use placeholder.co service.

## License

This project is private and proprietary.


