import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.scss';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Breakfast from './components/breakfast';
import Random from './components/random';
import Menu from './components/menu';
import About from './components/about';
import 'details-polyfill';

function App() {
  return (
    <Router>
    <div className="App">

      <Header />

      <main>


          <Route exact path="/" component={Home} />
          <Route path="/breakfast" component={Breakfast} />
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
