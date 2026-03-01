# Angular Portfolio Website - Development Agent Guide

## 📋 Project Overview

This is a modern, responsive Angular portfolio website showcasing projects, skills, and professional profile. The project is built with Angular 21 using the latest Angular features and best practices.

### Tech Stack

- **Framework**: Angular 21.0.0
- **Language**: TypeScript 5.9.2
- **UI Library**: Angular Material 21.1.2
- **Styling**: SCSS with CSS variables
- **Testing**: Vitest 4.0.8
- **Code Formatting**: Prettier
- **Build Tool**: Angular CLI 21.0.4

## 🏗️ Architecture & Best Practices

### Component Architecture

#### Standalone Components

All components use Angular's standalone component architecture (no NgModule), following the modern Angular pattern:

```typescript
@Component({
  selector: 'app-component-name',
  standalone: true,
  imports: [
    /* required imports */
  ],
  templateUrl: './component-name.html',
  styleUrl: './component-name.scss',
})
export class ComponentName {}
```

**Benefits:**

- Simplified dependency management
- Better tree-shaking
- Clearer component boundaries
- Easier testing and maintenance

#### Component Organization

```
src/app/core/components/
├── app-bar-component/          # Navigation & mobile menu
├── home-component/             # Hero section
├── profile-card-component/     # Profile information
├── projects-component/         # Projects showcase
│   └── project-component/      # Individual project card
└── skills-component/           # Skills display
    └── skill-component/        # Individual skill badge
```

### State Management with Signals

The project leverages Angular's reactive signals for state management:

```typescript
// Signal for reactive state
activeSection = signal<string>('home');
title = signal('portfolio');

// Effect for side effects
effect(() => {
  const section = this.activeSection();
  this.router.navigate([`/${section}`], {
    replaceUrl: true,
    onSameUrlNavigation: 'ignore',
  });
});
```

**Best Practices:**

- Use `signal()` for primitive values
- Use `computed()` for derived state
- Use `effect()` for side effects only
- Prefer signals over traditional `@Input()`/`@Output()` when possible

### Input/Output Patterns

Modern Angular input/output decorators:

```typescript
// Modern input decorator
activeSection = input<string>('');

// Modern output decorator
emitSection = output<string>();
```

## 🎨 UX Best Practices

### Responsive Design

#### Mobile-First Approach

- Design for mobile screens first, then enhance for larger screens
- Use CSS Grid and Flexbox for responsive layouts
- Implement breakpoints at key screen sizes (768px, 1024px, 1440px)

#### Mobile Menu

The app bar includes a mobile-responsive hamburger menu:

- Collapses navigation on smaller screens
- Smooth transitions for menu open/close
- Touch-friendly tap targets (minimum 44x44px)
- Closes menu when a link is clicked

### Smooth Scrolling & Navigation

#### Scroll-Based Section Detection

The app automatically detects which section is currently visible:

```typescript
@HostListener('window:scroll', [])
onWindowScroll() {
  const sections = ['home', 'projects'];
  const scrollPosition = window.scrollY;
  // Detect active section based on scroll position
}
```

#### Smooth Scroll to Section

```typescript
scrollTo(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetposition = elementPosition - 150; // Account for app bar height
    window.scrollTo({
      top: offsetposition,
      behavior: 'smooth',
    });
  }
}
```

### Accessibility (a11y)

#### Semantic HTML

- Use proper heading hierarchy (h1, h2, h3)
- Implement ARIA labels where necessary
- Ensure keyboard navigation works
- Provide sufficient color contrast (WCAG AA standard)

#### Focus Management

- Visible focus indicators on interactive elements
- Logical tab order
- Skip to main content link (if needed)

### Visual Design

#### Color System

Centralized SCSS variables for consistent theming:

```scss
$primary-background-color: #080931;
$primary-text-color: #ffffff;
$blue-color: #8caaee;
$teal-color: #00ffff;
$red-color: #e78284;
// ... more variables
```

#### Typography

- Clear hierarchy with font sizes and weights
- Readable line heights (1.5-1.6)
- Consistent spacing using multiples of 4px or 8px

#### Icons

- SVG icons registered via `MatIconRegistry`
- Custom SVG files in `/public` directory
- Consistent sizing and alignment

