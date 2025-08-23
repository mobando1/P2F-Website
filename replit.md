# Overview

Passport to Fluency is a bilingual language learning platform that connects students with native instructors for personalized 1-on-1 coaching sessions. The application features separate Spanish and English sites targeting different audiences - Spanish speakers learning English and English speakers learning Spanish. Built as a full-stack web application with React frontend and Express backend, it includes booking management, contact forms, and multilingual content delivery.

# User Preferences

Preferred communication style: Simple, everyday language.

# Recent Changes

## Complete HighLevel Calendar Integration (August 2025)
- **Full calendar system**: All 4 HighLevel calendars integrated and working
  - Adult Spanish: g27wbcMQU9YvigMrJfVK
  - Kids Spanish: DplznTj4YrOGaYJ12ufO  
  - Adult English: Z5fJpM9ktwCxfpHAPJRh
  - Kids English: dYj2Xhmgf3w26n0Mrwqw
- **Smart calendar selection**: System automatically shows correct calendar based on language and age group
- **Calendar separation**: Created separate booking flows for adult vs children classes
  - Same pricing structure but specialized teaching preparation for instructors
  - Clear visual distinction in CTA sections with separate buttons
  - Modal titles dynamically update to indicate "Adult Classes" or "Kids Classes"
- **Testimonials correction**: Fixed testimonial content alignment
  - Spanish site (/en) now shows real Spanish learning testimonials from Passport to Fluency
  - English site (/es) features invented English learning testimonials (María González, Ana Rodríguez, Carlos Mendoza)
  - Realistic scenarios covering career advancement, parenting support, and business growth
- **User experience improvements**:
  - Intuitive button design with icons (Users for adults, Star for children)
  - Responsive layout working on mobile and desktop
  - Clear messaging about "same pricing, specialized approach"

## Landing Page Complete Redesign (August 2025)
- **Fixed flag confusion**: Spanish flag (🇪🇸) now represents learning Spanish, US flag (🇺🇸) represents learning English
- **Complete transformation to clean, modern design inspired by BaseLang**:
  - Clean white background eliminating overwhelming gradients and animations
  - Natural title "Habla como un nativo" using conversational Spanish
  - Brand-consistent color usage (passport-blue and passport-orange) in accents only
  - Simple flag icons in circular backgrounds for clear visual hierarchy
  - Professional card layout with subtle hover effects and borders
  - Clear social proof with organized statistics presentation
  - Streamlined content focusing on value proposition
- **Enhanced user experience**:
  - Reduced visual noise while maintaining warmth
  - Language detection notification with clean styling
  - Structured feature lists with brand-colored bullet points
  - Clear call-to-action buttons using brand colors
  - Professional typography hierarchy for better readability
- **Better conversion focus**: Clean, trustworthy design that feels professional yet approachable, removing barriers to user action while maintaining brand identity

## Complete Site Architecture Implementation (August 2025)
- **Full trilingual site structure**:
  - Landing page (/) with language selection - clean BaseLang-inspired design
  - English learning site (/es) - specifically for Spanish speakers learning English
  - Spanish learning site (/en) - specifically for English speakers learning Spanish
- **Audience-specific content optimization**:
  - Localized messaging and cultural references for each target audience
  - Language-appropriate testimonials and social proof
  - Customized pricing presentation and call-to-action buttons
  - Navigation and UI elements adapted to user expectations
- **Seamless user journey**:
  - Direct routing from landing page selections to appropriate audience sites
  - Language toggle functionality between sites
  - Integrated booking system with modal forms
  - Consistent branding while optimizing for conversion per audience

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with separate routes for Spanish (/es) and English (/en) sites
- **State Management**: TanStack React Query for server state management and caching
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database Integration**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Session Management**: Express sessions with PostgreSQL session store
- **API Structure**: RESTful endpoints for bookings and contacts with proper HTTP status codes

## Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Neon Database serverless platform
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Schema Management**: Centralized schema definitions in `/shared/schema.ts` for client-server consistency
- **Fallback Storage**: In-memory storage implementation for development and testing

## Authentication and Authorization
- **Session-based Authentication**: Express sessions with secure cookie configuration
- **User Management**: Basic user schema with username/password authentication
- **Route Protection**: Middleware-based access control for protected endpoints

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting platform
- **Connection Pooling**: Built-in connection management through @neondatabase/serverless

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Radix UI**: Headless UI components for accessibility and functionality
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Web fonts for typography (DM Sans, Architects Daughter, Fira Code, Geist Mono)

### Development Tools
- **Vite**: Fast build tool with HMR and development server
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production builds

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Date and Time
- **date-fns**: Modern JavaScript date utility library for date formatting and manipulation

### Carousel and Media
- **Embla Carousel**: Lightweight carousel library for testimonials and image galleries

The architecture emphasizes type safety, performance, and maintainability through shared TypeScript schemas, modern React patterns, and robust backend API design. The bilingual nature is handled through route-based language switching and comprehensive translation systems.