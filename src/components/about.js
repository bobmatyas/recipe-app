import React from 'react';
import styled from 'styled-components';
import SubHeader from './subheader';

const AboutText = styled.div`
  color: #404a3b;
  font-size: 1.8rem;
  line-height: 1.6;
  padding: 5%;
  

  p {
    margin: 0 auto;
    margin-bottom: 50px;
    max-width: 800px;
  }
`;

export const About = () => 

  <div>
    <SubHeader title="About" />

    <AboutText>
      <p>FOOD FIGHT is a vegan recipe search app built using ReactJS. The project came out of my frustration at searching for recipes online – seriously, 12 photos and 500 words before you even get to the ingredients ?!? – and my desire to build on a functioning project using ReactJS.</p>
      <p>For the recipes it uses the Edamam API. The “food trivia” feature is powered by the Spoonacular API.</p> 
    </AboutText>
  </div>

export default About;