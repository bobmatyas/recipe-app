import React from 'react';
import './styles/App.scss';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">

      <Header />

      <main>
        <p>Content Area</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
