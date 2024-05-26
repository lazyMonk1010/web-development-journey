import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";
const App = () => {

  const [tours , setTours] = useState(data);
  // data .js m jo data hai usse initialize kra chata hu

  function removeTour(id){  
    //id tour ko remove kr dia is upr usestae vale tour k list m s
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);

  }
  // if koi city nahi bchi to refresh kr do means tour vale obj bilkul empty hogyi ho
  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No Tours left</h2>
        <button className="btn-white" onClick={()=> setTours(data)}>
          Refresh </button> 
          </div>
    );
  }
  return (
    <div className="App">
      
      <Tours tours={tours} removeTour ={removeTour} > </Tours>
{/* tours vale component k andar as a props isko pass kar dia honga jo banya haI TOIR vla */}
    </div>
  )
};

export default App;
