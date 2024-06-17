// same contact vala content
import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
const Template = ({title , desc1 , desc2, image , formtype , setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
        {/* mx margin x axis k along center krna hai */}

        <div>
            <h1 className='text-richbalck-5 font-semibold text-[1.875rem] leading-[2.37rem] '>{title}</h1>

            <p className='text=[1.125rem leading[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

             {formtype === "signup" ?
             (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex-w-full'>
                {/* line k lie */}
                <div></div> 
                <p>OR</p>
                <div></div>
            </div>

            <button>Sign Up With Google</button>
            
        </div>

        <div>
            <img src={frameImage}
            alt='Pattern'
            width={558}
            height={504}
            loading='lazy'/>

            <img src={image}
            alt='Students'
            width={558}
            height={490}
            loading='lazy'/>


        </div>
      
    </div>
  )
}

export default Template
