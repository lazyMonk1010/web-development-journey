import React, { useState } from "react";
import { apiUrl,filterData } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards"; 
import { toast} from "react-toastify";
import { useEffect } from "react";
import Spinner from "./Components/Spinner";


const App = () => {
  const[courses , setCourses] = useState(null);
  const[loading , setLoading] = useState(true);

    //api call
    async function fetchData() {
      setLoading(true);
      try{
        let response = await fetch(apiUrl);
        let output = await response.json();
        setCourses(output.data);
       
        //sara data copy in courses

        // save data into a variable

      }
      catch(error){
        toast.error("something went wrong");

      }
      setLoading(false);
    }
    
  useEffect(  ()=> {
    fetchData();
  }, [])
  

  
  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
      <Navbar/>

      </div>

      <div className="bg-bgDark2 "> 
      <div>

      
<Filter
 filterData= {filterData}/>

</div>
 
 <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
  {
   loading ? (<Spinner/>) : (<Cards courses={courses}/>)
  }

 </div>

      </div>
      



</div>
      
     
      
    

  );
};

export default App;