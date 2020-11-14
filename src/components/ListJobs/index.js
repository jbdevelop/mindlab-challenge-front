import React from 'react'
import { Link } from 'react-router-dom'

import formatDate from '../../utils/formatDate'

import { List, Item } from './styles'

export default function ListJobs({ data, loading }) {    
  return (
    <>
      {
        <List>
          {
            data.map(item =>   
              <Link to={`/jobs/${item._id}`} style={{ textDecoration: 'none'}} key={item._id}>                             
                <Item>
                  {/* <div>{item.description.map(desc => <div>{desc}</div>)}</div> */}
                  <div>{item.title}</div>
                  <div>{item.location.city} - {item.location.state} - {item.location.country}</div>          
                  <div> 
                    <span>
                      { formatDate(item.createdAt) } - 
                      ({item.compensation.currency}) {item.compensation.amount} {item.compensation.recurrency}
                    </span>
                  </div>     
                </Item>                            
              </Link>          
            )} 
        </List>                  
      }
    </>
  )
}