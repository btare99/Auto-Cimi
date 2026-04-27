import { useState } from 'react';
import toast from 'react-hot-toast';
import { createReservation } from '../api';
import './ReservationModal.css';

export default function ReservationModal({ car, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!car) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error('Ju lutemi plotësoni fushat e detyrueshme');
      return;
    }

    setSubmitting(true);
    try {
      const reservationData = {
        customer: form,
        car: {
          carId: car._id,
          brand: car.brand,
          model: car.model,
          expectedDate: car.expectedDate
        }
      };
      await createReservation(reservationData);
      setSuccess(true);
      toast.success('Rezervimi u krye me sukses!');
    } catch (err) {
      toast.error('Gabim gjatë rezervimit. Provoni përsëri.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rm-overlay" onClick={onClose}>
      <div className="rm-content" onClick={(e) => e.stopPropagation()}>
        <button className="rm-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {success ? (
          <div className="rm-success">
            <div className="rm-success-icon">✓</div>
            <h2 className="rm-title">Rezervimi u Pranua!</h2>
            <p className="rm-desc">
              Faleminderit <strong>{form.name}</strong>. Kërkesa juaj për <strong>{car.brand} {car.model}</strong> është dërguar. 
              Do t'ju kontaktojmë së shpejti në <strong>{form.phone}</strong>.
            </p>
            <button className="rm-submit-btn" onClick={onClose}>Mbyll</button>
          </div>
        ) : (
          <div className="rm-form-wrap">
            <div className="rm-header">
              <span className="rm-eyebrow">Rezervim Makine</span>
              <h2 className="rm-title">{car.brand} {car.model}</h2>
              <p className="rm-car-info">Pritet më: {car.expectedDate}</p>
            </div>

            <form onSubmit={handleSubmit} className="rm-form">
              <div className="rm-group">
                <label>Emri i Plotë *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="p.sh. Artan Hoxha"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                />
              </div>
              <div className="rm-grid">
                <div className="rm-group">
                  <label>Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="email@juaj.al"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                  />
                </div>
                <div className="rm-group">
                  <label>Telefon *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+355 6x xxx xxxx"
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="rm-group">
                <label>Shënime Shtesë</label>
                <textarea 
                  placeholder="Keni ndonjë pyetje specifike?"
                  value={form.notes}
                  onChange={e => setForm({...form, notes: e.target.value})}
                />
              </div>

              <button className="rm-submit-btn" disabled={submitting}>
                {submitting ? 'Duke dërguar...' : 'Konfirmo Rezervimin'}
              </button>
            </form>
          </div>
        )}

        <div className="rm-accent-tl" />
        <div className="rm-accent-br" />
      </div>
    </div>
  );
}
