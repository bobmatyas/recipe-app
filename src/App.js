import React from 'react';
import './styles/App.scss';
import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';
import { MealType } from './components/meal-type';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">

      <Header />

      <main>

        <Search />

        <MealType 
          styleName="breakfast" 
          mealType="breakfast"
        />

        <MealType 
          styleName="lunch" 
          mealType="lunch"
        />

        <MealType 
          styleName="dinner" 
          mealType="dinner"
        />

        <MealType 
          styleName="snack" 
          mealType="snack"
        />

        <Menu />

      </main>
      <Footer />
    </div>
  );
}

export default App;
