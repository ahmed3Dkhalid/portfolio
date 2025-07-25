# Syed Ahmed - 3D Animation Portfolio

## Overview

A modern, responsive portfolio website for Syed Ahmed, a 3D animation artist and Media Science graduate from Bahria University. The website showcases his skills in Blender, Adobe Animate, and Unreal Engine, featuring his projects, experience, and professional background in an elegant, dark-themed design with subtle animations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion for smooth transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with structured error handling
- **File Handling**: Multer for image upload processing
- **Development**: Hot reloading with custom Vite integration

### Data Storage Solutions
- **Database**: PostgreSQL 16 with Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema generation
- **Connection**: Neon Database serverless PostgreSQL
- **In-Memory Fallback**: Custom MemStorage implementation for development

## Key Components

### Database Schema
- **Users Table**: Authentication and user management
- **Products Table**: Product catalog with categories, pricing, and metadata
- **Visual Searches Table**: Search history and results tracking

### Visual Search System
- **Image Upload**: Drag-and-drop interface with file validation
- **Processing Pipeline**: Server-side image analysis and similarity matching
- **Results Display**: Grid layout with product cards and relevance scoring
- **Search History**: Persistent storage of search queries and results

### Product Management
- **Category Filtering**: Dynamic filtering by product categories
- **Product Display**: Card-based layout with ratings, pricing, and stock status
- **Load More**: Pagination system for efficient data loading
- **Sample Data**: Pre-populated product catalog for demonstration

### UI/UX Features
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Dark Mode Support**: CSS variables for theme switching
- **Accessibility**: ARIA labels and keyboard navigation
- **Progressive Loading**: Skeleton states and loading indicators
- **Toast Notifications**: User feedback for actions and errors

## Data Flow

1. **Image Upload**: User uploads image via drag-and-drop or file picker
2. **Validation**: Client-side file type and size validation
3. **API Request**: FormData sent to `/api/visual-search` endpoint
4. **Processing**: Server analyzes image and matches against product database
5. **Response**: Similar products returned with relevance scoring
6. **Display**: Results rendered in responsive grid layout
7. **History**: Search stored in database for future reference

## External Dependencies

### Core Libraries
- **React Ecosystem**: React, React DOM, React Query for state management
- **UI Components**: Radix UI primitives, shadcn/ui, Framer Motion
- **Database**: Drizzle ORM, PostgreSQL driver, Zod for validation
- **File Handling**: Multer for uploads, React Dropzone for UI
- **Utilities**: Date-fns, clsx, class-variance-authority

### Development Tools
- **Build Tools**: Vite, ESBuild, TypeScript compiler
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Development**: TSX for TypeScript execution, Replit integration

### Database Providers
- **Production**: Neon Database (serverless PostgreSQL)
- **Development**: Local PostgreSQL or in-memory storage fallback

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with hot reloading
- **Database**: PostgreSQL 16 module in Replit
- **Port Configuration**: Client on 5000, API on same port with proxy
- **File Watching**: Vite dev server with custom middleware

### Production Build
- **Frontend**: Vite build to `dist/public` directory
- **Backend**: ESBuild bundle to `dist/index.js`
- **Static Assets**: Served from Express with fallback routing
- **Environment**: Production mode with optimized assets

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Auto-scaling**: Configured for dynamic scaling
- **Port Mapping**: External port 80 to internal port 5000
- **Build Process**: NPM scripts for development and production

## Changelog

```
Changelog:
- January 25, 2025: Integrated user-uploaded video assets into portfolio
  - Added 3D donut animation video to "3D Donut Animation" project
  - Replaced "AI Driven Brand Advertisement" with "Mobile Animation" section
  - Added mobile animation video to new Mobile Animation project
  - Updated portfolio component to support both image and video media
- June 24, 2025: Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```