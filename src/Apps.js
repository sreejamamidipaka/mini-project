import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Signup from './pages/Signup'
import Task from './pages/Task'

import MainLayout from './layouts/MainLayout'


import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Navigation from './components/Navigation'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'


class App extends React.Component{
  state={
    companyName:"Codegnan",
    year:2008
  }
  render(){
    return(
      <section>
        <BrowserRouter>
        <Navigation/>
          <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/notfound" element={<NotFound/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/task" element={<Task/>}/>
            
            <Route path="/mainlayout" element={<MainLayout/>}/>
            


            



            
            <Route path="/loginform" element={<LoginForm/>}/>
            <Route path="/signupform" element={<SignupForm/>}/>
            
          </Routes>
        </BrowserRouter>
       {/* <h1>good afternoon</h1>
        <p>value is {this.state.companyName} {this.state.year}</p>
        <Demo name="ravi" company="codegnan"/>
    <Demo name="sita" company="amazon"/>*/}
  
      </section>
    )
  }
}
export default App