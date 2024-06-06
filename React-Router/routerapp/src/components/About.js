import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const Navigate = useNavigate();

    function clickHandler(){
        //move to support page
        Navigate("/support")
    }
  return (
    <div>
        <div>
      This is About page
    </div>

    <button onClick={clickHandler}>Move to support page</button>

    </div>
    
  )
}

export default About
