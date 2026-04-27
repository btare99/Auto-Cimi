import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import PartModal from './PartModal';
import './AdminDashboard.css';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Modal states
  const [showPartModal, setShowPartModal] = useState(false);
  const [editingPart, setEditingPart] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    const token = localStorage.getItem('adminToken');
    const headers = { Authorization: `Bearer ${token}` };

    try {
      const [ordRes, resRes, partRes] = await Promise.all([
        axios.get(`${API_URL}/orders`, { headers }),
        axios.get(`${API_URL}/reservations`, { headers }).catch(() => ({ data: [] })),
        axios.get(`${API_URL}/parts?limit=100`, { headers })
      ]);

      setOrders(ordRes.data.orders || []);
      setReservations(resRes.data || []);
      setParts(partRes.data.parts || []);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
      }
      toast.error('Gabim në ngarkimin e të dhënave');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const updateOrderStatus = async (id, status) => {
    const token = localStorage.getItem('adminToken');
    try {
      await axios.patch(`${API_URL}/orders/${id}/status`, { status }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrders(orders.map(o => o._id === id ? { ...o, status } : o));
      toast.success('Statusi u përditësua');
    } catch (err) {
      toast.error('Përditësimi dështoi');
    }
  };

  // Part management
  const handleAddPart = () => {
    setEditingPart(null);
    setShowPartModal(true);
  };

  const handleEditPart = (part) => {
    setEditingPart(part);
    setShowPartModal(true);
  };

  const handleDeletePart = async (id) => {
    if (!window.confirm('A jeni të sigurt që dëshironi të fshini këtë pjesë?')) return;

    const token = localStorage.getItem('adminToken');
    try {
      await axios.delete(`${API_URL}/parts/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setParts(parts.filter(p => p._id !== id));
      toast.success('Pjesa u fshi me sukses');
    } catch (err) {
      toast.error('Fshirja dështoi');
    }
  };

  const handleSavePart = async (formData) => {
    const token = localStorage.getItem('adminToken');
    const headers = { Authorization: `Bearer ${token}` };

    try {
      if (editingPart) {
        const res = await axios.put(`${API_URL}/parts/${editingPart._id}`, formData, { headers });
        setParts(parts.map(p => p._id === editingPart._id ? res.data : p));
        toast.success('Pjesa u përditësua');
      } else {
        const res = await axios.post(`${API_URL}/parts`, formData, { headers });
        setParts([res.data, ...parts]);
        toast.success('Pjesa u shtua me sukses');
      }
      setShowPartModal(false);
    } catch (err) {
      toast.error('Ruajtja dështoi');
    }
  };

  if (loading) return <div className="admin-loading">Duke ngarkuar panelin...</div>;

  return (
    <div className={`admin-layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Mobile Toggle */}
      <button className="mobile-menu-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="admin-brand">
          <h2>AUTO CIMI</h2>
          <span>ADMIN PANEL</span>
        </div>
        <nav className="admin-nav">
          <button 
            className={activeTab === 'orders' ? 'active' : ''} 
            onClick={() => { setActiveTab('orders'); setIsSidebarOpen(false); }}
          >
            📦 Porositë
          </button>
          <button 
            className={activeTab === 'reservations' ? 'active' : ''} 
            onClick={() => { setActiveTab('reservations'); setIsSidebarOpen(false); }}
          >
            📅 Rezervimet
          </button>
          <button 
            className={activeTab === 'inventory' ? 'active' : ''} 
            onClick={() => { setActiveTab('inventory'); setIsSidebarOpen(false); }}
          >
            ⚙️ Inventari
          </button>
        </nav>
        <div className="admin-sidebar-footer">
          <button onClick={handleLogout} className="admin-logout-btn">Shkyçu</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <h1>
            {activeTab === 'orders' && '📦 Menaxhimi i Porosive'}
            {activeTab === 'reservations' && '📅 Rezervimet e Makinave'}
            {activeTab === 'inventory' && '⚙️ Menaxhimi i Inventarit'}
          </h1>
          <button className="refresh-btn" onClick={fetchData}>Rifresko</button>
        </header>

        <div className="admin-content">
          {activeTab === 'orders' && (
            <div className="admin-table-card">
              <table>
                <thead>
                  <tr>
                    <th>Nr.</th>
                    <th>Klienti</th>
                    <th>Artikujt</th>
                    <th>Totali</th>
                    <th>Statusi</th>
                    <th>Veprimi</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order._id}>
                      <td><span className="order-num">{order.orderNumber}</span></td>
                      <td>
                        <div className="cell-main">{order.customer.name}</div>
                        <div className="cell-sub">{order.customer.phone}</div>
                      </td>
                      <td>{order.items?.length || 0} artikuj</td>
                      <td>{order.totalAmount?.toFixed(2)} €</td>
                      <td>
                        <span className={`status-badge ${order.status.toLowerCase()}`}>
                          {order.status}
                        </span>
                      </td>
                      <td>
                        <select 
                          value={order.status} 
                          onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                        >
                          <option value="Pezull">Pezull</option>
                          <option value="Konfirmuar">Konfirmuar</option>
                          <option value="Dërguar">Dërguar</option>
                          <option value="Anuluar">Anuluar</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {orders.length === 0 && <div className="empty-state">Nuk ka porosi aktualisht.</div>}
            </div>
          )}

          {activeTab === 'reservations' && (
            <div className="admin-table-card">
              <table>
                <thead>
                  <tr>
                    <th>Rezervimi</th>
                    <th>Klienti</th>
                    <th>Makina</th>
                    <th>Data Pritjes</th>
                    <th>Krijuar më</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map(res => (
                    <tr key={res._id}>
                      <td><span className="res-num">{res.reservationNumber}</span></td>
                      <td>
                        <div className="cell-main">{res.customer.name}</div>
                        <div className="cell-sub">{res.customer.phone}</div>
                      </td>
                      <td>
                        <div className="cell-main">{res.car.brand} {res.car.model}</div>
                      </td>
                      <td>{res.car.expectedDate}</td>
                      <td>{new Date(res.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {reservations.length === 0 && <div className="empty-state">Nuk ka rezervime për makinat "Coming Soon".</div>}
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="admin-table-card">
              <div className="table-actions">
                <button className="add-btn" onClick={handleAddPart}>+ Shto Pjesë të Re</button>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Foto</th>
                    <th>Emri</th>
                    <th>Kodi</th>
                    <th>Makina</th>
                    <th>Çmimi</th>
                    <th>Veprime</th>
                  </tr>
                </thead>
                <tbody>
                  {parts.map(part => (
                    <tr key={part._id}>
                      <td><img src={part.image} alt="" className="admin-part-thumb" /></td>
                      <td><div className="cell-main">{part.name}</div></td>
                      <td>{part.partNumber}</td>
                      <td>{part.brand} {part.model}</td>
                      <td>{part.price?.toFixed(2)} €</td>
                      <td>
                        <button className="edit-icon-btn" onClick={() => handleEditPart(part)}>✏️</button>
                        <button className="delete-icon-btn" onClick={() => handleDeletePart(part._id)}>🗑️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {parts.length === 0 && <div className="empty-state">Nuk ka pjesë në inventar.</div>}
            </div>
          )}
        </div>
      </main>

      {/* Part Modal */}
      {showPartModal && (
        <PartModal 
          part={editingPart} 
          onClose={() => setShowPartModal(false)} 
          onSave={handleSavePart} 
        />
      )}
    </div>
  );
}
