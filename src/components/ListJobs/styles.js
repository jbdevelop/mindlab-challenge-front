import styled from 'styled-components'

export const List = styled.ul`  
  padding: 0px;
  list-style: none;
  border: 0px solid black;
`

export const Item = styled.li`
  background: #cfd5ee;
  padding: 20px;
  margin: 20px 5px;  
  border-radius: 8px;
  box-shadow: 0px 0px 15px 5px rgba(200, 200, 200, 0.4);
  transition: opacity 0.4s ease-in-out;
  
  &:hover {    
    opacity: 0.7;
  } 

  div {
    padding: 5px;
  }

  div:nth-child(1) {
    font-size: x-large;
    font-weight: bold;
    color: #333;
  }

  div:nth-child(n + 2) {
    color: #555;   
    font-size: large;
  }
`

export const SubItem = styled.div`
  
`
