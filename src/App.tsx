import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <img src="/profile.jpg" alt="Luiz Otavio Valenzi Sousa" className="profile-photo" />
          <h1 className="name">Luiz Otavio Valenzi Sousa</h1>
          <p className="title">Desenvolvedor Full Stack</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/luiz-otavio-valenzi-sousa-1180bb360/" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/luiz.otaviovs/" target="_blank" rel="noopener noreferrer" className="social-link instagram" aria-label="Instagram">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://github.com/lzvsrx" target="_blank" rel="noopener noreferrer" className="social-link github-profile" aria-label="GitHub Profile">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://github.com/lzvsrx/lzworldstech-dev" target="_blank" rel="noopener noreferrer" className="social-link github-repo" aria-label="GitHub Repository">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Sobre Mim</h2>
          <p>
            Desenvolvedor apaixonado por tecnologia, com experiência em criação de sites, 
            aplicativos, programação e serviços de informática. Especializado em desenvolvimento 
            web e manutenção de computadores.
          </p>
        </div>
      </section>

      {/* Programming Languages Section */}
      <section className="languages-section">
        <div className="container">
          <h2>Linguagens de Programação</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">HTML</span>
                <span className="skill-percentage">95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">CSS</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">JavaScript</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">PHP</span>
                <span className="skill-percentage">80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Python</span>
                <span className="skill-percentage">75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">React.js</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Node.js</span>
                <span className="skill-percentage">80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">TypeScript</span>
                <span className="skill-percentage">70%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">React Native</span>
                <span className="skill-percentage">80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Flutter</span>
                <span className="skill-percentage">75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Swift</span>
                <span className="skill-percentage">65%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '65%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Kotlin</span>
                <span className="skill-percentage">70%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Databases Section */}
      <section className="databases-section">
        <div className="container">
          <h2>Bancos de Dados</h2>
          <div className="databases-grid">
            <div className="database-item">
              <div className="database-icon">🗄️</div>
              <h3>MySQL</h3>
            </div>
            <div className="database-item">
              <div className="database-icon">🗄️</div>
              <h3>PostgreSQL</h3>
            </div>
            <div className="database-item">
              <div className="database-icon">🗄️</div>
              <h3>MongoDB</h3>
            </div>
            <div className="database-item">
              <div className="database-icon">🗄️</div>
              <h3>SQLite</h3>
            </div>
            <div className="database-item">
              <div className="database-icon">🗄️</div>
              <h3>Firebase</h3>
            </div>
            <div className="database-item">
              <div className="database-icon">🗄️</div>
              <h3>MariaDB</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Serviços de Informática</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Formatação</h3>
              <p>Formatação completa de computadores com reinstalação do sistema operacional e configuração.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Instalação de Peças</h3>
              <p>Instalação e upgrade de componentes de hardware: memória RAM, HD, SSD, placas de vídeo e mais.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Manutenção</h3>
              <p>Manutenção preventiva e corretiva de computadores, limpeza, otimização e reparos.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Programação</h3>
              <p>Desenvolvimento de software personalizado, automação de processos e soluções sob medida.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Criação de Sites</h3>
              <p>Desenvolvimento de sites profissionais, responsivos e otimizados para SEO.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Criação de Apps</h3>
              <p>Desenvolvimento de aplicativos mobile e web apps com tecnologias modernas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Projects Section */}
      <section className="projects-section">
        <div className="container">
          <h2>Projetos GitHub</h2>
          <div className="projects-grid">
            <div className="project-card-item">
              <div className="project-icon">📦</div>
              <h3>lzworldstech-dev</h3>
              <p>Repositório principal com projetos e contribuições</p>
              <a href="https://github.com/lzvsrx/lzworldstech-dev" target="_blank" rel="noopener noreferrer" className="project-link">
                Ver Projeto →
              </a>
            </div>

            <div className="project-card-item">
              <div className="project-icon">🛍️</div>
              <h3>Cores & Fragrâncias</h3>
              <p>Sistema de gerenciamento de estoque para loja de cosméticos</p>
              <a href="https://github.com/lzvsrx" target="_blank" rel="noopener noreferrer" className="project-link">
                Ver Projeto →
              </a>
            </div>

            <div className="project-card-item">
              <div className="project-icon">🌐</div>
              <h3>Portfolio Projects</h3>
              <p>Coleção de projetos de desenvolvimento web e mobile</p>
              <a href="https://github.com/lzvsrx?tab=repositories" target="_blank" rel="noopener noreferrer" className="project-link">
                Ver Todos →
              </a>
            </div>

            <div className="project-card-item">
              <div className="project-icon">💻</div>
              <h3>Full Stack Applications</h3>
              <p>Aplicações completas com frontend e backend</p>
              <a href="https://github.com/lzvsrx?tab=repositories" target="_blank" rel="noopener noreferrer" className="project-link">
                Ver Todos →
              </a>
            </div>

            <div className="project-card-item">
              <div className="project-icon">📱</div>
              <h3>Mobile Apps</h3>
              <p>Aplicativos mobile desenvolvidos com React Native e Flutter</p>
              <a href="https://github.com/lzvsrx?tab=repositories" target="_blank" rel="noopener noreferrer" className="project-link">
                Ver Todos →
              </a>
            </div>

            <div className="project-card-item">
              <div className="project-icon">⚙️</div>
              <h3>Backend & APIs</h3>
              <p>Serviços backend, APIs REST e microsserviços</p>
              <a href="https://github.com/lzvsrx?tab=repositories" target="_blank" rel="noopener noreferrer" className="project-link">
                Ver Todos →
              </a>
            </div>
          </div>
          <div className="github-profile-link">
            <a href="https://github.com/lzvsrx" target="_blank" rel="noopener noreferrer" className="profile-link-btn">
              <svg className="github-icon-large" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              Ver todos os 48 repositórios no GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Cores & Fragrâncias Project Showcase */}
      <section className="showcase-section">
        <div className="container">
          <h2>Projeto em Destaque</h2>
          <div className="showcase-content">
            <div className="showcase-header">
              <img src="/cores-login.png" alt="Cores & Fragrâncias Login" className="showcase-image" />
              <div className="showcase-info">
                <h3>Cores & Fragrâncias by Berenice</h3>
                <p className="showcase-subtitle">Sistema de Gerenciamento de Estoque para Loja de Cosméticos</p>
                <p className="showcase-description">
                  Sistema completo de gerenciamento de estoque desenvolvido para a loja de cosméticos "Cores & Fragrâncias by Berenice". 
                  A plataforma oferece controle total sobre produtos, vendas, usuários e relatórios financeiros, 
                  permitindo uma gestão eficiente e profissional do negócio.
                </p>
                <div className="showcase-features">
                  <div className="feature-tag">PHP</div>
                  <div className="feature-tag">MySQL</div>
                  <div className="feature-tag">JavaScript</div>
                  <div className="feature-tag">Bootstrap</div>
                  <div className="feature-tag">Dashboard</div>
                  <div className="feature-tag">Relatórios</div>
                </div>
              </div>
            </div>

            <div className="showcase-gallery">
              <div className="gallery-item">
                <img src="/cores-dashboard.png" alt="Dashboard" className="gallery-image" />
                <div className="gallery-caption">
                  <h4>Dashboard Interativo</h4>
                  <p>Visualização de métricas de vendas e estoque com gráficos comparativos</p>
                </div>
              </div>

              <div className="gallery-item">
                <img src="/cores-products.png" alt="Gerenciamento de Produtos" className="gallery-image" />
                <div className="gallery-caption">
                  <h4>Gerenciamento de Produtos</h4>
                  <p>Cadastro completo com imagem, marca, tipo, preço e data de vencimento</p>
                </div>
              </div>

              <div className="gallery-item">
                <img src="/cores-users.png" alt="Gerenciamento de Usuários" className="gallery-image" />
                <div className="gallery-caption">
                  <h4>Gerenciamento de Usuários</h4>
                  <p>Sistema de permissões com diferentes níveis de acesso (Admin, Funcionário, Cliente)</p>
                </div>
              </div>
            </div>

            <div className="showcase-details">
              <div className="detail-card">
                <div className="detail-icon">📊</div>
                <h4>Controle de Estoque</h4>
                <p>Acompanhamento em tempo real das quantidades disponíveis e alertas de estoque baixo</p>
              </div>

              <div className="detail-card">
                <div className="detail-icon">💰</div>
                <h4>Gestão de Vendas</h4>
                <p>Registro completo de vendas com cálculo automático de totais e histórico de transações</p>
              </div>

              <div className="detail-card">
                <div className="detail-icon">📈</div>
                <h4>Relatórios Financeiros</h4>
                <p>Relatórios detalhados de produtos mais vendidos, faturamento total e análise de desempenho</p>
              </div>

              <div className="detail-card">
                <div className="detail-icon">👥</div>
                <h4>Multi-Usuário</h4>
                <p>Sistema com diferentes perfis de acesso e preferências personalizadas por cliente</p>
              </div>

              <div className="detail-card">
                <div className="detail-icon">📦</div>
                <h4>Importação/Exportação</h4>
                <p>Funcionalidade de importar e exportar dados via CSV e gerar relatórios em PDF</p>
              </div>

              <div className="detail-card">
                <div className="detail-icon">🔐</div>
                <h4>Segurança</h4>
                <p>Sistema de autenticação seguro com senhas criptografadas e controle de sessão</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 lzworldstech. Todos os direitos reservados.</p>
          <p>Desenvolvedor Full Stack</p>
        </div>
      </footer>
    </div>
  );
}

export default App;