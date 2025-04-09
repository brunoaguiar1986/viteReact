import React from 'react';
import './App.css'; // Certifique-se de ter o arquivo de estilos para personalização

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <h1 className="logo">LUMINANCE</h1>
      </header>

      {/* Main Content */}
      <main>
        <section id="home" className="home-section">
          <h2>Bem-vindo à LUMINANCE!</h2>
          <p>Descubra nossos produtos exclusivos para cuidados com a pele, com a suavidade e frescor do verão!</p>
          <div className="product-gallery">
            {/* Produtos Exemplo */}
            <div className="product-card">
              <img src="https://static.vecteezy.com/ti/fotos-gratis/t2/49088132-fresco-cuidados-com-a-pele-produtos-em-hidratante-superficie-com-flores-gratis-foto.jpeg" alt="Creme Hidratante" />
              <h3>Creme Hidratante</h3>
              <p>R$ 89,90</p>
              <button>Comprar</button>
            </div>
            <div className="product-card">
              <img src="https://images.tcdn.com.br/img/img_prod/1099616/dermattive_protetor_solar_corporal_fps30_solare30_3_1_1f1b3757163aa6a4f60034af78d42cdc.jpg" alt="Protetor Solar" />
              <h3>Protetor Solar</h3>
              <p>R$ 59,90</p>
              <button>Comprar</button>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>Sobre Nós</h2>
          <p>Na LUMINANCE, acreditamos em oferecer produtos de qualidade para cuidar da sua pele com a essência do verão. Nosso compromisso é com a beleza natural, através de fórmulas leves e eficazes, inspiradas na brisa do mar e na luz do sol.</p>
        </section>

        <section id="contact" className="contact-section">
          <h2>Contato</h2>
          <p>Tem alguma dúvida? Fale com a gente! Estamos sempre prontos para ajudar.</p>
          <form>
            <input className="form-input" type="text" placeholder="Nome" />
            <input className="form-input" type="email" placeholder="Email" />
            <textarea className="form-textarea" placeholder="Mensagem"></textarea>
            <button type="submit" className="form-button">Enviar</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 LUMINANCE | Todos os direitos reservados</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
