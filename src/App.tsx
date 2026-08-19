import React, { useMemo, useState } from 'react';
import './App.css';
import { certificates } from './certificates';
import { githubRepositories } from './repositories';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luiz-otavio-valenzi-sousa-1180bb360/' },
  { label: 'Instagram', href: 'https://www.instagram.com/luiz.otaviovs/' },
  { label: 'GitHub', href: 'https://github.com/lzvsrx' },
  { label: 'Repositorio', href: 'https://github.com/lzvsrx/lzworldstech-dev' },
];

const allLinks = [
  ...socialLinks,
  { label: 'Repo original', href: 'https://github.com/lzvsrx/luizotaviodevs' },
  { label: 'Todos os repositorios', href: 'https://github.com/lzvsrx?tab=repositories' },
];

const skills = [
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 90 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'PHP', percentage: 80 },
  { name: 'Python', percentage: 75 },
  { name: 'React.js', percentage: 85 },
  { name: 'Node.js', percentage: 80 },
  { name: 'TypeScript', percentage: 70 },
  { name: 'React Native', percentage: 80 },
  { name: 'Flutter', percentage: 75 },
  { name: 'Swift', percentage: 65 },
  { name: 'Kotlin', percentage: 70 },
];

const databases = ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase', 'MariaDB'];

const services = [
  {
    icon: 'PC',
    title: 'Formatacao',
    text: 'Formatacao completa de computadores com reinstalacao do sistema operacional e configuracao.',
  },
  {
    icon: 'HW',
    title: 'Instalacao de Pecas',
    text: 'Instalacao e upgrade de memoria RAM, HD, SSD, placas de video e outros componentes.',
  },
  {
    icon: 'MT',
    title: 'Manutencao',
    text: 'Manutencao preventiva e corretiva, limpeza, otimizacao, configuracao e reparos.',
  },
  {
    icon: 'DEV',
    title: 'Programacao',
    text: 'Desenvolvimento de software personalizado, automacao de processos e solucoes sob medida.',
  },
  {
    icon: 'WEB',
    title: 'Criacao de Sites',
    text: 'Sites profissionais, responsivos e otimizados para apresentar marcas, servicos e projetos.',
  },
  {
    icon: 'APP',
    title: 'Criacao de Apps',
    text: 'Aplicativos mobile e web apps com tecnologias modernas e experiencia objetiva para o usuario.',
  },
];

const showcaseFeatures = ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Dashboard', 'Relatorios'];

const showcaseGallery = [
  {
    image: '/cores-dashboard.png',
    title: 'Dashboard Interativo',
    text: 'Visualizacao de metricas de vendas e estoque com graficos comparativos.',
  },
  {
    image: '/cores-products.png',
    title: 'Gerenciamento de Produtos',
    text: 'Cadastro completo com imagem, marca, tipo, preco e data de vencimento.',
  },
  {
    image: '/cores-users.png',
    title: 'Gerenciamento de Usuarios',
    text: 'Sistema de permissoes com diferentes niveis de acesso: Admin, Funcionario e Cliente.',
  },
];

const showcaseDetails = [
  {
    icon: '01',
    title: 'Controle de Estoque',
    text: 'Acompanhamento em tempo real das quantidades disponiveis e alertas de estoque baixo.',
  },
  {
    icon: '02',
    title: 'Gestao de Vendas',
    text: 'Registro completo de vendas com calculo automatico de totais e historico de transacoes.',
  },
  {
    icon: '03',
    title: 'Relatorios Financeiros',
    text: 'Relatorios detalhados de produtos mais vendidos, faturamento total e analise de desempenho.',
  },
  {
    icon: '04',
    title: 'Multi-Usuario',
    text: 'Sistema com diferentes perfis de acesso e preferencias personalizadas por cliente.',
  },
  {
    icon: '05',
    title: 'Importacao/Exportacao',
    text: 'Funcionalidade de importar e exportar dados via CSV e gerar relatorios em PDF.',
  },
  {
    icon: '06',
    title: 'Seguranca',
    text: 'Sistema de autenticacao seguro com senhas criptografadas e controle de sessao.',
  },
];

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Z" />
      <path d="M5 5h6v2H7v10h10v-4h2v6H5V5Z" />
    </svg>
  );
}

