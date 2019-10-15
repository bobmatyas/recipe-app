import React, { Component } from 'react';
import Button from './button';
import styled from 'styled-components';
import SearchBgImage from './../images/search-bg-01.jpg';
import SearchBgImage2 from './../images/search-bg-02.jpg';
import SearchBgImage3 from './../images/search-bg-03.jpg';
import SearchBgImage4 from './../images/search-bg-04.jpg';

const backgrounds = [SearchBgImage, SearchBgImage2, SearchBgImage3, SearchBgImage4];

const getRandomBackground = (backgrounds) => {
  return backgrounds[Math.floor(Math.random()*backgrounds.length)];
}

const SearchContainer = styled.div`
  align-items: center;
  background-image: url(${getRandomBackground(backgrounds)});
  background-repeat: repeat-x;
  display: flex;
  height: 200px;
  justify-content: center;
`;

const FormHolder = styled.div`
  align-items: center;
  background-color: rgba(0,0,0, 0.25);
  display: flex;
  justify-content: center;
  padding: 25px 0;
  width: 100%;
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
`;

const Input = styled.input`
  border: 1px solid #eee;
  border-radius: 0;
  -webkit-appearance: none; 
  -webkit-border-radius:0;
  -webkit-border-bottom-left-radius: 5px;
  -webkit-border-bottom-right-radius: 0;
  -webkit-border-top-left-radius: 5px;
  -webkit-border-top-right-radius: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 0;   
  -webkit-box-shadow: -3px -6px 12px -1px rgba(0,0,0,0.24);
  -moz-box-shadow: -3px -6px 12px -1px rgba(0,0,0,0.24);
  box-shadow: -3px -6px 12px -1px rgba(0,0,0,0.24);
  color: #666666;
  font-size: 16px;
  height: 40px;
  margin: 0;
  padding: 5px 10px;

  @media (min-width: 550px) {
    width: 475px;
  }

`;

const Label = styled.label`
  display: none;
  font-size: 1.8rem;
  margin: 0 5px;
`;

class SearchRecipes extends Component {

    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({
            searchText: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    }

    render() {
      return(
        <SearchContainer>
          <FormHolder>
          <Form onSubmit={this.handleSubmit}>
            <Label htmlFor="search">Search: </Label>
            <Input 
              type="search"
              onChange={this.onSearchChange}
              name="search"
              ref={(input) => this.query = input}
              placeholder="Search..." 
            />
              
            <Button type="submit" id="submit" text="Go" />
          
          </Form>
          </FormHolder>
        </SearchContainer>
      );
    }
}

export default SearchRecipes;