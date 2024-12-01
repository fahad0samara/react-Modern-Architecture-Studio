# ARCHIFORM - Modern Architecture Studio


## Overview

ARCHIFORM is a modern architecture studio website built with React, TypeScript, and Tailwind CSS. It showcases architectural projects, services, and company information through an elegant and responsive design.

## Features

- 🏗️ **Project Showcase** - Interactive portfolio of architectural projects
- 🎨 **Modern Design** - Sleek, responsive UI with smooth animations
- 📊 **Analytics Dashboard** - Comprehensive data visualization
- 🔐 **Authentication** - Secure user authentication system
- 🌐 **Virtual Tours** - Interactive 3D model viewing
- 📱 **Responsive Layout** - Optimized for all device sizes
- 🎭 **Dark/Light Mode** - Theme customization
- ⚡ **Performance Optimized** - Fast loading and smooth transitions

## Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Data Fetching:** TanStack Query (React Query)
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **3D Rendering:** React Three Fiber
- **Charts:** Recharts, Chart.js
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Icons:** Lucide React
- **Development:** Vite
- **Testing:** Vitest

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone  https://github.com/fahad0samara/react-Modern-Architecture-Studio.git
cd archiform
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_API_URL=your_api_url
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── analytics/     # Analytics components
│   ├── auth/          # Authentication components
│   ├── dashboard/     # Dashboard components
│   ├── features/      # Feature components
│   ├── home/          # Home page components
│   ├── layout/        # Layout components
│   ├── theme/         # Theme components
│   └── ui/            # UI components
├── lib/               # Utility libraries
│   ├── api/          # API client
│   ├── firebase/     # Firebase configuration
│   ├── hooks/        # Custom hooks
│   ├── store/        # State management
│   └── utils/        # Utility functions
├── pages/            # Page components
├── tests/            # Test files
└── types/            # TypeScript types
```

## Features in Detail

### Dashboard
- Real-time analytics
- User statistics
- Performance metrics
- Revenue tracking
- System status monitoring

### Project Showcase
- Filter projects by category
- Interactive project details
- Image galleries
- Virtual tours

### Authentication
- Secure login system
- Protected routes
- User role management
- Session handling

### Content Management
- Blog section
- Team profiles
- Service descriptions
- Career listings

## Performance Optimizations

- Code splitting
- Lazy loading
- Image optimization
- Bundle size optimization
- Caching strategies
- SEO optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



---

Built with ❤️ by Fahad