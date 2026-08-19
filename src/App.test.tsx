import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, test, vi } from 'vitest';
import App from './App';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

test('renders portfolio owner and certificates section', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /Luiz Otavio Valenzi Sousa/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Formacao, cursos e documentos/i })).toBeInTheDocument();
});

test('filters private repositories', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Privados' }));
  expect(screen.getByText(/7 de 68/i)).toBeInTheDocument();
});

test('sends service request to WhatsApp with customer details', () => {
  const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

  render(<App />);

  fireEvent.change(screen.getByLabelText('Nome do cliente'), {
    target: { value: 'Cliente Teste' },
  });
  fireEvent.change(screen.getByLabelText('Contato para retorno'), {
    target: { value: '(35) 99999-0000' },
  });
  fireEvent.change(screen.getByLabelText('Servico desejado'), {
    target: { value: 'Criacao de Sites' },
  });
  fireEvent.change(screen.getByLabelText('Valor ou orcamento disponivel'), {
    target: { value: 'R$ 500,00' },
  });
  fireEvent.change(screen.getByLabelText('Descreva tudo que precisa que eu faca'), {
    target: { value: 'Preciso de um site institucional com contato.' },
  });

  fireEvent.click(screen.getByRole('button', { name: /Enviar pedido pelo WhatsApp/i }));

  expect(openSpy).toHaveBeenCalledTimes(1);
  const [whatsAppUrl] = openSpy.mock.calls[0];
  const decodedUrl = decodeURIComponent(String(whatsAppUrl));

  expect(decodedUrl).toContain('https://wa.me/5535999215995?text=');
  expect(decodedUrl).toContain('Protocolo do pedido: LZ-');
  expect(decodedUrl).toContain('Nome do cliente: Cliente Teste');
  expect(decodedUrl).toContain('Contato do cliente: (35) 99999-0000');
  expect(decodedUrl).toContain('Servico desejado: Criacao de Sites');
  expect(decodedUrl).toContain('Valor/orcamento informado: R$ 500,00');
  expect(decodedUrl).toContain('Preciso de um site institucional com contato.');
  expect(screen.getAllByText('Pedido recebido').length).toBeGreaterThan(0);
  expect(screen.getByText('A combinar pelo WhatsApp')).toBeInTheDocument();
}, 15000);

test('admin panel edits visible hero title', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText('Login administrativo'), {
    target: { value: 'admin' },
  });
  fireEvent.change(screen.getByLabelText('Senha administrativa'), {
    target: { value: 'lzadmin2026' },
  });
  fireEvent.click(screen.getByRole('button', { name: /Entrar no painel/i }));
  fireEvent.change(screen.getByLabelText('Nome/titulo da tela inicial'), {
    target: { value: 'Titulo administrado' },
  });

  expect(screen.getByRole('heading', { level: 1, name: /Titulo administrado/i })).toBeInTheDocument();
}, 10000);

test('admin panel edits project progress shown on project cards', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText('Login administrativo'), {
    target: { value: 'admin' },
  });
  fireEvent.change(screen.getByLabelText('Senha administrativa'), {
    target: { value: 'lzadmin2026' },
  });
  fireEvent.click(screen.getByRole('button', { name: /Entrar no painel/i }));

  const lzdevStatusInput = screen.getByLabelText('Status do projeto lzdev');
  fireEvent.change(lzdevStatusInput, {
    target: { value: 'Em desenvolvimento ativo' },
  });
  fireEvent.change(screen.getByLabelText('Progresso do projeto lzdev'), {
    target: { value: '88' },
  });
  fireEvent.change(screen.getByLabelText('Previsao do projeto lzdev'), {
    target: { value: '30/08/2026' },
  });
  fireEvent.change(screen.getByLabelText('Etapa atual do projeto lzdev'), {
    target: { value: 'Finalizando painel administrativo.' },
  });

  expect(screen.getAllByText('Em desenvolvimento ativo').length).toBeGreaterThan(0);
  expect(screen.getAllByText('88%').length).toBeGreaterThan(0);
  expect(screen.getByText(/30\/08\/2026/i)).toBeInTheDocument();
  expect(screen.getAllByText('Finalizando painel administrativo.').length).toBeGreaterThan(0);
}, 30000);
