import React from 'react';
import styled from 'styled-components';


export const Input = (props) => {
  return (
    <input 
      type={props.type}
      onChange={props.onChange}
      name={props.name}
      
      placeholder={props.placeholder}
    />
  );
}

export default Input;