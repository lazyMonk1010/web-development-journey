import React from 'react'
import Card from './Card';

const Cards = ({courses}) => {
    let allCourses = [];
    // sara data 1 aaray m
    //returns you a list of all course from api response
    const getCourses = ()=> {
        
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
            return <Cards key ={course.id} course={course}/>
           })
           }
       
      
    </div>
  )
}

export default Cards
