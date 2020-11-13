import React from 'react'

import { StyledLoading } from './styles'

import loadingImg from '../../assets/loading.gif'

export default function Loading() {    
  return (
    <>      
      <StyledLoading src={loadingImg}></StyledLoading>                      
    </>
  )
}