## 🚀 Development Workflow

### Code Style & Formatting

#### Prettier Configuration

```json
{
  "printWidth": 100,
  "singleQuote": true,
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
}
```

**Rules:**

- 100 character line width
- Single quotes for strings
- Angular parser for HTML files

#### Naming Conventions

- **Components**: PascalCase with `-component` suffix (e.g., `AppBarComponent`)
- **Files**: kebab-case with `-component` suffix (e.g., `app-bar-component.ts`)
- **Selectors**: kebab-case with `app-` prefix (e.g., `app-app-bar-component`)
- **Interfaces/Types**: PascalCase (e.g., `Project`, `Skill`)

### File Structure

Each component follows this structure:

```
component-name/
├── component-name.ts          # Component logic
├── component-name.html        # Template
├── component-name.scss        # Styles
└── component-name.spec.ts     # Unit tests
```

### Routing

#### Route Configuration

```typescript
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
];
```

**Best Practices:**

- Use lazy loading for large routes (not needed for this small portfolio)
- Provide default redirect to home
- Use `pathMatch: 'full'` for exact matches
- Add route titles for SEO and accessibility

## 🧪 Testing Strategy

### Unit Testing with Vitest

#### Component Testing

```typescript
describe('ComponentName', () => {
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

**Test Coverage Goals:**

- Component initialization
- Input/output behavior
- User interactions (clicks, form submissions)
- Reactive state changes

### Testing Best Practices

- Write tests alongside component development
- Use meaningful test descriptions
- Test user behavior, not implementation details
- Keep tests fast and isolated

## 📦 Asset Management

### Static Assets

- **Images**: `/public/` directory
- **SVG Icons**: Registered via `MatIconRegistry` in root component
- **Favicon**: `/public/favicon.ico`

### Icon Registration Pattern

```typescript
this.matIconRegistry.addSvgIcon(
  'icon-name',
  this.domSanitizer.bypassSecurityTrustResourceUrl('/icon-file.svg'),
);
```

## 🔧 Performance Optimization

### Best Practices Implemented

- **Standalone Components**: Smaller bundle size
- **Tree Shaking**: Only import what's needed
- **Lazy Loading**: Can be added for larger routes
- **Signal-based Reactivity**: Efficient change detection
- **OnPush Change Detection**: Default in Angular 21

### Future Optimizations

- Implement route-level code splitting
- Add image optimization (WebP format)
- Consider adding service workers for PWA
- Implement lazy loading for below-fold content

## 🌐 Browser Support

### Target Browsers

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Last 2 versions
- Mobile browsers (iOS Safari, Chrome Mobile)

### Progressive Enhancement

- Core functionality works without JavaScript
- Enhanced experience with JavaScript enabled
- Graceful degradation for older browsers

## 📝 Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Watch mode for development
npm run watch
```

## 🎯 Key Features

### Current Features

1. **Responsive Navigation**: Mobile-friendly app bar with smooth transitions
2. **Smooth Scrolling**: Scroll-based section detection and navigation
3. **Project Showcase**: Grid layout with hover effects
4. **Skills Display**: Visual skill badges with icons
5. **Profile Section**: Personal information and contact
6. **Dark Theme**: Consistent dark color scheme

### Component Responsibilities

#### AppComponent

- Root component managing global state
- Icon registration for all SVG icons
- Scroll detection and active section tracking
- Smooth scroll to section functionality

#### AppBarComponent

- Navigation links with active state
- Mobile menu toggle functionality
- Responsive design (desktop/mobile)

#### HomeComponent

- Hero section with introduction
- Call-to-action elements
- Profile card integration

#### ProjectsComponent

- Project data management
- Grid layout for project cards
- Link to project repositories

#### SkillsComponent

- Skills data management
- Badge-style display with icons
- Responsive grid layout

## 🔐 Security Considerations

### SVG Icon Security

```typescript
this.domSanitizer.bypassSecurityTrustResourceUrl('/icon.svg');
```

- Use `DomSanitizer` for trusted resource URLs
- Only load SVGs from trusted sources (public directory)

### Best Practices

- Validate user inputs (if forms are added)
- Use Angular's built-in sanitization
- Keep dependencies updated
- Follow OWASP security guidelines

## 📚 Learning Resources

### Angular Documentation

