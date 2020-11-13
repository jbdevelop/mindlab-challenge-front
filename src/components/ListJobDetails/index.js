import React, { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import Cookies from 'universal-cookie';

import Container from '../Container'
import Title from '../Title'
import Input from '../Input'
import Button from '../Button'
import TextArea from '../TextArea'
import Label from '../Label'
import Separator from '../Separator'
import Loading from '../Loading'

import { RiSave3Fill, RiArrowGoBackFill } from 'react-icons/ri'

export default function ListJobDetails() {
  const cookies = new Cookies()      
  const history = useHistory()
  const { id } = useParams()  
  const [data, setData] = useState([])  
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(cookies.get('passport') ? cookies.get('passport') : null)

  const { register, handleSubmit, errors } = useForm()  
  
  const onSubmit = async (data) => {        
    const description = data.description.split(';')    
    const requirements = data.requirements.split(';')
    data.description = description.map(item => item.trim())
    data.requirements = requirements.map(item => item.trim())

    const bearerToken = `Bearer ${token}`    

    const save = await fetch(`${process.env.REACT_APP_API}/v3/jobs/${id}`, {
      headers: {
        'Authorization': bearerToken,
        'Content-Type': 'application/json'
      },
      method:"PUT",
      body: JSON.stringify(data)    
    })      

    if (save) {
      alert('Vaga alterada com sucesso!')
      history.push('/jobs')      
    }    
  }

  useEffect(() => {        
    if (!token) {
      history.push('/login')
    }

    const getJobDetails = async () => {      
      const response = await fetch(`${process.env.REACT_APP_API}/v3/jobs/${id}`, {
        method:"GET",        
      })                  
      const data = await response.json()  
      if (data) {
        setLoading(false)
        setData(data)
      }      
    }
    getJobDetails() 
  }, []) 

  return (
    <>
      { 
        loading ? 
        <Loading /> : 
        <Container>
        <h4><Link to="/jobs"><RiArrowGoBackFill size={25} /></Link></h4>
        <Title>Detalhe da Vaga</Title>              

        <form onSubmit={handleSubmit(onSubmit)}>                   
            <p>
              <Label>Título: * </Label>
              <br />
              <TextArea                         
                type="text" 
                name="title"               
                defaultValue={data.title}  
                refs={register({ required: true })}  
              />
            </p>

            <p>
              <Label>Descrição: * (Separe por <strong>ponto e vírgula ;</strong> as descrições)</Label>            
              <TextArea
                type="text" 
                name="description"                 
                defaultValue={data.description}  
                refs={register({ required: true })}
              />
            </p>   

            <p>
              <Label>Requisitos: * (Separe por <strong>ponto e vírgula ;</strong> as descrições)</Label>            
              <TextArea
                type="text" 
                name="requirements"                 
                defaultValue={data.requirements}  
                refs={register({ required: true })}
              />
            </p>   

            <p>
              <Label>Educação: *</Label>
              <Input 
                type="text"
                name="education"              
                defaultValue={data.education}
                refs={register({ required: true })}
              />
            </p>

            <p>
              <Label>Companhia:</Label>            
              <Input
                type="text" 
                name="company"               
                defaultValue={data.company}         
                refs={register}              
              />
            </p>

            <p>
              <Label>Cidade: *</Label>            
              <Input                         
                type="text" 
                name="location.city" 
                refs={register({ required: true })}              
                defaultValue={data.location?.city}         
              />
            </p>

            <p>
              <Label>Estado: *</Label>            
              <Input                         
                type="text" 
                name="location.state" 
                refs={register({ required: true })}              
                defaultValue={data.location?.state}         
              />
            </p>

            <p>
              <Label>País: </Label>
              <br />
              <Input                         
                type="text" 
                name="location.country" 
                refs={register}              
                defaultValue={data.location?.country}         
              />
            </p>     
            
            <Separator />

            <p>
              <Label>Moeda: </Label>            
              <Input    
                placeholder="Moeda"                     
                type="text" 
                name="compensation.currency"             
                refs={register}              
                defaultValue={data.compensation?.currency}         
              />     
              <Label>Salário: </Label>            
              <Input          
                placeholder="Valor"               
                type="number"       
                min="1"     
                max="1000000"
                name="compensation.amount" 
                refs={register}              
                defaultValue={data.compensation?.amount}         
              />
              <Label>Período: </Label>            
              <Input       
                placeholder="Período"                   
                type="text" 
                name="compensation.recurrency" 
                refs={register}              
                defaultValue={data.compensation?.recurrency}         
              />  
            </p>             
            
            <br />
            <p>   
              <Label>Negociável?</Label>
              &nbsp;&nbsp;&nbsp;
              <input                   
                type="radio" 
                name="compensation.isVariable" 
                ref={register}              
                defaultValue={true}                              
                defaultChecked={data.compensation?.isVariable ? "checked" : null }                
              /> 
              <Label>&nbsp; Sim &nbsp;&nbsp;</Label>                           
              <input                   
                type="radio" 
                name="compensation.isVariable" 
                ref={register}              
                defaultValue={false}              
                defaultChecked={!data.compensation?.isVariable ? "checked" : null }                   
              />  
              <Label>&nbsp; Não</Label> 
            </p>        
            
            <p>
              <Button type="submit"><RiSave3Fill size={24} />&nbsp; <strong>Salvar Alterações</strong></Button>
            </p>
          
        </form>
        </Container>
      }
    </>
  )
}