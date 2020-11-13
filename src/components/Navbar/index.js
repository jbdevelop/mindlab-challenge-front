import React from 'react'

import { Container, DevelopedBy, StyledLink, StyledLinkDevBy } from './styles'
import logoImg from '../../assets/logo-mindlab-1.png'


export default function Navbar() {  
  return (
    <>
      <Container>                
        <DevelopedBy>
          <img src={logoImg} alt="" /> <br />
          Developed by &nbsp;
          <StyledLinkDevBy href="https://github.com/jbdevelop" target="_blank">
            Julio Bernardo
          </StyledLinkDevBy>
        </DevelopedBy>           
        <StyledLink to="/jobs">
          Acessar vagas
        </StyledLink>             
      </Container>
    </>
  )
}