import React from 'react';
import styled from 'styled-components';
import PeanutIcon from './../images/icon-peanuts.svg';
import VeganIcon from './../images/icon-vegan.svg';
import AlcoholIcon from './../images/icon-alcohol.svg';
import NutIcon from './../images/icon-nut.svg';
import VegetarianIcon from './../images/icon-vegetarian.svg';
import SugarIcon from './../images/icon-sugar.svg';

const HealthListHolder = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const HealthListItem = styled.li`
  background-color: #76c25e;
  padding: 5px;
  border-radius: 100%;

  img {
    margin-top: 2px;
  }
`;


const getIcon = (item) => {
  let showItem = '';
  switch (item) {
    case 'Peanut-Free':
      showItem = PeanutIcon;
      break;
    case 'Vegan':
      showItem = VeganIcon;
      break;
    case 'Alcohol-Free':
      showItem = AlcoholIcon;
      break;
    case 'Tree-Nut-Free':
      showItem = NutIcon;
      break;
    case 'Vegetarian':
      showItem = VegetarianIcon;
      break;
    case 'Sugar-Conscious':
      showItem = SugarIcon;
      break;
    default: 
      showItem = VeganIcon;
      break;
  }
  return {__html: `<img src="${showItem}" alt="${item}" width="30" height="30" />`};
}



export const HealthList = ({healthLabels}) => 
  <HealthListHolder>
    {healthLabels.map((item, index) => (
      <HealthListItem key={index} dangerouslySetInnerHTML={getIcon(item)} />
    ))}
  </HealthListHolder>

export default HealthList;