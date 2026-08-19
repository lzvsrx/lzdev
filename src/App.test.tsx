import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders portfolio owner and certificates section', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /lzvsrxdevs/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Formacao, cursos e documentos/i })).toBeInTheDocument();
});
