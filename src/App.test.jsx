import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeDefined();
});

test('renders the logo with intrinsic dimensions and async decoding', () => {
  render(<App />);
  const logo = screen.getByRole('img', { name: 'logo' });
  expect(logo.getAttribute('width')).toBe('512');
  expect(logo.getAttribute('height')).toBe('426');
  expect(logo.getAttribute('decoding')).toBe('async');
});
