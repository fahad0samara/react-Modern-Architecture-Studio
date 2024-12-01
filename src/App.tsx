import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { ProtectedRoute } from './components/auth';
import ScrollProgress from './components/ScrollProgress';
import FloatingNav from './components/FloatingNav';
import LoadingSpinner from './components/LoadingSpinner';

// Import pages directly instead of using lazy loading for now
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio';
import Sustainability from './pages/Sustainability';
import Blog from './pages/Blog';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <ScrollProgress />
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/team" element={<Team />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/dashboard/*"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <FloatingNav />
            <Footer />
          </div>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;