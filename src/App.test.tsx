import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders portfolio owner and certificates section', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /lzvsrxdevs/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Formacao, cursos e documentos/i })).toBeInTheDocument();
});

test('filters private repositories', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Privados' }));
  expect(screen.getByText(/7 de 68/i)).toBeInTheDocument();
});
