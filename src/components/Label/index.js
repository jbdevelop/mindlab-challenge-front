import React from 'react'

import { StyledLabel } from './styles'

export default function Title({ children }) {

  return (
    <>
      <StyledLabel>{children}</StyledLabel>      
    </>
  )
}