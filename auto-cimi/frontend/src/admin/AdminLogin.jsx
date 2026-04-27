import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/login', { username, password });
      localStorage.setItem('adminToken', res.data.token);
      toast.success('Mirëseerdhët, Admin!');
      navigate('/admin/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Llogaria ose fjalëkalimi i gabuar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page" style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0e0e0f'
    }}>
      <div className="login-card" style={{
        width: '400px',
        padding: '48px',
        background: '#111213',
        border: '1px solid #1e1e1e'
      }}>
        <h2 style={{
          fontFamily: 'Barlow Condensed',
          fontSize: '32px',
          textAlign: 'center',
          marginBottom: '32px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>Admin Panel</h2>

        <form onSubmit={handleLogin}>
          <div className="form-group" style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#777', marginBottom: '8px' }}>Username</label>
            <input
              type="text"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group" style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#777', marginBottom: '8px' }}>Password</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%' }}
            disabled={loading}
          >
            {loading ? 'Duke u kyçur...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
