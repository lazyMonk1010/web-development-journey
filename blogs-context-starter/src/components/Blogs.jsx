import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {
  //data consume
  // ya o loading dekhega ya blogs 
  //context m s loading the data mil gya
  const {posts,loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center'>
      {/* mt last vala for fixing the header  */}
      {/* 5 post ka data aya ahi so hum 1 data k blog ko card jese treat kar skte hai and us ekrnhe map function ka  */}
      
      {
        loading ?
        (<Spinner/>):
        (
          posts.length==0 ? 
          (<div>
             <p>No Posts Found </p>
            </div> ):
          (posts.map((post) => (
            <div key={post.id}> 
              <p className='font-bold text-lg'>{post.title}</p>
              <p className='text-sm mt-[4px]'>
                By <span className='italic'>{post.author} on <span className='underline font-bold'>{post.category}</span></span>
              </p>

              <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
              <p className='text-md mt-[14px]'>{post.content}</p>
              <div className='flex gap-x-3'>
                {post.tags.map( (tag,index)=>{
                  return <span key={index} className='text-blue-500 underline font-bold text-xs mt-[4px]' >{`#${tag}`}</span>
                })}
                </div> 

            </div>
          )))
        )
      }
    </div>
  )
}

export default Blogs
