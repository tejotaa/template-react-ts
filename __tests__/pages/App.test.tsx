import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);

    // Check if the title is rendered
    const titleElement = screen.getByText(/Vite \+ React/i);
    expect(titleElement).toBeInTheDocument();
  });
});
