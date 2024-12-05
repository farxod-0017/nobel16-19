import React from 'react';
import Home from './pages/Home';
import Facts from './pages/Facts';
import Research from './pages/Research';
import Applications from './pages/Applications';


function App() {
  const [page, setPage] = React.useState('Home');

  const renderPage = () => {
    switch (page) {
      case 'Facts': return <Facts />;
      case 'Research': return <Research />;
      case 'Applications': return <Applications />;
      default: return <Home />;
    }
  };

  return (
    <div className="App">
      <header>
        <button style={{background:page === 'Home' ? 'rgb(11, 255, 11)': ''}} onClick={() => setPage('Home')}>Bosh sahifa</button>
        <button style={{background:page === 'Facts' ? 'rgb(11, 255, 11)': ''}} onClick={() => setPage('Facts')}>Faktlar</button>
        <button style={{background:page === 'Research' ? 'rgb(11, 255, 11)': ''}} onClick={() => setPage('Research')}>Tadqiqotlar</button>
        <button style={{background:page === 'Applications' ? 'rgb(11, 255, 11)': ''}} onClick={() => setPage('Applications')}>Loyihalar</button>
      </header>
      <main style={{margin:'36px 0'}}>{renderPage()}</main>
      <footer>
        <p>&copy; 2024 Nobel Mukofotlari - Egamnazarov Farhod</p>
      </footer>
    </div>
  );
}

export default App;