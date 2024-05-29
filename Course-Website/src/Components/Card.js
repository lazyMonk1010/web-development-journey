import React from 'react'
import {FcLike ,FcLikePlaceHolder} from "react-icons/fc"
import {toast} from 'react-toastify';

const Card = ({course}, {likedCourses},{setLikedCourses}) => {
    //course ka data pass kar rkha hai for image as usme s aaega img

    //clickhandler tab after css when filter vali btn [p click krkr change honga]
    
    function clickHandler(){
       
     // koi bbi component liked hai ya nahi to store krna hai starting m liked courses ka array empty hota hai
    // if current course ki id pdi hai ky likedcourses m
    if(likedCourses.included(course.id)){
        //pehle s like hua pada tha
        setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id)));
        toast.warning("like removed");
    }
    else{
        //phle s likded nahi hai ye course
        //insert karna h ye course liked courses me
        if(likedCourses.length ===0) {
            //if phle s kuvh nahi pada to current course ko insert krnge
            setLikedCourses([course.id]);
        }
        else {
            //non empty phle se 
            // puarana dalnge ssara or current course hi id b dalenge 
            setLikedCourses((prev) => [...prev, course.id]);
        }
        toast.success("liked succesfully")

    }

   
    }
  return (
    <div className='w-[300px] bg-bgdark  bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src = {course.image.url}/>

            <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                <button onclick = {clickHandler}>
                    <FcLike fontSize="1.75rem"/>

                </button>
            </div>
        </div>
        <div className='p-4'>
            <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>{course.description}</p>
        </div>

      
    </div>
  )
}

export default Card
