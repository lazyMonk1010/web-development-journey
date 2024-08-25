import { useEffect } from "react";
import { useState } from "react"
function App() {
  const [color,setColor] = useState("orange")
  const colors = ["red", "blue", "green", "purple", "pink", "black", "orange"];
  let index = 0;
  useEffect(()=> {

    const randomColor =()=>{
    let color = colors[index];
    index = index + 1; 
    setColor(color)
  }

  const interval = setInterval(() => {
   
    randomColor();
  }, 3000);
  

  },[]);

 
  return (
    
    <div className="w-full h-screen duration-200"
    style={ {backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center inset-x-0 top-10 px-6 py-2 bg-white text-xl rounded-2xl w-1/3 mx-auto">This is backgroundColor changer</div>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "> 

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button 
          //onclick ko function hi chei kuki bad m pata nahi hume ky return m mile
          onClick={()=> setColor("red")}
          
          className="outline-none px-4  py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"red"}}>
            Red
          </button>

          <button
          onClick={()=> setColor("blue")}
           className="outline-none px-4  py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"blue"}}>
            blue
          </button>

          <button 
          onClick={()=> setColor("green")}
          className="outline-none px-4  py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"green"}}>
            green
          </button>

          <button
          onClick={()=> setColor("purple")}
           className="outline-none px-4  py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"purple"}}>
            purple
          </button>

          <button
          onClick={()=> setColor("pink")}
           className="outline-none px-4  py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"pink"}}>
            pink
          </button>

          <button
          onClick={()=> setColor("black")}
           className="outline-none px-4  py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"black"}}>
            black
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
