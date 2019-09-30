import React from 'react';
import {Link} from 'react-router-dom';
import RandomDisplay from './random-display';

export const Home = () => 

  <div>
    <h2>Home</h2>
    
    <Link to="/breakfast">breakfast test</Link>

    

        <h2>Recipes to Try</h2>
        <RandomDisplay />

    </div>

export default Home;