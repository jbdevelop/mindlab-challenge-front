import React from 'react';

import { StyledInput } from './styles';

export default function Input({ type, name, defaultValue, refs  }) {
  return (
    <StyledInput 
      type={type} 
      name={name}       
      defaultValue={defaultValue} 
      ref={refs}
    /> 
  )
}