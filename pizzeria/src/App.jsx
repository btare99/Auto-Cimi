import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="pz-app">
      <Navbar />
      <Hero />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
