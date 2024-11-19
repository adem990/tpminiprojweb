import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EventPage from '../components/EventPage';

describe('EventPage', () => {
  it('renders without crashing', () => {
    render(<EventPage />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('contains all main sections', () => {
    render(<EventPage />);
    expect(screen.getByLabelText('Hero section')).toBeInTheDocument();
    expect(screen.getByText('Find Top Events for Every Interest')).toBeInTheDocument();
    expect(screen.getByText('More About Us')).toBeInTheDocument();
  });

  it('displays contact information', () => {
    render(<EventPage />);
    expect(screen.getByText('+216 228 00 884')).toBeInTheDocument();
    expect(screen.getByText('ahmednaffeti@ieee.org')).toBeInTheDocument();
  });

  it('has accessible images', () => {
    render(<EventPage />);
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
    });
  });
});
