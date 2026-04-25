import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await axios.get('http://localhost:5005/api/orders', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrders(res.data.orders);
      } catch (err) {
        if (err.response?.status === 401) {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
        }
        toast.error('Gabim në marrjen e porosive');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  const updateStatus = async (id, status) => {
    const token = localStorage.getItem('adminToken');
    try {
      await axios.patch(`http://localhost:5005/api/orders/${id}/status`, { status }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrders(orders.map(o => o._id === id ? { ...o, status } : o));
      toast.success('Statusi u përditësua');
    } catch (err) {
      toast.error('Përditësimi dështoi');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) return <div style={{ padding: '100px', textAlign: 'center' }}>Duke ngarkuar...</div>;

  return (
    <div className="admin-dashboard" style={{ padding: '60px 0', background: '#0e0e0f', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontFamily: 'Barlow Condensed', fontSize: '48px', textTransform: 'uppercase' }}>Admin Dashboard</h1>
          <button onClick={handleLogout} className="btn btn-outline" style={{ fontSize: '12px' }}>Shkyçu</button>
        </div>

        <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
          <section className="admin-section" style={{ background: '#111213', border: '1px solid #1e1e1e', padding: '32px' }}>
            <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: '24px', marginBottom: '24px', borderBottom: '1px solid #1e1e1e', paddingBottom: '12px' }}>Porositë e Fundit</h3>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ textAlign: 'left', borderBottom: '1px solid #1e1e1e' }}>
                    <th style={{ padding: '12px', color: '#777', fontSize: '11px', textTransform: 'uppercase' }}>Nr.</th>
                    <th style={{ padding: '12px', color: '#777', fontSize: '11px', textTransform: 'uppercase' }}>Klienti</th>
                    <th style={{ padding: '12px', color: '#777', fontSize: '11px', textTransform: 'uppercase' }}>Totali</th>
                    <th style={{ padding: '12px', color: '#777', fontSize: '11px', textTransform: 'uppercase' }}>Statusi</th>
                    <th style={{ padding: '12px', color: '#777', fontSize: '11px', textTransform: 'uppercase' }}>Veprimi</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order._id} style={{ borderBottom: '1px solid #1a1a1a' }}>
                      <td style={{ padding: '16px 12px', fontWeight: 600 }}>{order.orderNumber}</td>
                      <td style={{ padding: '16px 12px' }}>
                        <div>{order.customer.name}</div>
                        <div style={{ fontSize: '12px', color: '#777' }}>{order.customer.phone}</div>
                      </td>
                      <td style={{ padding: '16px 12px' }}>{order.totalAmount.toFixed(2)} €</td>
                      <td style={{ padding: '16px 12px' }}>
                        <span style={{ 
                          padding: '4px 8px', 
                          fontSize: '10px', 
                          background: order.status === 'Pezull' ? '#c8102e33' : '#2ecc7133',
                          color: order.status === 'Pezull' ? '#c8102e' : '#2ecc71',
                          textTransform: 'uppercase',
                          fontWeight: 700
                        }}>
                          {order.status}
                        </span>
                      </td>
                      <td style={{ padding: '16px 12px' }}>
                        <select 
                          value={order.status} 
                          onChange={(e) => updateStatus(order._id, e.target.value)}
                          style={{ background: '#1a1a1b', color: '#fff', border: '1px solid #333', padding: '4px' }}
                        >
                          <option value="Pezull">Pezull</option>
                          <option value="Konfirmuar">Konfirmuar</option>
                          <option value="Dërguar">Dërguar</option>
                          <option value="Dorëzuar">Dorëzuar</option>
                          <option value="Anuluar">Anuluar</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {orders.length === 0 && <div style={{ padding: '40px', textAlign: 'center', color: '#777' }}>Nuk ka porosi aktualisht.</div>}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
