# LZDevs Portfolio

Portfolio profissional de Luiz Otavio Valenzi Sousa, desenvolvido em React e TypeScript com Vite. O projeto apresenta perfil, habilidades, servicos de informatica, projetos do GitHub, vitrine do sistema Cores & Fragrancias by Berenice e uma area completa de certificados com busca e links diretos para os documentos.

## Visao geral

Este repositorio foi reconstruido com base no projeto original `luizotaviodevs`, preservando:

- paleta visual original em azul escuro, roxo e lavanda;
- foto de perfil e imagens do projeto Cores & Fragrancias;
- links sociais e links de repositorios;
- secoes de habilidades, bancos de dados, servicos, projetos e destaque;
- todos os certificados locais publicados em `public/certificados`;
- configuracao moderna com Vite, Vitest e TypeScript.

## Principais recursos

- Pagina unica responsiva para desktop e mobile.
- Navegacao por ancoras: Sobre, Habilidades, Projetos, Certificados e Contato.
- Hero com foto de perfil, links sociais e total de certificados publicados.
- Linguagens de programacao com barras de progresso.
- Lista de bancos de dados usados.
- Servicos de informatica e desenvolvimento.
- Grade de projetos GitHub.
- Secao de projetos com todos os repositorios publicos e privados do GitHub.
- Showcase completo do projeto Cores & Fragrancias by Berenice.
- Busca de certificados por titulo, codigo, tipo ou nome do arquivo.
- Links diretos para abrir certificados em PDF ou imagem.
- Build otimizado para producao em `dist`.

## Tecnologias

- React 19
- React DOM 19
- TypeScript 5
- Vite 7
- Vitest
- Testing Library
- CSS puro responsivo

## Estrutura do projeto

```text
.
|-- index.html
|-- package.json
|-- package-lock.json
|-- tsconfig.json
|-- vite.config.ts
|-- public/
|   |-- certificados/
|   |-- cores-dashboard.png
|   |-- cores-login.png
|   |-- cores-products.png
|   |-- cores-users.png
|   |-- favicon.ico
|   |-- icone.png
|   |-- logo192.png
|   |-- logo512.png
|   |-- manifest.json
|   |-- profile.jpg
|   `-- robots.txt
`-- src/
    |-- App.css
    |-- App.test.tsx
    |-- App.tsx
    |-- certificates.ts
    |-- index.css
    |-- index.tsx
    |-- repositories.ts
    |-- setupTests.ts
    `-- vite-env.d.ts
```

## Certificados

Os certificados ficam em:

```text
public/certificados/
```

A lista exibida no site e gerada no arquivo:

```text
src/certificates.ts
```

Cada item possui:

- `title`: titulo exibido no card;
- `fileName`: nome seguro usado no projeto;
- `originalName`: nome original do arquivo;
- `type`: `PDF` ou `Imagem`;
- `href`: caminho publico para abrir o certificado.

Atualmente o site publica 106 documentos entre PDFs e imagens.

## Links usados no site

- LinkedIn: `https://www.linkedin.com/in/luiz-otavio-valenzi-sousa-1180bb360/`
- Instagram: `https://www.instagram.com/luiz.otaviovs/`
- GitHub: `https://github.com/lzvsrx`
- Repositorio original: `https://github.com/lzvsrx/luizotaviodevs`
- Projeto lzworldstech-dev: `https://github.com/lzvsrx/lzworldstech-dev`
- Todos os repositorios: `https://github.com/lzvsrx?tab=repositories`

## Repositorios GitHub

A secao `Projetos GitHub` usa os dados em:

```text
src/repositories.ts
```

Esse arquivo lista os repositorios publicos e privados do perfil `lzvsrx`, com nome, URL, descricao, linguagem principal, data de atualizacao, estrelas, forks, homepage, visibilidade e estado de arquivamento.

Observacao: repositorios privados aparecem na lista do portfolio, mas o link do GitHub so abre para contas que tenham permissao de acesso ao repositorio.

## Como rodar localmente

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Por padrao, o Vite abre em:

```text
http://localhost:5173
```

## Scripts disponiveis

```bash
npm start
```

Inicia o servidor de desenvolvimento com Vite.

```bash
npm run dev
```

Alias para iniciar o servidor de desenvolvimento.

```bash
npm run typecheck
```

Executa a checagem de tipos TypeScript sem gerar arquivos.

```bash
npm run build
```

Executa `tsc --noEmit` e gera o build de producao em `dist`.

```bash
npm run preview
```

Serve localmente o build de producao gerado.

```bash
npm test
```

Executa os testes automatizados com Vitest.

```bash
npm run audit
```

Executa auditoria de seguranca das dependencias.

## Seguranca

O projeto foi migrado de Create React App para Vite para remover a cadeia antiga de dependencias do `react-scripts`, que puxava pacotes com alertas de seguranca.

Medidas aplicadas:

- `npm audit` validado com `0 vulnerabilities`;
- links externos com `rel="noopener noreferrer"`;
- `Content-Security-Policy` basica no `index.html`;
- `object-src 'none'` para reduzir superficie de plugins e embeds;
- build com typecheck obrigatorio;
- `dist/` ignorado pelo Git;
- dependencias antigas removidas: `react-scripts`, `web-vitals` e tipos do CRA.

## Validacao

Comandos executados com sucesso:

```bash
npm run typecheck
npm run build
npm test
npm audit
```

Resultado da auditoria:

```text
found 0 vulnerabilities
```

## Build e deploy

Para gerar uma versao de producao:

```bash
npm run build
```

Os arquivos finais ficam em:

```text
dist/
```

Essa pasta pode ser publicada em qualquer hospedagem estatica, como Vercel, Netlify, GitHub Pages ou servidor proprio.

## Observacoes

- O arquivo `public/index.html` foi removido porque Vite usa `index.html` na raiz do projeto.
- A pasta `public/` continua sendo usada para imagens, manifesto, icones e certificados.
- O conteudo visual e os assets principais foram preservados do repositorio base.
- Os certificados foram incorporados como arquivos estaticos para que os links funcionem sem backend.
