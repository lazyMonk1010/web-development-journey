import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
    //ek page s dusre p movement
    const navigate = useNavigate();

    //value k lie ek state variable banya honga jinmi properteis hongu
    const[formData , setFormData] = useState({
        email:"",password:""
    })

    //for password as show p chick to as a text or not to vo dots dekhega

    const[showPassword , setShowPassword]= useState(false);


    // prev data ko rkhna haia nad ek obj banan hai
    function changeHandler (event){

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("logged in");
        navigate("/dashboard");


    }
  return (
   

        <form onSubmit={submitHandler}>

            <label>
                <p>Email Address<sup>*</sup></p>
                <input
                required
                type='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter Email id'
                name='email'
                
                />
            </label>


            <label>
                <p>Password<sup>*</sup></p>
                <input
                required
                type={showPassword ? ("text"): ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Pasword'
                name='password'
                
                />
{/* agar purani value false thi to new value kust uska negatuon ho jaengei */}
                <span onClick={ ()=> setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>) }
                </span>

                <Link to ="#">
                <p>
                    Forgot Password
                </p>
                
                </Link>
            </label>

            <button >
                Sign-In
            </button>

        </form>
      
   
  )
}

export default LoginForm
