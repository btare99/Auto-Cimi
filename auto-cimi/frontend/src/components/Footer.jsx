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
              <a href="https://www.instagram.com/auto_cimi_pjese_franceze/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
              <a href="#" className="footer-link">Facebook</a>
              <a href="https://www.google.com/maps/place/%C3%87imi+Pjes%C3%AB+Franceze/@41.3839652,19.6211153,16z/data=!4m10!1m2!2m1!1sRruga+Marikaj+Vore+Marikaj+AL+1033+Albania!3m6!1s0x1350292c0ca16467:0xbe5e1791116d92e3!8m2!3d41.3839652!4d19.6306408!15sCipScnVnYSBNYXJpa2FqIFZvcmUgTWFyaWthaiBBTCAxMDMzIEFsYmFuaWFaLCIqcnJ1Z2EgbWFyaWthaiB2b3JlIG1hcmlrYWogYWwgMTAzMyBhbGJhbmlhkgEQYXV0b19wYXJ0c19zdG9yZeABAA!16s%2Fg%2F11gt70r10m" target="_blank" rel="noopener noreferrer" className="footer-link">Lokacioni</a>
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