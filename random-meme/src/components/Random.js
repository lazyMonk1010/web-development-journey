import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
    // to ab humko gif create krna pdega if humne git niche src m dia hai to
   

    // const [gif,setGif] = useState('');
    // const[loading, setLoading] = useState('false');

    // async function fetchData(){
    //   setLoading(true);
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //   const {data} = await axios.get(url);
    //   // console.log(output);
    //   const imageSource = data.data.images.downsized_large.url;
    //   // console.log(imageSource);
    //   setGif(imageSource);
    //   setLoading(false);
    //   //network call jab tak hori hai loading data tru or false dikhate hai

      
    // }
    // useEffect( () =>{
    //   fetchData();
    // },[])
    
    const {gif , loading , fetchData} = useGif();
   

    function clickHandler(){
      fetchData();
         
    }



  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'> 
        <h1 className='mt-[15px] text-2xl underline uppercqase font-bold'> A Random Gif</h1>
        {
          loading ? (<Spinner/>) : ( <img src={gif} width="450"/>)
        }
       
        <button onClick={clickHandler} className='w-10/12 bg-yellow-300 text-lg py-2 rounded-lg mb-[20px] '>Generate</button>
      
    </div>
  )
}

export default Random
