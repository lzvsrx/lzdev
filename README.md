# Luiz Otavio Valenzi Sousa Portfolio

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
- Hero com foto de perfil, links sociais, chamada para WhatsApp e metricas rapidas.
- Linguagens de programacao com barras de progresso.
- Lista de bancos de dados usados.
- Servicos de informatica e desenvolvimento.
- Projetos em destaque com links para codigo e demos.
- Secao de projetos com todos os repositorios publicos e privados do GitHub.
- Busca e filtro por visibilidade na lista de repositorios.
- Estudos de caso com problema, solucao e impacto.
- Secao de processo de trabalho: diagnostico, planejamento, desenvolvimento e validacao.
- Showcase completo do projeto Cores & Fragrancias by Berenice.
- Busca de certificados por titulo, codigo, tipo ou nome do arquivo.
- Links diretos para abrir certificados em PDF ou imagem.
- Formulario de pedido de servico com nome, contato, servico, valor/orcamento e descricao completa.
- Envio do pedido diretamente para o WhatsApp com a mensagem ja formatada.
- Protocolo automatico para acompanhamento do pedido.
- Area de controle para consultar status, proxima etapa e previsao de entrega.
- Painel administrativo local para editar conteudos, links, tecnologias, bancos, servicos e pedidos.
- Andamento dos projetos administravel pelo painel, com status, porcentagem, previsao e etapa atual.
- Banco de dados local em IndexedDB para salvar conteudos, pedidos, andamentos e catalogo do site.
- Exportacao e importacao de backup administrativo em JSON.
- SEO com canonical, metatags Open Graph/Twitter, `robots.txt` e `sitemap.xml`.
- Acessibilidade com skip link, foco visivel e suporte a reducao de movimento.
- Build otimizado para producao em `dist`.

## Tecnologias

- React 19
- React DOM 19
- TypeScript 5
- Vite 7
- Vitest
- Testing Library
- Lucide React
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
|   |-- sitemap.xml
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
- Instagram: `https://www.instagram.com/luizotaviovs/`
- Instagram LZ World Games: `https://www.instagram.com/lzworldgames/`
- WhatsApp: `https://wa.me/5535999215995`
- Telefone: `(35) 99921-5995`
- GitHub: `https://github.com/lzvsrx`
- Repositorio original: `https://github.com/lzvsrx/luizotaviodevs`
- Projeto lzworldstech-dev: `https://github.com/lzvsrx/lzworldstech-dev`
- Todos os repositorios: `https://github.com/lzvsrx?tab=repositories`

## Formulario de pedido

A secao de contato possui um formulario para o cliente solicitar servicos diretamente pelo WhatsApp.

Campos enviados:

- nome do cliente;
- contato para retorno;
- servico desejado;
- valor ou orcamento disponivel;
- descricao completa do que precisa ser feito.

Ao enviar, o site abre:

```text
https://wa.me/5535999215995
```

com uma mensagem pronta contendo todos os dados preenchidos.

Cada pedido tambem gera um protocolo no formato:

```text
LZ-AAAAMMDD-CODIGO
```

Esse protocolo aparece na mensagem do WhatsApp e na area `Acompanhe seu pedido`.

## Controle do pedido

A area de acompanhamento permite consultar:

- protocolo do pedido;
- status atual;
- servico solicitado;
- valor/orcamento informado;
- contato do cliente;
- data da ultima atualizacao;
- previsao de entrega;
- proxima etapa.

Estados previstos:

- `Pedido recebido`;
- `Em analise`;
- `Em andamento`;
- `Em revisao`;
- `Entregue`.

Os pedidos enviados pelo formulario ficam salvos no navegador do cliente via `localStorage`, permitindo que ele volte ao site e veja o protocolo recente. Para acompanhamento publico apos atualizacoes suas, os pedidos podem ser publicados no array `publishedTrackedOrders` em `src/App.tsx`.

## Painel administrativo

A secao `Administracao` permite controlar conteudos diretamente pelo site.

Codigo padrao:

```text
lzadmin2026
```

Itens administraveis:

- nome/titulo da tela inicial;
- texto principal da tela inicial;
- titulo e texto da secao Sobre;
- links sociais e de contato;
- tecnologias e niveis;
- bancos de dados;
- servicos oferecidos;
- pedidos salvos no navegador, com status, previsao e proxima etapa;
- andamento de cada projeto/repositorio exibido no site;
- backup JSON com conteudos e pedidos.

### Andamento dos projetos

No painel administrativo, a area `Andamento dos projetos` permite escolher um repositorio e definir:

- status do projeto;
- porcentagem de progresso;
- previsao de entrega;
- etapa atual.

Essas informacoes aparecem automaticamente nos cards da secao `Projetos GitHub`.

Observacao importante: este projeto e um site estatico. Por isso, o painel administrativo usa banco local do navegador; as alteracoes ficam salvas no navegador onde foram feitas. Para manter essas alteracoes em outro navegador ou publicar como conteudo fixo, use o backup JSON ou atualize os dados diretamente no codigo.

## Banco de dados

O site salva os dados administraveis em um banco local do navegador usando IndexedDB, com fallback automatico para `localStorage` quando o navegador bloquear IndexedDB.

Banco:

```text
lzdev-site-database
```

Registros salvos:

- `lzdev-admin-content`: textos, links, tecnologias, bancos de dados, servicos e andamento dos projetos;
- `lzdev-service-orders`: pedidos, protocolos, status, previsao de entrega e proxima etapa;
- `lzdev-site-catalog`: catalogo estatico do site com certificados, repositorios, showcase, processos e projetos em destaque.

O backup JSON do painel inclui conteudo administrativo, pedidos e catalogo do site.

Observacao: por ser um banco local do navegador, os dados ficam no dispositivo onde foram editados. Para um banco central compartilhado entre todos os dispositivos, e necessario conectar um backend como Supabase, Firebase, PostgreSQL, MySQL ou API propria com credenciais de producao.

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
- metadados SEO sem scripts inline para preservar a CSP;
- `robots.txt` com sitemap publico;
- foco visivel e skip link para melhorar acessibilidade por teclado;
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
