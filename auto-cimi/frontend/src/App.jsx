import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Cart from './components/Cart';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PartsPage from './pages/PartsPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import './index.css';

function AppLayout() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="app-wrapper">
      {!isAdminPage && <Navbar />}
      {!isAdminPage && <Cart />}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pjeset" element={<PartsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/rreth-nesh" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="*" element={
            <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
              <h1 style={{ fontSize: 64, fontWeight: 700, fontFamily: 'Barlow Condensed' }}>404</h1>
              <p style={{ color: 'var(--text-2)', marginBottom: 32 }}>Faqja që kërkoni nuk ekziston.</p>
              <Link to="/" className="btn btn-primary">Kthehu në Fillim</Link>
            </div>
          } />
        </Routes>
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <CartProvider>
          <AppLayout />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3500,
              style: {
                background: '#111213',
                color: '#fff',
                border: '1px solid #1e1e1e',
                borderRadius: '0px',
                fontFamily: 'Barlow, sans-serif',
                fontSize: '13px',
              },
            }}
          />
        </CartProvider>
      </Router>
    </ErrorBoundary>
  );
}
