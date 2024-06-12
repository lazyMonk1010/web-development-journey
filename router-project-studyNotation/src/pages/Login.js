import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome BAck"
    desc1 ="Build Skills for today , tommorrow, and beyound."
    desc2 ="Education to future -proof your carrer"
    image={loginImg}
    formtype="login"
    setIsLoggedIn ={setIsLoggedIn}
    
    />
    
  )
}

export default Login
