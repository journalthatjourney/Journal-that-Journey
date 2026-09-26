import React from 'react';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Challenge from './components/Challenge';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Journals from './components/Journals';
import ChallengePage from './components/ChallengePages';
import FreeJournal from './components/FreeJournal';
import Certificate from './components/Certificate';

const App: React.FC = () => {
 const isJournalsPage = window.location.pathname === '/journals';
const isChallengePage = window.location.pathname === '/challenge';
const isFreeJournal = window.location.pathname === '/free-journal';
const isCertificatePage = window.location.pathname === '/certificate';

  return (
    <div className="min-h-screen">
      <Navbar />

    <main className={isChallengePage ? 'pt-24' : ''}>
  {isFreeJournal ? (
    <FreeJournal />
  ) : isJournalsPage ? (
    <Journals />
  ) : isChallengePage ? (
    <ChallengePage />
  ) : isCertificatePage ? (
    <Certificate />
  ) : (
    <>
      <Hero />
      <Challenge />
      <ProductGrid />
      <About />
      <Contact />
    </>
  )}
</main>

      <Footer />
    </div>
  );
};

export default App;
