# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **SkyVision Drone Services Website** - a modern React-based business website showcasing professional drone services for weddings and real estate. The site features aerial cinematography packages, real estate photography services, and contact forms for potential clients.

**Business Focus**: Drone photography/videography services with two main verticals:
- Wedding cinematography with packages from $899-$1,499
- Real estate photography with packages from $299-$999

## Development Commands

### Core Development
- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Lint code**: `npm run lint`

### Package Management
- **Install dependencies**: `npm install`
- **Add new dependency**: `npm install <package-name>`
- **Add dev dependency**: `npm install -D <package-name>`

### Vite-specific Commands
- **Clean build cache**: Delete `dist/` and `node_modules/.vite/` folders
- **Force dependency re-optimization**: `npm run dev -- --force`

## Tech Stack Architecture

### Frontend Framework
- **React 19.1.1** with modern hooks and concurrent features
- **Vite 7.1.2** as build tool for fast development and optimized production builds
- **React Router DOM 7.9.1** for client-side routing with BrowserRouter

### Styling System
- **Tailwind CSS 4.1.13** with custom color palette and animations
- **PostCSS + Autoprefixer** for CSS processing
- **Custom design system** with primary (blue) and secondary (teal) color schemes
- **Responsive design** with mobile-first approach

### UI Components
- **Lucide React 0.544.0** for consistent iconography
- **Custom animations**: fadeIn, slideUp, bounce-slow keyframes
- **Custom color palette**: Extended blue and teal variations (50-900 shades)

## Project Structure & Architecture

### Component Organization
```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation with mobile menu
│   └── Footer.jsx      # Site footer with contact info
├── pages/              # Route-based page components
│   ├── Home.jsx        # Landing page with hero and services overview
│   ├── Services.jsx    # Detailed service packages and pricing
│   └── Contact.jsx     # Contact form and business information
├── assets/             # Static assets
├── styles/             # Global styles (if any)
└── App.jsx            # Main app component with routing
```

### Routing Structure
- `/` - Home page with hero section and services overview
- `/services` - Detailed service pages with pricing packages
- `/portfolio` - Coming soon placeholder
- `/about` - Coming soon placeholder  
- `/contact` - Contact form and business info

### Component Patterns

**Layout Pattern**: All pages use consistent layout with fixed header, flex-grow main content, and footer.

**Mobile-First Responsive**: Uses Tailwind's responsive prefixes (sm:, md:, lg:) throughout.

**Icon Integration**: Consistent use of Lucide React icons (Camera, Heart, HomeIcon, etc.) with color-coded themes.

**Form State Management**: Contact form uses useState for controlled components with form validation.

**Navigation State**: Header component manages mobile menu toggle state.

## Key Business Logic

### Service Categories
1. **Wedding Services** (Pink theme - Heart icon)
   - Essential Package: $899 (2-hour ceremony)
   - Premium Package: $1,499 (full day, 8 hours)

2. **Real Estate Services** (Blue theme - Home icon)
   - Standard Package: $299 (15-20 photos)
   - Premium Package: $599 (photos + video)
   - Luxury Package: $999 (50+ photos, 4K video)

3. **Additional Services**
   - Event Coverage: Starting at $499
   - Construction Progress: Starting at $399
   - Commercial Photography: Starting at $699

### Contact Information
- Phone: (555) 123-4567
- Email: info@skyvision.com
- Address: 123 Sky Lane, Aerial City, AC 12345
- Emergency: (555) 123-URGENT

## Development Guidelines

### Component Development
- Use functional components with hooks
- Implement responsive design using Tailwind classes
- Follow the established color scheme (primary blue, secondary teal, accent pink for weddings)
- Use Lucide React icons consistently
- Maintain mobile-first responsive patterns

### Styling Conventions
- Use custom Tailwind theme colors (primary.*, secondary.*)
- Apply consistent spacing using Tailwind scale
- Use animation classes (fade-in, slide-up, bounce-slow) for micro-interactions
- Follow the established shadow and border radius patterns

### State Management
- Use useState for local component state
- Handle form submissions with controlled components
- Manage navigation state in Header component

### Asset Management
- Place images in `src/assets/`
- Use Vite's asset handling for optimal loading
- Ensure responsive image loading for different screen sizes

## Build & Deployment Notes

### Production Build
- Vite optimizes bundle with tree-shaking and code splitting
- Static assets are hashed for cache busting
- CSS is extracted and minimized
- Build output goes to `dist/` directory

### Environment Considerations
- No environment variables currently configured
- Contact form currently logs to console (needs backend integration)
- Uses standard Vite dev server configuration

### Performance Optimizations
- React.StrictMode enabled in development
- Vite's fast refresh for development
- Optimized Tailwind CSS purging in production builds
- Modern ES modules for faster loading

## Content & SEO Notes

### Page Titles & Meta
- Current title: "Vite + React" (needs updating to business name)
- Missing meta descriptions and SEO optimization
- No structured data markup currently implemented

### Content Strategy
- Hero messaging focuses on "Capture Life from Above"
- Professional positioning with emphasis on quality equipment and licensed pilots
- Clear service differentiation between wedding and real estate verticals
- Pricing transparency with detailed package breakdowns

This website serves as a professional showcase for drone services with clear calls-to-action and detailed service information designed to convert visitors into clients.