import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom"

import ListJobs from '../components/ListJobs' 
import Title from '../components/Title'
import Container from '../components/Container'
import Loading from '../components/Loading'

import Cookies from 'universal-cookie';

export default function Jobs() {
    const cookies = new Cookies()      
    const [data, setData] = useState([])    
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState(cookies.get('passport') ? cookies.get('passport') : null)
    const history = useHistory()
  
    useEffect(() => {      
      if (token){
        const getJobs = async () => {
          const response = await fetch(`${process.env.REACT_APP_API}/v3/jobs`, {
            method:"GET",        
          })      
          const { data } = await response.json()  
          if (data) {
            setLoading(false)
            setData(data)
          }
        }
        getJobs()      
      }      
    }, [])
         
    return (           
      <>       
        { !token ? history.push('/login') :

          loading ? 
          <Loading /> : 
          <Container>
            <Title>Vagas</Title>
            <ListJobs data={data} />      
          </Container>          
        } 
      </>
    )
}