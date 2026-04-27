import { useState } from 'react';
import toast from 'react-hot-toast';
import "./ContactPage.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Ju lutemi plotësoni fushat');
      return;
    }
    setSending(true);
    await new Promise(r => setTimeout(r, 1000));
    setSending(false);
    toast.success('Mesazhi u dërgua!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-bg-word">KONTAKT</div>
        <div className="container">
          <div className="contact-hero-inner">
            <div>
              <div className="contact-eyebrow">
                <span className="contact-eyebrow-line" />
                Komunikimi
              </div>
              <h1 className="contact-title">
                Le të<br /><span>flasim</span>
              </h1>
            </div>
            <div className="contact-hero-right">
              <p className="contact-lead">
                Keni pyetje rreth një pjese specifike apo kërkoni një ofertë?
                Na shkruani ose na vizitoni në depon tonë.
              </p>
              <div className="contact-hero-rule" />
            </div>
          </div>
        </div>
        <div className="contact-hero-line" />
      </section>

      {/* Info strip */}
      <div className="contact-info-strip">
        <div className="contact-info-block">
          <span className="contact-info-sep" />
          <span className="contact-info-label">Vendndodhja</span>
          <p className="contact-info-value">Rruga e Durrësit, km 7<br />Tiranë, Shqipëri</p>
        </div>
        <div className="contact-info-block">
          <span className="contact-info-sep" />
          <span className="contact-info-label">Email Zyrtar</span>
          <p className="contact-info-value">info@autocimi.al</p>
        </div>
        <div className="contact-info-block">
          <span className="contact-info-label">Linja e Kontaktit</span>
          <p className="contact-info-value">+355 69 123 4567</p>
        </div>
      </div>

      {/* Form section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-grid">

            <div>
              <div className="contact-eyebrow">
                <span className="contact-eyebrow-line" />
                Formulari
              </div>
              <h2 className="contact-subtitle">
                Dërgoni<br /><span>mesazhin</span> tuaj
              </h2>
              <p className="contact-body-text">
                Plotësoni formularin dhe ekipi ynë do t'ju kthejë përgjigje
                sa më shpejt të jetë e mundur. Të gjitha kërkesat trajtohen
                brenda 24 orëve të punës.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form-card">
              <div className="contact-form-corner-tl" />
              <div className="contact-form-corner-br" />

              <div className="cf-group">
                <label className="cf-label">Emri</label>
                <input
                  className="cf-input"
                  value={form.name}
                  placeholder="p.sh. Artan Hoxha"
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="cf-group">
                <label className="cf-label">Email</label>
                <input
                  className="cf-input"
                  type="email"
                  value={form.email}
                  placeholder="email@juaj.al"
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="cf-group">
                <label className="cf-label">Mesazhi</label>
                <textarea
                  className="cf-input cf-textarea"
                  value={form.message}
                  placeholder="Shkruani mesazhin tuaj këtu..."
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button className="cf-submit" disabled={sending}>
                {sending ? (
                  <><span className="cf-spinner" /> Duke dërguar...</>
                ) : (
                  <>
                    Dërgo Mesazhin
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>
            </form>

          </div>
        </div>
      </section>

    </div>
  );
}