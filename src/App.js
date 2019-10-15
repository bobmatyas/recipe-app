import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './styles/App.scss';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Random from './components/random';
import Menu from './components/menu';
import About from './components/about';
import 'details-polyfill';

function App() {
  return (
    <Router basename="/">
    <div className="App">

      <Header />

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/random" component={Random} />
        <Route path="/about" component={About} />
        
        <Menu />
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
