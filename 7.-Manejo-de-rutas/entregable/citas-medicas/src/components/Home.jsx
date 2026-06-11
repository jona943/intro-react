import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="brand-badge">
          <span className="plus-icon">+</span>
          <span className="brand-name">Harmony Health</span>
        </div>
        <h1>Innovación y Cuidado en Cada Latido</h1>
        <p className="slogan">Excelencia médica con calidez humana al servicio de tu bienestar.</p>
        
        <div className="hero-actions">
          <Link to="/citas" className="cta-button">
            Gestionar Citas
          </Link>
          <button className="secondary-button">Conocer más</button>
        </div>
      </header>

      <section className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">🛡️</div>
          <h4>Seguridad</h4>
          <p>Tus datos clínicos protegidos con los más altos estándares.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">⚡</div>
          <h4>Agilidad</h4>
          <p>Gestión de turnos rápida y sin complicaciones.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">👩‍⚕️</div>
          <h4>Profesionalismo</h4>
          <p>Los mejores especialistas a tu disposición.</p>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2026 Harmony Health Clinic. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
