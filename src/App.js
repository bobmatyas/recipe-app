import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.scss';
import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';
import Home from './components/home';
import Breakfast from './components/breakfast';
import Lunch from './components/lunch';
import Menu from './components/menu';

function App() {
  return (
    
    <div className="App">

      <Header />

      <main>

        <Search />
        <Router>
        <Route exact path="/" component={Home} />
        <Route path="/breakfast" component={Breakfast} />
        <Route path="/lunch" component={Lunch} />
        </Router>
        <Menu />

      </main>
      <Footer />
    </div>
  );
}

export default App;
