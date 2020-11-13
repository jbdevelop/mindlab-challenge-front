import React from 'react';

import { StyledTextArea } from './styles';

export default function TextArea({ type, name, refs, defaultValue  }) {
  return (
    <StyledTextArea 
      type={type} 
      name={name}        
      defaultValue={defaultValue} 
      ref={refs}
    /> 
  );
}