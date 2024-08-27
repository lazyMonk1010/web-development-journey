import { useEffect } from "react";
import { useState } from "react"
function App() {
  const[count,setCount]=useState(0);

  function increaseHandler(){
    setCount(count+1);

  }

  function decreaseHandler(){
    if(count<=0){
      setCount(0)
    }else{
      setCount(count-1);

    }
    
    
  }
  function resetHandler(){
    setCount(0);
    
  }

  

 
  return (
    
    <div className=" relative w-full h-[100vh] flex justify-center items-center bg-blue-950 flex-col gap-12">
       <div className="text-white bg-[#00008B] w-full flex justify-center absolute top-0 text-4xl"> 
       <h1>Counter APP</h1>
       </div>
      
      <div className="text-[#0398d4] font-large text-2xl">
        Increment-Decrement
      </div>

      <div className="flex justify-center bg-white gap-12 py-3 rounded-lg text-[30px]">
        <button onClick={decreaseHandler}>
          -
        </button>
        <div>
          {count}
        </div>
        <button onClick={increaseHandler}>+</button>
      </div>

      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 roundex-sm text-lg">
        reset
      </button>

      
    </div>
  )
}

export default App
