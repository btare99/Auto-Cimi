import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { createOrder } from '../api';
import toast from 'react-hot-toast';
import './CheckoutPage.css';

const initialForm = {
  name: '', email: '', phone: '', address: '', city: '', notes: '',
};

export default function CheckoutPage() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [orderResult, setOrderResult] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Fushë e detyrueshme';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email i pavlefshëm';
    if (!form.phone.trim()) e.phone = 'Fushë e detyrueshme';
    if (!form.address.trim()) e.address = 'Fushë e detyrueshme';
    if (!form.city.trim()) e.city = 'Fushë e detyrueshme';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      toast.error('Ju lutemi plotësoni fushat e detyrueshme');
      return;
    }

    setSubmitting(true);
    try {
      const mappedItems = cartItems.map(item => ({
        partId: item._id,
        name: item.name,
        brand: item.brand,
        model: item.model,
        partNumber: item.partNumber,
        price: item.price,
        quantity: item.qty // Konvertohet ketu per Backend-in
      }));

      const orderData = { customer: form, items: mappedItems, totalAmount: totalPrice };
      const res = await createOrder(orderData);
      setOrderResult(res.data);
      clearCart();
      toast.success('Porosia u dërgua!');
    } catch (err) {
      toast.error('Gabim gjatë dërgimit.');
    } finally {
      setSubmitting(false);
    }
  };

  if (orderResult) {
    return (
      <div className="checkout-page">
        <div className="container animate-fadeIn" style={{ textAlign: 'center', maxWidth: 600 }}>
          <div style={{ fontSize: 48, marginBottom: 24 }}>✓</div>
          <h1 className="section-title">Faleminderit <span>për porosinë</span></h1>
          <p style={{ color: 'var(--text-2)', marginBottom: 32 }}>
            Porosia juaj #{orderResult.orderNumber} është pranuar. Do t'ju kontaktojmë së shpejti.
          </p>
          <Link to="/" className="btn btn-primary">Kthehu në Fillim</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-tag">Pagesa</span>
            <h1 className="section-title">Përfundo <span>Porosinë</span></h1>
          </div>
        </div>

        <div className="checkout-grid">
          <form onSubmit={handleSubmit}>
            <div className="checkout-section">
              <h3 className="checkout-title">Të Dhënat e Kontaktit</h3>
              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Emri Plote</label>
                  <input 
                    name="name" 
                    className={`input ${errors.name ? 'error' : ''}`} 
                    value={form.name} 
                    onChange={handleChange} 
                    placeholder="p.sh. Artan Hoxha"
                  />
                  {errors.name && <span style={{ color: 'var(--red)', fontSize: 12 }}>{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input 
                    name="email" 
                    type="email" 
                    className={`input ${errors.email ? 'error' : ''}`} 
                    value={form.email} 
                    onChange={handleChange} 
                    placeholder="email@juaj.al"
                  />
                  {errors.email && <span style={{ color: 'var(--red)', fontSize: 12 }}>{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Telefon</label>
                  <input 
                    name="phone" 
                    className={`input ${errors.phone ? 'error' : ''}`} 
                    value={form.phone} 
                    onChange={handleChange} 
                    placeholder="+355 6x xxx xxxx"
                  />
                  {errors.phone && <span style={{ color: 'var(--red)', fontSize: 12 }}>{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Qyteti</label>
                  <input 
                    name="city" 
                    className={`input ${errors.city ? 'error' : ''}`} 
                    value={form.city} 
                    onChange={handleChange} 
                    placeholder="Tiranë, Durrës, etj."
                  />
                  {errors.city && <span style={{ color: 'var(--red)', fontSize: 12 }}>{errors.city}</span>}
                </div>
              </div>
              <div className="form-group" style={{ marginTop: 24 }}>
                <label className="form-label">Adresa</label>
                <input 
                  name="address" 
                  className={`input ${errors.address ? 'error' : ''}`} 
                  value={form.address} 
                  onChange={handleChange} 
                  placeholder="Rruga, Blloku, Nr. Apartamentit"
                />
                {errors.address && <span style={{ color: 'var(--red)', fontSize: 12 }}>{errors.address}</span>}
              </div>
            </div>

            <div className="checkout-section">
              <h3 className="checkout-title">Shënime (Opsionale)</h3>
              <textarea 
                name="notes" 
                className="input" 
                style={{ minHeight: 100 }} 
                value={form.notes} 
                onChange={handleChange}
                placeholder="Çdo informacion shtesë për dërgesën..."
              ></textarea>
            </div>
          </form>

          <aside className="summary-card">
            <h3 className="checkout-title" style={{ marginBottom: 24 }}>Rezymeja</h3>
            <div style={{ marginBottom: 24 }}>
              {cartItems.map(item => (
                <div key={item._id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 12 }}>
                  <span style={{ color: 'var(--text-2)' }}>{item.name} x{item.qty}</span>
                  <span style={{ fontWeight: 500 }}>{(item.price * item.qty).toFixed(2)} €</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24 }}>
              <div className="cart-total-row" style={{ marginBottom: 32 }}>
                <span>Totali</span>
                <span>{totalPrice.toFixed(2)} €</span>
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleSubmit} disabled={submitting}>
                {submitting ? 'Duke dërguar...' : 'Konfirmo Porosinë'}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}