function App() {
  const [query, setQuery] = useState('');

  const filteredCertificates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return certificates;
    }

    return certificates.filter((certificate) => {
      const searchable = [
        certificate.title,
        certificate.originalName,
        certificate.type,
      ].join(' ').toLowerCase();

      return searchable.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Navegacao principal">
        <a className="brand" href="#inicio">LZDevs</a>
        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#certificados">Certificados</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Desenvolvedor Full Stack</p>
          <h1>Luiz Otavio Valenzi Sousa</h1>
          <p className="hero-text">
            Desenvolvedor apaixonado por tecnologia, com experiencia em criacao de sites,
            aplicativos, programacao e servicos de informatica.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#certificados">Ver certificados</a>
            <a className="ghost-button" href="https://github.com/lzvsrx" target="_blank" rel="noopener noreferrer">
              GitHub <ExternalIcon />
            </a>
          </div>
          <div className="social-chip-row" aria-label="Links sociais">
            {socialLinks.map((link) => (
              <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-media" aria-label="Foto de perfil e resumo">
          <img src="/profile.jpg" alt="Luiz Otavio Valenzi Sousa" className="profile-photo" />
          <div className="hero-stats">
            <strong>{certificates.length}</strong>
            <span>certificados e diplomas publicados</span>
          </div>
        </div>
      </section>

      <section className="section about-section" id="sobre">
        <div className="section-heading">
          <p className="eyebrow">Sobre Mim</p>
          <h2>Desenvolvimento web, apps e manutencao de computadores</h2>
        </div>
        <p className="about-text">
          Especializado em desenvolvimento web e manutencao de computadores, com atuacao em
          sites profissionais, sistemas personalizados, aplicativos mobile, automacoes e suporte tecnico.
        </p>
      </section>

      <section className="section languages-section" id="habilidades">
        <div className="section-heading">
          <p className="eyebrow">Linguagens de Programacao</p>
          <h2>Tecnologias e niveis do repositorio base</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-item" key={skill.name}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar" aria-hidden="true">
                <div className="skill-progress" style={{ width: `${skill.percentage}%` }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section databases-section">
        <div className="section-heading">
          <p className="eyebrow">Bancos de Dados</p>
          <h2>Persistencia e organizacao de dados</h2>
        </div>
        <div className="databases-grid">
          {databases.map((database) => (
            <article className="database-item" key={database}>
              <span>DB</span>
              <h3>{database}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-section">
        <div className="section-heading">
          <p className="eyebrow">Servicos de Informatica</p>
          <h2>Do codigo ao computador pronto para uso</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="card-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projetos">
        <div className="section-heading">
          <p className="eyebrow">Projetos GitHub</p>
          <h2>Todos os repositorios publicos do perfil</h2>
          <p className="section-support">
            {githubRepositories.length} repositorios carregados do GitHub de Luiz Otavio.
          </p>
        </div>
        <div className="projects-grid project-summary-grid">
          {githubRepositories.map((project) => {
            const updatedAt = new Intl.DateTimeFormat('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            }).format(new Date(project.updatedAt));

            return (
            <article className="project-summary-card" key={project.name}>
              <span className="card-icon">{project.language ?? 'Repo'}</span>
              <h3>{project.name}</h3>
              <p>
                {project.description ?? `Repositorio publico em ${project.language ?? 'desenvolvimento'}.`}
              </p>
              <div className="repo-meta" aria-label={`Metadados do repositorio ${project.name}`}>
                <span>{project.language ?? 'Sem linguagem'}</span>
                <span>Atualizado em {updatedAt}</span>
                <span>{project.stars} estrelas</span>
                <span>{project.forks} forks</span>
                {project.archived ? <span>Arquivado</span> : null}
              </div>
              <div className="repo-actions">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                Ver projeto <ExternalIcon />
                </a>
                {project.homepage ? (
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                    Abrir site <ExternalIcon />
                  </a>
                ) : null}
              </div>
            </article>
            );
          })}
        </div>
        <div className="github-profile-link">
          <a href="https://github.com/lzvsrx" target="_blank" rel="noopener noreferrer" className="profile-link-btn">
            Ver todos os 48 repositorios no GitHub <ExternalIcon />
          </a>
        </div>
      </section>

      <section className="section showcase-section">
        <div className="section-heading">
          <p className="eyebrow">Projeto em Destaque</p>
          <h2>Cores & Fragrancias by Berenice</h2>
        </div>
        <div className="showcase-header">
          <img src="/cores-login.png" alt="Tela de login do Cores & Fragrancias" className="showcase-image" />
          <div className="showcase-info">
            <p className="showcase-subtitle">
              Sistema de Gerenciamento de Estoque para Loja de Cosmeticos
            </p>
            <p className="showcase-description">
              Sistema completo desenvolvido para controle de produtos, vendas, usuarios e relatorios
              financeiros, permitindo uma gestao eficiente e profissional do negocio.
            </p>
            <div className="tag-row">
              {showcaseFeatures.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="showcase-gallery">
          {showcaseGallery.map((item) => (
            <article className="gallery-item" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="showcase-details">
          {showcaseDetails.map((detail) => (
            <article className="detail-card" key={detail.title}>
              <span className="detail-icon">{detail.icon}</span>
              <h3>{detail.title}</h3>
              <p>{detail.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section certificates-section" id="certificados">
        <div className="section-heading">
          <p className="eyebrow">Certificados</p>
          <h2>Formacao, cursos e documentos</h2>
        </div>
        <div className="certificate-toolbar">
          <label htmlFor="certificate-search">Buscar certificado</label>
          <input
            id="certificate-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Digite curso, codigo ou arquivo"
          />
          <span>{filteredCertificates.length} de {certificates.length}</span>
        </div>
        <div className="certificates-grid">
          {filteredCertificates.map((certificate) => (
            <article className="certificate-card" key={certificate.fileName}>
              <div>
                <span className="certificate-type">{certificate.type}</span>
                <h3>{certificate.title}</h3>
                <p>{certificate.originalName}</p>
              </div>
              <a href={certificate.href} target="_blank" rel="noopener noreferrer">
                Abrir certificado <ExternalIcon />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section links-section" id="contato">
        <div className="section-heading">
          <p className="eyebrow">Links</p>
          <h2>Contato e presenca online</h2>
        </div>
        <div className="links-grid">
          {allLinks.map((link) => (
            <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>
              {link.label}
              <ExternalIcon />
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>2026 lzworldstech. Todos os direitos reservados.</p>
        <p>Desenvolvedor Full Stack</p>
      </footer>
    </main>
  );
}

export default App;
