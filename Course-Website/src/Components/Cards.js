import React, { useState } from 'react'
import Card from './Card';


const Cards = ({courses}) => {

    // sare cards yha p hai islie idr banana jda sense banega 
    const[likedCourses,setLikedCourses] = useState([]);

    
    // sara data 1 aaray m
    //returns you a list of all course from api response
    const getCourses = ()=> {
        let allCourses = [];
        
        Object.values(courses).forEach( (courseCategory) => {
            courseCategory.forEach((course) =>{
                allCourses.push(course); 
            })
        })
        return allCourses;
        

    }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        { getCourses().map ( (course) => {
            return <Cards key ={course.id} 
            course={course}
            likedCourses= {likedCourses}
            setLikedCourses= {setLikedCourses}  />
           })
           }
       
      
    </div>
  )
}

export default Cards