- [Angular Official Docs](https://angular.dev/)
- [Angular Signals Guide](https://angular.dev/guide/signals)
- [Standalone Components](https://angular.dev/guide/components/standalone)

### Best Practices

- [Angular Style Guide](https://angular.dev/guide/styleguide)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [Responsive Design Patterns](https://web.dev/responsive-web-design-basics/)

## 🚦 Development Guidelines

### When Adding New Features

1. **Plan the Component**
   - Define component responsibility
   - Identify inputs/outputs
   - Plan the UI/UX

2. **Create Component Files**
   - Follow naming conventions
   - Use standalone component pattern
   - Include template, styles, and tests

3. **Implement Logic**
   - Use signals for state
   - Implement effects for side effects
   - Keep components focused

4. **Style the Component**
   - Use SCSS variables
   - Ensure responsive design
   - Follow accessibility guidelines

5. **Test the Component**
   - Write unit tests
   - Test user interactions
   - Verify accessibility

6. **Integrate**
   - Add to parent component imports
   - Update routing if needed
   - Test integration

### Code Review Checklist

- [ ] Follows naming conventions
- [ ] Uses standalone components
- [ ] Implements signals appropriately
- [ ] Includes proper TypeScript types
- [ ] Has responsive design
- [ ] Meets accessibility standards
- [ ] Includes unit tests
- [ ] Follows Prettier formatting
- [ ] No console errors/warnings
- [ ] Mobile-friendly

## 🎨 Design System

### Spacing Scale

- Base unit: 8px
- Small: 8px
- Medium: 16px
- Large: 24px
- XL: 32px
- XXL: 48px

### Border Radius

- Small: 4px
- Medium: 8px
- Large: 16px
- Full: 50% (circles)

### Shadows

- Subtle: 0 2px 4px rgba(0, 0, 0, 0.1)
- Medium: 0 4px 8px rgba(0, 0, 0, 0.15)
- Strong: 0 8px 16px rgba(0, 0, 0, 0.2)

### Transitions

- Fast: 150ms
- Normal: 300ms
- Slow: 500ms

## 🔄 State Management Patterns

### Local State (Component Level)

```typescript
// Use signals for component-local state
isOpen = signal(false);
```

### Shared State (Parent-Child)

```typescript
// Parent
activeSection = signal<string>('home');

// Child
activeSection = input<string>('');
emitSection = output<string>();
```

### Global State (If Needed)

For larger applications, consider:

- NgRx (for complex state)
- Signals with services (for medium complexity)
- Component signals (for simple state)

## 📱 Mobile Considerations

### Touch Targets

- Minimum 44x44px for interactive elements
- Adequate spacing between touch targets
- Visual feedback on touch

### Performance

- Optimize images for mobile
- Minimize JavaScript bundle size
- Use CSS transforms/animations (GPU accelerated)

### Orientation

- Support both portrait and landscape
- Test on various screen sizes
- Consider device-specific features

## 🌟 Future Enhancements

### Potential Features

- [ ] Contact form with validation
- [ ] Blog/Articles section
- [ ] Dark/Light theme toggle
- [ ] Search functionality
- [ ] Filter projects by technology
- [ ] Animated skill bars
- [ ] Testimonials section
- [ ] Downloadable resume
- [ ] Social media integration
- [ ] PWA with offline support

### Technical Improvements

- [ ] Add E2E tests with Playwright/Cypress
- [ ] Implement lazy loading for routes
- [ ] Add performance monitoring
- [ ] Set up CI/CD pipeline
- [ ] Add analytics tracking
- [ ] Implement SEO optimizations
- [ ] Add meta tags for social sharing

## 📞 Support & Maintenance

### Regular Maintenance Tasks

- Update dependencies monthly
- Review and update tests
- Monitor performance metrics
- Check for security vulnerabilities
- Review and refactor code

### Issue Resolution

1. Reproduce the issue
2. Identify root cause
3. Implement fix
4. Add/update tests
5. Document changes
6. Deploy fix

---

**Version**: 1.0.0  
**Last Updated**: 2026-03-01  
**Maintainer**: Development Team

This guide serves as the primary reference for developing and maintaining the Angular portfolio website. Follow these best practices to ensure code quality, performance, and an excellent user experience.
