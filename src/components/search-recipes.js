import React, { Component } from 'react';
import Button from './button';
import styled from 'styled-components';

const SearchContainer = styled.div`
  background-color: #a3af9e;
  padding: 25px;
  text-align: center;
`;

const Input = styled.input`
  font-size: 16px;
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
          <form className="search-form" onSubmit={this.handleSubmit}>
            <Input 
              type="search"
              onChange={this.onSearchChange}
              name="search"
              ref={(input) => this.query = input}
              placeholder="Search..." 
            />
              
            <Button type="submit" id="submit" text="Go" />
          
          </form>
        </SearchContainer>
      );
    }
}

export default SearchRecipes;