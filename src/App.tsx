import React, { useMemo, useState } from 'react';
import {
  Award,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  Camera,
  Code2,
  Cpu,
  Database,
  DollarSign,
  ExternalLink,
  FileText,
  FolderGit2,
  Gamepad2,
  GitFork,
  Globe,
  HardDrive,
  Layers3,
  Lock,
  LockKeyhole,
  MessageCircle,
  MonitorCog,
  Package,
  Phone,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Star,
  Target,
  Trophy,
  TrendingUp,
  Upload,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import './App.css';
import { certificates } from './certificates';
import { githubRepositories } from './repositories';

type IconComponent = LucideIcon;

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luiz-otavio-valenzi-sousa-1180bb360/', Icon: BriefcaseBusiness },
  { label: 'Instagram', href: 'https://www.instagram.com/luizotaviovs/', Icon: Camera },
  { label: 'Instagram LZ World Games', href: 'https://www.instagram.com/lzworldgames/', Icon: Gamepad2 },
  { label: 'WhatsApp', href: 'https://wa.me/5535999215995', Icon: MessageCircle },
  { label: 'Telefone', href: 'tel:+5535999215995', Icon: Phone },
  { label: 'GitHub', href: 'https://github.com/lzvsrx', Icon: FolderGit2 },
  { label: 'Repositorio', href: 'https://github.com/lzvsrx/lzworldstech-dev', Icon: FolderGit2 },
];

const allLinks = [
  ...socialLinks,
  { label: 'Repo original', href: 'https://github.com/lzvsrx/luizotaviodevs', Icon: BookOpen },
  { label: 'Todos os repositorios', href: 'https://github.com/lzvsrx?tab=repositories', Icon: Boxes },
];

const skills = [
  { name: 'HTML', percentage: 95, Icon: Globe },
  { name: 'CSS', percentage: 90, Icon: Layers3 },
  { name: 'JavaScript', percentage: 85, Icon: Code2 },
  { name: 'PHP', percentage: 80, Icon: Server },
  { name: 'Python', percentage: 75, Icon: Cpu },
  { name: 'React.js', percentage: 85, Icon: Code2 },
  { name: 'Node.js', percentage: 80, Icon: Server },
  { name: 'TypeScript', percentage: 70, Icon: Code2 },
  { name: 'React Native', percentage: 80, Icon: Smartphone },
  { name: 'Flutter', percentage: 75, Icon: Smartphone },
  { name: 'Swift', percentage: 65, Icon: Smartphone },
  { name: 'Kotlin', percentage: 70, Icon: Smartphone },
];

const databases = ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase', 'MariaDB'];

const services = [
  {
    Icon: MonitorCog,
    title: 'Formatacao',
    text: 'Formatacao completa de computadores com reinstalacao do sistema operacional e configuracao.',
  },
  {
    Icon: HardDrive,
    title: 'Instalacao de Pecas',
    text: 'Instalacao e upgrade de memoria RAM, HD, SSD, placas de video e outros componentes.',
  },
  {
    Icon: Wrench,
    title: 'Manutencao',
    text: 'Manutencao preventiva e corretiva, limpeza, otimizacao, configuracao e reparos.',
  },
  {
    Icon: Code2,
    title: 'Programacao',
    text: 'Desenvolvimento de software personalizado, automacao de processos e solucoes sob medida.',
  },
  {
    Icon: Globe,
    title: 'Criacao de Sites',
    text: 'Sites profissionais, responsivos e otimizados para apresentar marcas, servicos e projetos.',
  },
  {
    Icon: Smartphone,
    title: 'Criacao de Apps',
    text: 'Aplicativos mobile e web apps com tecnologias modernas e experiencia objetiva para o usuario.',
  },
];

const showcaseFeatures = [
  { label: 'PHP', Icon: Server },
  { label: 'MySQL', Icon: Database },
  { label: 'JavaScript', Icon: Code2 },
  { label: 'Bootstrap', Icon: Layers3 },
  { label: 'Dashboard', Icon: BarChart3 },
  { label: 'Relatorios', Icon: FileText },
];

