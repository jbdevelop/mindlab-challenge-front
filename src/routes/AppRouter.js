import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from '../views/Login'
import Jobs from '../views/Jobs'
import JobDetails from '../views/JobDetails'
import Navbar from '../components/Navbar'

export default function AppRouter () {
  return (    
    <>
      {          
        <Router>          
          <Navbar />

          <Switch>                                           
            <Route path="/login" component={Login}/>
            <Route exact path="/jobs" component={Jobs}/>            
            <Route path="/jobs/:id" component={JobDetails}/>            
            <Redirect from='/' to="/login" />
          </Switch>              
        </Router>
    } 
    </>
  )
}
