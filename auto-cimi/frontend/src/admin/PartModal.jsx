import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './PartModal.css';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export default function PartModal({ part, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    model: '',
    year: '',
    price: '',
    category: '',
    image: '',
    description: '',
    partNumber: '',
    isNewPart: false,
    isFeatured: false
  });

  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef();

  useEffect(() => {
    if (part) {
      setFormData({
        ...part,
        year: part.year || '',
        price: part.price || '',
      });
      setImagePreview(part.image);
    }
  }, [part]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);

    // Upload
    setUploading(true);
    const token = localStorage.getItem('adminToken');
    const uploadData = new FormData();
    uploadData.append('image', file);

    try {
      const res = await axios.post(`${API_URL}/upload`, uploadData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}` 
        }
      });
      setFormData(prev => ({ ...prev, image: res.data.imageUrl }));
      toast.success('Foto u ngarkua me sukses');
    } catch (err) {
      toast.error('Dështoi ngarkimi i fotos');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.image) {
      return toast.error('Ju lutem ngarkoni një foto');
    }
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content admin-part-modal premium-modal">
        <div className="modal-header">
          <div className="header-title">
            <span className="accent-line"></span>
            <h2>{part ? 'Përditëso Pjesën' : 'Shto Pjesë të Re'}</h2>
          </div>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="premium-form">
          <div className="form-main-layout">
            
            {/* Image Upload Area */}
            <div className="image-upload-section">
              <div 
                className={`image-preview-box ${!imagePreview ? 'empty' : ''}`}
                onClick={() => fileInputRef.current.click()}
              >
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" />
                ) : (
                  <div className="upload-placeholder">
                    <span className="upload-icon">📸</span>
                    <p>Klikoni për të ngarkuar foto</p>
                  </div>
                )}
                {uploading && <div className="upload-overlay">Duke u ngarkuar...</div>}
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept="image/*" 
                style={{ display: 'none' }} 
              />
              <p className="upload-hint">Formatet e lejuara: JPG, PNG. Max 5MB.</p>
            </div>

            {/* Fields Area */}
            <div className="fields-section">
              <div className="form-row">
                <div className="form-group flex-2">
                  <label>Emri i Produktit</label>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Psh. Pasqyrë Peugeot 206" required />
                </div>
                <div className="form-group flex-1">
                  <label>Kodi (Oem)</label>
                  <input name="partNumber" value={formData.partNumber} onChange={handleChange} placeholder="OEM-12345" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Marka</label>
                  <select name="brand" value={formData.brand} onChange={handleChange} required>
                    <option value="">Zgjidh</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Renault">Renault</option>
                    <option value="Citroen">Citroen</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Tjetër">Tjetër</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Modeli</label>
                  <input name="model" value={formData.model} onChange={handleChange} placeholder="Psh. 206, Megane, etj." required />
                </div>
                <div className="form-group">
                  <label>Viti</label>
                  <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="2010" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Kategoria</label>
                  <select name="category" value={formData.category} onChange={handleChange} required>
                    <option value="">Zgjidh Kategori</option>
                    <option value="Motorri">Motorri</option>
                    <option value="Karroceria">Karroceria</option>
                    <option value="Sistemi Elektrik">Sistemi Elektrik</option>
                    <option value="Goma & Parakolp">Goma & Parakolp</option>
                    <option value="Tjetër">Tjetër</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Çmimi (€)</label>
                  <input type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} placeholder="0.00" required />
                </div>
              </div>

              <div className="form-group">
                <label>Përshkrimi i Shkurtër</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows="2" placeholder="Shkruani një përshkrim të shkurtër..."></textarea>
              </div>

              <div className="form-options">
                <label className="premium-checkbox">
                  <input type="checkbox" name="isNewPart" checked={formData.isNewPart} onChange={handleChange} />
                  <span className="checkmark"></span>
                  Pjesë e Re
                </label>
                <label className="premium-checkbox">
                  <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} />
                  <span className="checkmark"></span>
                  E Sugjeruar (Shfaqet në Home)
                </label>
              </div>
            </div>
          </div>

          <div className="modal-actions-premium">
            <button type="button" className="btn-cancel" onClick={onClose}>Anulo</button>
            <button type="submit" className="btn-submit-premium" disabled={uploading}>
              {part ? 'Përditëso Produktin' : 'Shto Produktin'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