const showcaseGallery = [
  {
    image: '/cores-dashboard.png',
    title: 'Dashboard Interativo',
    text: 'Visualizacao de metricas de vendas e estoque com graficos comparativos.',
    Icon: BarChart3,
  },
  {
    image: '/cores-products.png',
    title: 'Gerenciamento de Produtos',
    text: 'Cadastro completo com imagem, marca, tipo, preco e data de vencimento.',
    Icon: Package,
  },
  {
    image: '/cores-users.png',
    title: 'Gerenciamento de Usuarios',
    text: 'Sistema de permissoes com diferentes niveis de acesso: Admin, Funcionario e Cliente.',
    Icon: Users,
  },
];

const showcaseDetails = [
  {
    Icon: Boxes,
    title: 'Controle de Estoque',
    text: 'Acompanhamento em tempo real das quantidades disponiveis e alertas de estoque baixo.',
  },
  {
    Icon: DollarSign,
    title: 'Gestao de Vendas',
    text: 'Registro completo de vendas com calculo automatico de totais e historico de transacoes.',
  },
  {
    Icon: BarChart3,
    title: 'Relatorios Financeiros',
    text: 'Relatorios detalhados de produtos mais vendidos, faturamento total e analise de desempenho.',
  },
  {
    Icon: Users,
    title: 'Multi-Usuario',
    text: 'Sistema com diferentes perfis de acesso e preferencias personalizadas por cliente.',
  },
  {
    Icon: Upload,
    title: 'Importacao/Exportacao',
    text: 'Funcionalidade de importar e exportar dados via CSV e gerar relatorios em PDF.',
  },
  {
    Icon: ShieldCheck,
    title: 'Seguranca',
    text: 'Sistema de autenticacao seguro com senhas criptografadas e controle de sessao.',
  },
];

const featuredProjectNames = [
  'lzdev',
  'lojacoresefragranciasbyberenice',
  'jogosunity',
  'Crystal-assistant',
];

const projectCaseStudies = [
  {
    Icon: Trophy,
    title: 'Portfolio lzvsrxdevs',
    repoName: 'lzdev',
    problem: 'Reunir certificados, contatos e repositorios em uma experiencia unica e facil de avaliar.',
    solution: 'Interface em React com busca de certificados, lista completa do GitHub e links de contato diretos.',
    impact: 'Mostra presenca profissional, organizacao tecnica e velocidade para publicar melhorias.',
  },
  {
    Icon: BarChart3,
    title: 'Cores & Fragrancias by Berenice',
    repoName: 'lojacoresefragranciasbyberenice',
    problem: 'Controlar produtos, vendas, usuarios, estoque e relatorios sem depender de planilhas soltas.',
    solution: 'Sistema com dashboard, cadastros, perfis de acesso, exportacao e relatorios financeiros.',
    impact: 'Transforma uma rotina operacional em um fluxo rastreavel e mais profissional.',
  },
  {
    Icon: Gamepad2,
    title: 'Projetos de jogos e Unity',
    repoName: 'jogosunity',
    problem: 'Demonstrar logica, interatividade, fisica, cenas e experiencia em desenvolvimento de jogos.',
    solution: 'Projetos com Unity, C#, mecanicas, audio, cena 3D e polimento visual.',
    impact: 'Complementa o perfil full stack com raciocinio de produto, gameplay e sistemas interativos.',
  },
];

const workflowSteps = [
  {
    Icon: Search,
    title: 'Diagnostico',
    text: 'Entendo o objetivo, publico, conteudo e restricoes antes de escrever codigo.',
  },
  {
    Icon: Target,
    title: 'Planejamento',
    text: 'Transformo a necessidade em telas, dados, prioridades e um caminho de entrega claro.',
  },
  {
    Icon: Code2,
    title: 'Desenvolvimento',
    text: 'Construo com componentes, responsividade, acessibilidade, versionamento e boas praticas.',
  },
  {
    Icon: CheckCircle2,
    title: 'Validacao',
    text: 'Testo build, navegacao, seguranca, links e comportamento antes de publicar.',
  },
];

const visibilityOptions = [
  { value: 'all', label: 'Todos' },
  { value: 'public', label: 'Publicos' },
  { value: 'private', label: 'Privados' },
] as const;

type VisibilityFilter = (typeof visibilityOptions)[number]['value'];

function ExternalIcon() {
  return <ExternalLink aria-hidden="true" className="icon" />;
}

