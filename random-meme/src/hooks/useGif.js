import React from 'react'
import Tag from '../components/Tag';
import { useState , useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
 // to ab humko gif create krna pdega if humne git niche src m dia hai to
   
 
 const [gif,setGif] = useState('');
 const[loading, setLoading] = useState('false');

 async function fetchData(tag){
   setLoading(true);
   
   const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
   // console.log(output);
   const imageSource = data.data.images.downsized_large.url;
   // console.log(imageSource);
   setGif(imageSource);
   setLoading(false);
   //network call jab tak hori hai loading data tru or false dikhate hai

   
 }
 useEffect( () =>{
   fetchData('car');
   //onclick m fetchdata use kre 
 },[])

 return {gif,loading,fetchData};


 




}

export default useGif
