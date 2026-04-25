import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <Logo />
            <p className="footer-desc">
              Partneri juaj i besuar për pjesë këmbimi origjinale të markave Peugeot, Renault, Citroën dhe Hyundai.
              Cilësi dhe korrektësi prej mbi 10 vitesh.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Kompani</h4>
            <div className="footer-links">
              <Link to="/rreth-nesh" className="footer-link">Rreth Nesh</Link>
              <Link to="/kontakt" className="footer-link">Karriera</Link>
              <Link to="/kontakt" className="footer-link">Blog</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Ndihmë</h4>
            <div className="footer-links">
              <Link to="/kontakt" className="footer-link">Kontakt</Link>
              <Link to="/pjeset" className="footer-link">Pyetje të Shpeshta</Link>
              <Link to="/kontakt" className="footer-link">Transporti</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Rrjetet Sociale</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">Instagram</a>
              <a href="#" className="footer-link">Facebook</a>
              <a href="#" className="footer-link">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2024 Auto Cimi. Të gjitha të drejtat e rezervuara.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link to="/kontakt" className="footer-link">Privatësia</Link>
            <Link to="/kontakt" className="footer-link">Kushtet e Përdorimit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}