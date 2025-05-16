import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);

    // Check if the title is rendered
    const titleElement = screen.getByText('2025 Bakery');
    expect(titleElement).toBeInTheDocument();
  });
});
