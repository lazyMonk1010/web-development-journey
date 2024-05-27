import logo from './logo.svg';
import './App.css';
import {useEffect , useState} from 'react';

function App() {
  const[text , setText] = useState('');
  const[name , setName] = useState("ginni");
 
  // har render p execute honga , variable ki valie change p ui render after rendering use effect hook chlega har render p
 //variation 1 for every render
  // useEffect ( () =>{
  //   console.log("UI Rendering Done");
  // });

  // // variation 2 -> first Render
  // useEffect ( () =>{
  //   console.log("UI Rendering Done");
  // } ,[]); 

  // [] yh second parameter jo dependency ki list ko darsha rha hai
  // 3rd Variation ->  first render + wheater dependency changes
// tabhi run honga jab text ki value change hongi 
 

  // useEffect(() => {
  // console.log(" change Observed");

  // } , [name]);

  // 4rth variation  -> to handle unmounting of a component

  useEffect(()=> {
    // add event listener
    console.log("listener added");

    return () => {
      console.log("listener removed");
    }


  } ,[text]);
  // har render k bad add event listener
  

  function changeHandler(event){
    console.log(text);
    setText(event.target.value)
  }
  return (
    <div className="App">
     <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
