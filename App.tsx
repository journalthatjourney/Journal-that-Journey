import React from 'react';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Challenge from './components/Challenge';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      <main>
  <Hero />
  <ProductGrid />
  <About />
  <Challenge />
  <Contact />
</main>
      <Footer />
    </div>
  );
};

export default App;
