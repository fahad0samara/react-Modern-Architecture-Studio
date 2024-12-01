import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '@/components/auth';
import { useAuthStore } from '@/lib/store/useAuthStore';

vi.mock('@/lib/store/useAuthStore');

describe('ProtectedRoute', () => {
  it('renders children when authenticated', () => {
    vi.mocked(useAuthStore).mockReturnValue({
      isAuthenticated: true,
      user: null,
      setUser: vi.fn(),
      logout: vi.fn(),
    });

    render(
      <BrowserRouter>
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </BrowserRouter>
    );

    expect(screen.getByText('Protected Content')).toBeInTheDocument();
  });

  it('redirects to login when not authenticated', () => {
    vi.mocked(useAuthStore).mockReturnValue({
      isAuthenticated: false,
      user: null,
      setUser: vi.fn(),
      logout: vi.fn(),
    });

    const { container } = render(
      <BrowserRouter>
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </BrowserRouter>
    );

    expect(container).not.toHaveTextContent('Protected Content');
  });
});