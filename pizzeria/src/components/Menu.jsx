import React, { useState, useRef } from 'react';
import './Menu.css';

import { PIZZAS, SANDWICHES, CALZONES } from '../data';

/* ── Leaf Arrow SVG ── */
const LeafArrow = ({ dir = 'left', color }) => {
  const isLeft = dir === 'left';
  return (
    <svg width="52" height="52" viewBox="0 0 64 64" style={{ overflow: 'visible' }}>
      {isLeft ? (
        <>
          <path d="M32 8 C14 12 6 22 6 32 C6 44 16 56 32 58 C36 50 36 14 32 8 Z"
            style={{ fill: `${color}12`, stroke: color, strokeWidth: 1, transition: 'fill .35s,stroke .35s' }} />
          <line x1="28" y1="20" x2="18" y2="15" style={{ stroke: `${color}60`, strokeWidth: .9, fill: 'none' }} />
          <line x1="26" y1="30" x2="14" y2="28" style={{ stroke: `${color}60`, strokeWidth: .9, fill: 'none' }} />
          <line x1="27" y1="42" x2="17" y2="46" style={{ stroke: `${color}60`, strokeWidth: .9, fill: 'none' }} />
          <polyline points="36,24 26,32 36,40" style={{ stroke: color, strokeWidth: 1.8, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }} />
        </>
      ) : (
        <>
          <path d="M32 8 C50 12 58 22 58 32 C58 44 48 56 32 58 C28 50 28 14 32 8 Z"
            style={{ fill: `${color}12`, stroke: color, strokeWidth: 1, transition: 'fill .35s,stroke .35s' }} />
          <line x1="36" y1="20" x2="46" y2="15" style={{ stroke: `${color}60`, strokeWidth: .9, fill: 'none' }} />
          <line x1="38" y1="30" x2="50" y2="28" style={{ stroke: `${color}60`, strokeWidth: .9, fill: 'none' }} />
          <line x1="37" y1="42" x2="47" y2="46" style={{ stroke: `${color}60`, strokeWidth: .9, fill: 'none' }} />
          <polyline points="28,24 38,32 28,40" style={{ stroke: color, strokeWidth: 1.8, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }} />
        </>
      )}
    </svg>
  );
};

/* ── Section Divider ── */
const Divider = ({ label }) => (
  <div className="mc-divider">
    <div className="mc-divider-line" />
    <span className="mc-divider-label">{label}</span>
    <div className="mc-divider-line" />
  </div>
);

/* ── Pizza Carousel ── */
const PizzaCarousel = ({ onColorChange }) => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const paginate = (dir) => {
    if (animating) return;
    setAnimating(true);
    const next = (index + dir + PIZZAS.length) % PIZZAS.length;
    setIndex(next);
    onColorChange(PIZZAS[next].color);
    setTimeout(() => setAnimating(false), 520);
  };

  const pizza = PIZZAS[index];

  return (
    <div className="mc-pizza-section">
      <div className="mc-display">
        <button className="mc-nav mc-nav--prev" onClick={() => paginate(-1)} aria-label="Mëparshme">
          <LeafArrow dir="left" color={pizza.color} />
        </button>
        <button className="mc-nav mc-nav--next" onClick={() => paginate(1)} aria-label="Tjetra">
          <LeafArrow dir="right" color={pizza.color} />
        </button>
        <div className="mc-stage">
          <div className="mc-ring mc-ring--3" style={{ borderColor: `${pizza.color}20` }} />
          <div className="mc-ring mc-ring--2" style={{ borderColor: `${pizza.color}30` }} />
          <div className="mc-ring mc-ring--1" style={{ borderColor: `${pizza.color}55` }} />
          <div className="mc-pizza" key={index}>
            <img className="mc-pizza-img" src={pizza.image} alt={pizza.name} />
          </div>
        </div>
      </div>

      <div className="mc-info" key={index + '-info'}>
        <h3 className="mc-info-name" style={{ color: pizza.color }}>{pizza.name}</h3>
        <p className="mc-info-desc">{pizza.desc}</p>
        <div className="mc-info-meta">
          <span className="mc-tag" style={{ color: pizza.color }}>{pizza.tag}</span>
          <span className="mc-sep">✦</span>
          <span className="mc-price">{pizza.price} Lek</span>
        </div>
      </div>

      <div className="mc-dots">
        {PIZZAS.map((p, i) => (
          <button
            key={p.id}
            className={`mc-dot${i === index ? ' mc-dot--act' : ''}`}
            style={i === index ? { background: pizza.color } : {}}
            onClick={() => { const dir = i > index ? 1 : -1; setIndex(i); onColorChange(PIZZAS[i].color); }}
            aria-label={p.name}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Horizontal Card Slider (Sandwiches & Calzones) ── */
const CardSlider = ({ items, imgClass = 'sw-img-wrap' }) => {
  const [index, setIndex] = useState(0);

  const paginate = (dir) => {
    setIndex((p) => (p + dir + items.length) % items.length);
  };

  const item = items[index];

  return (
    <div className="sw-section">
      <div className="sw-track-wrap">
        <div className="sw-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((it) => (
            <div className="sw-card" key={it.id}>
              <div className="sw-card-inner">
                <div className={imgClass} style={{ borderColor: `${it.color}22` }}>
                  <img className="sw-img" src={it.image} alt={it.name} loading="lazy" />
                </div>
                <div className="sw-text">
                  <h3 className="sw-name" style={{ color: it.color }}>{it.name}</h3>
                  <p className="sw-desc">{it.desc}</p>
                  <div className="sw-meta">
                    <span className="sw-tag" style={{ color: it.color }}>{it.tag}</span>
                    <span className="mc-sep" style={{ fontSize: '9px' }}>✦</span>
                    <span className="sw-price">{it.price} Lek</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sw-nav-row">
        <button className="sw-btn" onClick={() => paginate(-1)} aria-label="Mëparshme">
          <LeafArrow dir="left" color={item.color} />
        </button>
        <div className="sw-dots">
          {items.map((it, i) => (
            <button
              key={it.id}
              className={`sw-dot${i === index ? ' sw-dot--act' : ''}`}
              style={i === index ? { background: item.color } : {}}
              onClick={() => setIndex(i)}
              aria-label={it.name}
            />
          ))}
        </div>
        <button className="sw-btn" onClick={() => paginate(1)} aria-label="Tjetra">
          <LeafArrow dir="right" color={item.color} />
        </button>
      </div>
    </div>
  );
};

/* ── Main Menu Component ── */
const Menu = () => {
  const [ambientColor, setAmbientColor] = useState(PIZZAS[0].color);

  return (
    <section id="menu" className="mc-section">
      <div className="mc-grain" aria-hidden="true" />
      <div className="mc-ambient" style={{ background: ambientColor }} />

      <div className="mc-container">

        <div className="mc-header">
          <span className="mc-eyebrow">✦ Arte &amp; Tradita ✦</span>
          <h2 className="mc-title">Menuja <em>Jone</em></h2>
        </div>

        <Divider label="Picat" />
        <PizzaCarousel onColorChange={setAmbientColor} />

        <Divider label="Sanduiçet" />
        <CardSlider items={SANDWICHES} />

        <Divider label="Kalçonet" />
        <CardSlider items={CALZONES} imgClass="sw-img-wrap cz-img-wrap" />

      </div>
    </section>
  );
};

export default Menu;