import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color: #3744B5;
  margin: 0;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DevelopedBy = styled.div`        
  color: #ccc;
  font-size: x-small;
`

export const StyledLink = styled(Link)`  
  color: white;
  font-weight: bold;
  font-size: 25px;
  text-decoration: none;    
`

export const StyledLinkDevBy = styled.a`  
  color: #eee;
  font-weight: bold;
  font-size: x-small;
  text-decoration: none;    
`