function IconBadge({ Icon }: { Icon: IconComponent }) {
  return (
    <span className="card-icon" aria-hidden="true">
      <Icon />
    </span>
  );
}

function App() {
  const [query, setQuery] = useState('');
  const [projectQuery, setProjectQuery] = useState('');
  const [visibilityFilter, setVisibilityFilter] = useState<VisibilityFilter>('all');

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

  const portfolioStats = useMemo(() => {
    const publicRepositories = githubRepositories.filter((project) => !project.private).length;
    const privateRepositories = githubRepositories.length - publicRepositories;
    const liveProjects = githubRepositories.filter((project) => Boolean(project.homepage)).length;
    const technologies = new Set(githubRepositories.map((project) => project.language).filter(Boolean));

    return [
      { Icon: FolderGit2, value: githubRepositories.length, label: 'repositorios mapeados' },
      { Icon: Globe, value: liveProjects, label: 'projetos com site publicado' },
      { Icon: LockKeyhole, value: privateRepositories, label: 'repositorios privados listados' },
      { Icon: Code2, value: technologies.size, label: 'tecnologias identificadas' },
    ];
  }, []);

  const featuredProjects = useMemo(() => (
    featuredProjectNames
      .map((name) => githubRepositories.find((project) => project.name === name))
      .filter((project): project is (typeof githubRepositories)[number] => Boolean(project))
  ), []);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = projectQuery.trim().toLowerCase();

    return githubRepositories.filter((project) => {
      const matchesVisibility =
        visibilityFilter === 'all' ||
        (visibilityFilter === 'public' && !project.private) ||
        (visibilityFilter === 'private' && project.private);

      if (!matchesVisibility) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchable = [
        project.name,
        project.description,
        project.language,
        project.homepage,
        project.private ? 'privado' : 'publico',
      ].filter(Boolean).join(' ').toLowerCase();

      return searchable.includes(normalizedQuery);
    });
  }, [projectQuery, visibilityFilter]);

  return (
    <main className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteudo</a>
      <nav className="topbar" aria-label="Navegacao principal">
        <a className="brand" href="#inicio"><Rocket aria-hidden="true" className="inline-icon" /> lzvsrxdevs</a>
        <div className="nav-links">
          <a href="#sobre"><BriefcaseBusiness aria-hidden="true" className="inline-icon" />Sobre</a>
          <a href="#habilidades"><Code2 aria-hidden="true" className="inline-icon" />Habilidades</a>
          <a href="#projetos"><FolderGit2 aria-hidden="true" className="inline-icon" />Projetos</a>
          <a href="#certificados"><Award aria-hidden="true" className="inline-icon" />Certificados</a>
          <a href="#contato"><Globe aria-hidden="true" className="inline-icon" />Contato</a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Desenvolvedor Full Stack</p>
          <h1>lzvsrxdevs</h1>
          <p className="hero-text">
            Desenvolvedor apaixonado por tecnologia, com experiencia em criacao de sites,
            aplicativos, programacao e servicos de informatica.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#certificados"><Award aria-hidden="true" className="inline-icon" />Ver certificados</a>
            <a className="ghost-button" href="https://github.com/lzvsrx" target="_blank" rel="noopener noreferrer">
              <FolderGit2 aria-hidden="true" className="inline-icon" /> GitHub <ExternalIcon />
            </a>
            <a className="ghost-button" href="https://wa.me/5535999215995" target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" className="inline-icon" /> WhatsApp <ExternalIcon />
            </a>
          </div>
          <div className="hero-metrics" aria-label="Resumo do portfolio">
            {portfolioStats.map((stat) => (
              <article className="metric-card" key={stat.label}>
                <stat.Icon aria-hidden="true" className="inline-icon" />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
          <div className="social-chip-row" aria-label="Links sociais">
            {socialLinks.map((link) => {
              const { Icon } = link;

              return (
              <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>
                <Icon aria-hidden="true" className="inline-icon" />
                {link.label}
              </a>
              );
            })}
          </div>
        </div>

        <div className="hero-media" aria-label="Foto de perfil e resumo">
          <img src="/profile.jpg" alt="lzvsrxdevs" className="profile-photo" />
          <div className="hero-stats">
            <Award aria-hidden="true" className="stat-icon" />
            <strong>{certificates.length}</strong>
            <span>certificados e diplomas publicados</span>
          </div>
        </div>
      </section>

      <section className="section about-section" id="sobre">
        <div id="conteudo" className="anchor-target" aria-hidden="true" />
        <div className="section-heading">
          <p className="eyebrow">Sobre Mim</p>
          <h2>Desenvolvimento web, apps e manutencao de computadores</h2>
        </div>
        <p className="about-text">
          Especializado em desenvolvimento web e manutencao de computadores, com atuacao em
          sites profissionais, sistemas personalizados, aplicativos mobile, automacoes e suporte tecnico.
        </p>
        <div className="proof-strip" aria-label="Pontos fortes do portfolio">
          <span><Sparkles aria-hidden="true" className="inline-icon" />Projetos reais e publicados</span>
          <span><ShieldCheck aria-hidden="true" className="inline-icon" />Boas praticas de seguranca</span>
          <span><Award aria-hidden="true" className="inline-icon" />Certificados verificaveis</span>
          <span><TrendingUp aria-hidden="true" className="inline-icon" />Evolucao constante no GitHub</span>
        </div>
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
                <span className="skill-name"><skill.Icon aria-hidden="true" className="inline-icon" />{skill.name}</span>
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
              <IconBadge Icon={Database} />
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
              <IconBadge Icon={service.Icon} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projetos">
        <div className="section-heading">
          <p className="eyebrow">Projetos GitHub</p>
          <h2>Todos os repositorios do perfil</h2>
          <p className="section-support">
            {githubRepositories.length} repositorios carregados do GitHub de Luiz Otavio,
            incluindo publicos e privados.
          </p>
        </div>
        <div className="featured-projects" aria-label="Projetos em destaque">
          {featuredProjects.map((project) => (
            <article className="featured-project-card" key={project.name}>
              <IconBadge Icon={project.private ? LockKeyhole : Trophy} />
              <div>
                <p className="mini-label">Destaque</p>
                <h3>{project.name}</h3>
                <p>{project.description ?? `Projeto em ${project.language ?? 'desenvolvimento'} com foco pratico no portfolio.`}</p>
              </div>
              <div className="repo-actions">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <FolderGit2 aria-hidden="true" className="inline-icon" /> Codigo <ExternalIcon />
                </a>
                {project.homepage ? (
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                    <Globe aria-hidden="true" className="inline-icon" /> Demo <ExternalIcon />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
        <div className="project-toolbar" aria-label="Filtros de repositorios">
          <label htmlFor="project-search"><Search aria-hidden="true" className="inline-icon" />Buscar projeto</label>
          <input
            id="project-search"
            type="search"
            value={projectQuery}
            onChange={(event) => setProjectQuery(event.target.value)}
            placeholder="Nome, tecnologia, status ou link"
          />
          <div className="segmented-control" aria-label="Visibilidade dos repositorios">
            {visibilityOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={visibilityFilter === option.value ? 'active' : ''}
                onClick={() => setVisibilityFilter(option.value)}
                aria-pressed={visibilityFilter === option.value}
              >
                {option.label}
              </button>
            ))}
          </div>
          <span>{filteredProjects.length} de {githubRepositories.length}</span>
        </div>
        <div className="projects-grid project-summary-grid">
          {filteredProjects.map((project) => {
            const updatedAt = new Intl.DateTimeFormat('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            }).format(new Date(project.updatedAt));

            return (
            <article className="project-summary-card" key={project.name}>
              <IconBadge Icon={project.private ? LockKeyhole : FolderGit2} />
              <h3>{project.name}</h3>
              <p>
                {project.description ?? `Repositorio publico em ${project.language ?? 'desenvolvimento'}.`}
              </p>
              <div className="repo-meta" aria-label={`Metadados do repositorio ${project.name}`}>
                <span><Code2 aria-hidden="true" className="inline-icon" />{project.language ?? 'Sem linguagem'}</span>
                <span><CalendarClock aria-hidden="true" className="inline-icon" />Atualizado em {updatedAt}</span>
                <span><Star aria-hidden="true" className="inline-icon" />{project.stars} estrelas</span>
                <span><GitFork aria-hidden="true" className="inline-icon" />{project.forks} forks</span>
                <span>{project.private ? <Lock aria-hidden="true" className="inline-icon" /> : <Globe aria-hidden="true" className="inline-icon" />}{project.private ? 'Privado' : 'Publico'}</span>
                {project.archived ? <span><Package aria-hidden="true" className="inline-icon" />Arquivado</span> : null}
              </div>
              <div className="repo-actions">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                <FolderGit2 aria-hidden="true" className="inline-icon" /> Ver projeto <ExternalIcon />
                </a>
                {project.homepage ? (
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                    <Globe aria-hidden="true" className="inline-icon" /> Abrir site <ExternalIcon />
                  </a>
                ) : null}
              </div>
            </article>
            );
          })}
        </div>
        {filteredProjects.length === 0 ? (
          <p className="empty-state">Nenhum projeto encontrado com esse filtro.</p>
        ) : null}
        <div className="github-profile-link">
          <a href="https://github.com/lzvsrx" target="_blank" rel="noopener noreferrer" className="profile-link-btn">
            <FolderGit2 aria-hidden="true" className="inline-icon" /> Ver todos os repositorios no GitHub <ExternalIcon />
          </a>
        </div>
      </section>

      <section className="section case-study-section">
        <div className="section-heading">
          <p className="eyebrow">Estudos de Caso</p>
          <h2>Projetos explicados pelo problema, solucao e impacto</h2>
        </div>
        <div className="case-study-grid">
          {projectCaseStudies.map((study) => {
            const project = githubRepositories.find((item) => item.name === study.repoName);

            return (
              <article className="case-study-card" key={study.title}>
                <IconBadge Icon={study.Icon} />
                <h3>{study.title}</h3>
                <dl>
                  <div>
                    <dt>Problema</dt>
                    <dd>{study.problem}</dd>
                  </div>
                  <div>
                    <dt>Solucao</dt>
                    <dd>{study.solution}</dd>
                  </div>
                  <div>
                    <dt>Impacto</dt>
                    <dd>{study.impact}</dd>
                  </div>
                </dl>
                {project ? (
                  <div className="repo-actions">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <FolderGit2 aria-hidden="true" className="inline-icon" /> Repositorio <ExternalIcon />
                    </a>
                    {project.homepage ? (
                      <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                        <Globe aria-hidden="true" className="inline-icon" /> Demo <ExternalIcon />
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </article>
            );
          })}
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
                <span key={feature.label}><feature.Icon aria-hidden="true" className="inline-icon" />{feature.label}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="showcase-gallery">
          {showcaseGallery.map((item) => (
            <article className="gallery-item" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3><item.Icon aria-hidden="true" className="inline-icon" />{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="showcase-details">
          {showcaseDetails.map((detail) => (
            <article className="detail-card" key={detail.title}>
              <IconBadge Icon={detail.Icon} />
              <h3>{detail.title}</h3>
              <p>{detail.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section workflow-section">
        <div className="section-heading">
          <p className="eyebrow">Como Trabalho</p>
          <h2>Processo claro para entregar projetos funcionais</h2>
        </div>
        <div className="workflow-grid">
          {workflowSteps.map((step, index) => (
            <article className="workflow-card" key={step.title}>
              <span className="workflow-number">{String(index + 1).padStart(2, '0')}</span>
              <IconBadge Icon={step.Icon} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
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
          <label htmlFor="certificate-search"><Search aria-hidden="true" className="inline-icon" />Buscar certificado</label>
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
                <span className="certificate-type"><BadgeCheck aria-hidden="true" className="inline-icon" />{certificate.type}</span>
                <h3>{certificate.title}</h3>
                <p>{certificate.originalName}</p>
              </div>
              <a href={certificate.href} target="_blank" rel="noopener noreferrer">
                <FileText aria-hidden="true" className="inline-icon" /> Abrir certificado <ExternalIcon />
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
          {allLinks.map((link) => {
            const { Icon } = link;

            return (
            <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>
              <Icon aria-hidden="true" className="inline-icon" />
              {link.label}
              <ExternalIcon />
            </a>
            );
          })}
        </div>
      </section>

      <footer className="footer">
        <p>2026 lzvsrxdevs. Todos os direitos reservados.</p>
        <p>Desenvolvedor Full Stack</p>
      </footer>
    </main>
  );
}

export default App;
