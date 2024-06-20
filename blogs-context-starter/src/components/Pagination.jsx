import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page , handlepageChange,totalPages} = useContext(AppContext);
  // previous ka page ka content s use krnge 
  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
        {/* yh bracket is lie kuki previous ka button ek condituion p aaega  1st page k lie nbi visible hoga*/}
        <div className='flex gap-x-2'>
        {page>1 &&
        // handlePageChange ko call krnge or parametr m humko page -1 bhejna hai
          (<button 
            className='rounded-md border-2 px-4 py-1'
          
          onClick={()=> handlepageChange(page-1) }>
            Previous
          </button>)
        }



        {
          // last page k lie nahi dekhega
          //currentpage totalPage k niche honnga tab hi next btuin darsaenge
          page<totalPages &&
          (<button
            className='rounded-md border-2 px-4 py-1' 
          onClick={()=>handlepageChange(page+1)}>
            Next
          </button>)
        }

        </div>
        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
        </p>
      </div>
      
    </div>
  )
}

export default Pagination
 