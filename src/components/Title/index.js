import React from 'react'

import { StyledTitle } from './styles'

export default function Title({ children }) {

  return (
    <>
      <StyledTitle>{children}</StyledTitle>      
    </>
  );
}