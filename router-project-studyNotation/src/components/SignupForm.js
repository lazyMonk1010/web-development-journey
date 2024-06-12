import React, { useState } from 'react'
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const[formData , setFormData]= useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })


    const[showPassword , setShowPassword]= useState(false);

    function changeHandler (event){

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("password do not match")
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account created");

        const accountData ={
            ...formData
        };
        console.log("printing account data ");
        console.log(accountData);

        navigate("/dashboard");
         
    }
  return (
    <div>
{/* //    student instructor tab */}
  <div>
    <button>Student</button>
    <button>Instructor</button>
  </div>

  <form onSubmit={submitHandler}>
   <div>
    
   <label>
        <p>
            First Name <sup>*</sup>
        </p>
        <input

        required
        type='text'
        placeholder='Enter your Forst Name'
        name='firstName'
        onChange={changeHandler}
        value={formData.firstName}
        
        />
           
        
        
        
    </label>

    <label>
        <p>
            Lastt Name <sup>*</sup>
        </p>
        <input

        required
        type='text'
        placeholder='Enter your Last Name'
        name='lastName'
        onChange={changeHandler}
        value={formData.lastName}
        
        />
           
        
        
        
    </label>


   </div>

   {/* email adrres */}

   <label>
        <p>
            Email Address<sup>*</sup>
        </p>
        <input

        required
        type='email'
        placeholder='Enter your Email'
        name='email'
        onChange={changeHandler}
        value={formData.email}
        
        />
           
        
        
        
    </label>

    {/* create Password and confirm passwrd */}

    <div>

    <label>
        <p>
            Create Password <sup>*</sup>
        </p>
        <input

        required
        type={showPassword ? ("text"): ("password")}
        placeholder='Enter your password'
        name='password'
        onChange={changeHandler}
        value={formData.password}
        
        />
               <span onClick={ ()=> setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>) }
                </span>

           
        
        
        
    </label>

    
    <label>
        <p>
            Confirm Password <sup>*</sup>
        </p>
        <input

        required
        type={showPassword ? ("text"): ("password")}
        placeholder='confirm your password'
        name='confirmPassword'
        onChange={changeHandler}
        value={formData.confirmPassword}
        
        />
               <span onClick={ ()=> setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>) }
                </span>

           
        
        
        
    </label>
    </div>

    <button>
        create account
    </button>



   

  </form>
  </div>
  )
}

export default SignupForm
