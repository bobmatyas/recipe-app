import React from 'react';
import {Link} from 'react-router-dom';

export const MealType = (props) => 
    
    <div className={props.styleName}>
      <h2><Link to={props.mealType.toLowerCase()}>{props.mealType}</Link></h2>
    </div>

export default MealType;