import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Questions } from './components/Questions';
import { Journey } from './components/Journey';
import { Footer } from './components/Footer';
import { LanguageProvider } from './components/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-mk-950 text-slate-200 min-h-screen selection:bg-mk-gold selection:text-mk-950 font-sans">
        <Header />
        <main>
          <Hero />
          <Questions />
          <Journey />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;