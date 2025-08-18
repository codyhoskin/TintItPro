# TintItPro - Window Tinting & Protection Services

Professional window tinting and countertop protection services in Calgary, Alberta.

## SEO & Performance Optimizations

### Services Section Optimizations

The Services Section has been optimized for both SEO and performance:

#### SEO Optimizations:
- **Semantic HTML**: Uses proper `<section>`, `<article>`, `<header>`, `<ul>`, `<li>` tags
- **Structured Data**: JSON-LD schema markup for services with LocalBusiness and Service types
- **Accessibility**: ARIA labels, roles, and proper heading hierarchy
- **Meta Descriptions**: Rich descriptions for each service with targeted keywords
- **Alt Text**: Descriptive alt text for images with service context
- **Internal Linking**: Proper link structure with descriptive anchor text

#### Performance Optimizations:
- **React.memo**: Components memoized to prevent unnecessary re-renders
- **useMemo**: Expensive calculations and objects memoized
- **Image Optimization**: 
  - Next.js Image component with proper sizing
  - Priority loading for above-the-fold images
  - Lazy loading for off-screen images
  - Responsive image sizes
- **CSS Containment**: Added `contain: layout style paint` for better rendering performance
- **Transition Optimization**: Specific transition properties instead of `all`
- **Bundle Splitting**: Icons imported individually to reduce bundle size

#### Key Performance Features:
- **Lazy Loading**: Images and animations load only when needed
- **Viewport Detection**: Animations trigger based on scroll position
- **Memory Management**: Proper cleanup and memoization
- **Rendering Optimization**: CSS containment and will-change properties

### Technical Implementation:

```typescript
// Memoized component for performance
const ServiceCard = memo(({ card, index }) => {
  // Memoized styles and variants
  const cardVariants = useMemo(() => ({...}), []);
  const benefitsSectionStyle = useMemo(() => ({...}), [card.category]);
  
  return (
    <m.article variants={cardVariants}>
      <Image
        src={card.img}
        alt={`${card.title} - ${card.description}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={index < 2}
        loading={index < 2 ? "eager" : "lazy"}
      />
    </m.article>
  );
});
```

### SEO Schema Structure:
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Window Tinting and Protection Services",
  "itemListElement": [
    {
      "@type": "Service",
      "name": "Commercial Window Tinting",
      "description": "Professional commercial window tinting services in Calgary...",
      "provider": {
        "@type": "LocalBusiness",
        "name": "TintItPro",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Calgary"
        }
      }
    }
  ]
}
```

### Performance Metrics:
- **First Contentful Paint (FCP)**: Optimized with priority image loading
- **Largest Contentful Paint (LCP)**: Reduced with proper image sizing and loading
- **Cumulative Layout Shift (CLS)**: Minimized with proper image dimensions
- **Time to Interactive (TTI)**: Improved with component memoization

### Accessibility Features:
- Screen reader friendly with proper ARIA labels
- Keyboard navigation support
- High contrast ratios
- Semantic HTML structure
- Focus management

## Getting Started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Framer Motion
- React Icons
- CSS Modules

## License

MIT License
