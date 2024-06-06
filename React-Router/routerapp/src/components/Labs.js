import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
    const navigate = useNavigate();


    function changeHandler(){
        //move to about page
        //navigate kr jao about vale path apr
        navigate("/about");

    }

    function backHandler(){
        navigate(-1);
    }
  return (<div>
    <div>

        i m labs page
      
    </div>
    <button onClick={changeHandler}> Move to About PAge </button>
    <button onClick={backHandler}>Go Back</button>

    </div>
  )
}

export default Labs
