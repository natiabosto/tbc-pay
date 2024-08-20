import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Wizard from './components/RegistrationWizard/Wizard';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'wizard'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onWizardClick={() => setCurrentPage('wizard')} />;
      case 'wizard':
        return <Wizard />;
    }
  };

  return (
    <>
      <Header onLogoClick={() => setCurrentPage('home')} />
      {renderPage()}
    </>
  );
}

export default App;
