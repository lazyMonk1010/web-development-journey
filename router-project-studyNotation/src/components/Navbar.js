import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import { useState } from 'react';
import toast from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setisLoggedIn = props.setisLoggedIn;
  return (
    <div className='flex justify-evenly'>

        {/* imag ahi 3 hyperlinks hai or 4 btn hai navbar m */}
      

      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      
      </Link>

      <nav>
        <ul className='flex gap-3'>
            <li>
                <Link to="/">Home</Link>
                
            </li>

            <li>
                <Link to="/">About</Link>
            </li>

            <li>
                <Link to="/">Contact</Link>
            </li>

        </ul>

      </nav>

      {/* login -sinup -logot -dashboard btn */}
      <div className='flex ml-3 mr-5 gap-3'>
        { !isLoggedIn &&
        // jab user login nahi hai tab hi iskonexecute krnge
            <Link to="/login">
                <button>Login</button>

            </Link>
        }
        {
            !isLoggedIn &&
            <Link to="/signup">
               <button>Signup</button>

            </Link>
        }
        {
            isLoggedIn &&
            <Link to="/">
                {/* logout hone k bad home p jate islie / */}
               <button onClick={() => { 
                  setisLoggedIn(false);
                  toast.success("Logged Out");
                  
                  

               }}>
                Logout</button>

            </Link>
        }
        {

            isLoggedIn &&
            <Link to="/dashboard">
               <button>Dashboard</button>

            </Link>
        }
      </div>
      
      
     
      
    </div>
  )
}

export default Navbar
