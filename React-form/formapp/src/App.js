import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const[firstName,setFirstName]= useState("");
  // const[lastName,setLastName]= useState("");

  // console.log(firstName); 
  // console.log(lastName);


  // function changeFirstNameHandler(event){
  //   // console.log("printing first name")
  //   // //value kese print kar skte hai ek event obj ara honga jisme event.tareget.value
  //   // console.log(event.target.value);
  //   // //event.target s hum us obj ko darsa rhe hote hai
  //   setFirstName(event.target.value);

  // }

  // function changeLastNameHandler(event){
  //   // console.log("printing last name")
  //   // //value kese print kar skte hai ek event obj ara honga jisme event.tareget.value
  //   // console.log(event.target.value);
  //   // //event.target s hum us obj ko darsa rhe hote hai
  //   setLastName(event.target.value);

  // }
  //for multiple states we have created object
  //formData nam ka state variable jisme data srore hinga

  const[formData , setFormData] = useState ( {firstName: "", lastName: "" , email:"",comments:"", isVisible: true , mode:"", favCar:""});
   
// new state k andr value dal deta hai , is change handler s form data k values ko updated rkhna pdega
  function changeHandler(event){

   
    //jis bhi element k lie call hua usko likh loa yh checked vali box ko update k ie
   //us element k under kon konsi properties hai vo destructuring krkr nikal rhe hai
    const{name , value ,checked , type} =event.target
    // ismw ek purane data pada hua tha
    //aap return kar do values nisme puarana data to honge hi pr sath m additional
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        
        //if property use krni ho to forms k lie speciallly ese squre brackets ka use[]
        //yh event . target .name k need nahi hai aab srif name likhnge to b chelga

       // [event.target.name]:  event.target.value 
        // [name]: value
        //ab name k lie direct value pr checkbox ka name h ya nahi so if checkckbox to checked ki value 

        [name]: type === "checkbox" ? checked : value
      }

    });



  }

  function submitHandler(event){
    //default behavior na ho click p  to prevent defalut
    event.preventDefault();
    //print
    console.log("printing the form data")
    console.log(formData)
  }
  return (
    <div className="App">
      <form onSubmit = {submitHandler}>
        <br/>
        <input type='text' placeholder='first name'
        onChange={changeHandler}
        // if pata krna call yha s aai thi ya kha s aai thi to ek attribute use krnege name

        name="firstName"
        value = {formData.firstName}
        >

        </input>
        <br/>
        <br></br>

        <input type='text' placeholder='last name'
        onChange={changeHandler}
        name="lastName"
        value = {formData.lastName}
        // name vale function m acces kr lnge ki call  kisne bhji thi
        >


        </input>
        <br/>
        <br></br>

        <input type='email' placeholder='Enter your email here'
        onChange={changeHandler}
        name='email'
        value = {formData.email}>

        </input>
        
        {/* creating the text area */}
        <br></br>
        <br/>
        <textarea 
        placeholder='enter your comments here'
        onChange={changeHandler}
        name='comments'
        value={formData.comments}
        
        />
        <br/>
        <br/>

        <input
        type='checkbox'
        onChange={changeHandler}
        name="isVisible"
        id='isVisible'
        // yha par value nahi use hongi data nikalne ko yha checked field ka use krnge nikalne k lie ki apka particular checkbox checked hai ki nahi
        checked={formData.isVisible}

        />
        {/* we will create a lable and attach it with checkbox ek attributes k sath */}
        <label htmlFor='isVisible'>Am I Visible ?</label>

        <br/>
        <br/>
       
        {/* bohot sarae radio btn ko grp krne k lie <fieldset tag use krte or uske and r or caption lagane k lie legend  tafg ka use  */}

        <fieldset>
          <legend>Mode:</legend>
           {/* radio button adding */}
        <input
        type='radio'
        onChange={changeHandler}
        name='mode'
        value= "Online-Mode"
        id="Online-Mode"
        //jispe click ho vo checked hojae or baki bache sare unchecked ho jae
        checked={formData.mode === "Online-Mode"}
        
        
        
        />
        <label htmlFor='online-Mode'>Online Mode</label>

        <input
        type='radio'
        onChange={changeHandler}
        name='mode'
        value= "Offline-Mode"
        id="Offline-Mode"
        // have to use checked but checked to boolean value lega than hum ciompare krnge ki ky equal haiu string k
        checked={formData.mode === "Offline-Mode"}
        
        
        
        />
        <label htmlFor='offline-Mode'>Offline Mode</label>


        </fieldset>
        <br/>
        <br/>

        {/* dropdown menu banaya hai  select tag use*/}
        <label htmlFor='favCar'> Tell me your fav car </label>

        <select
        onChange ={changeHandler}
        name='favCar'
        id='favCar'
        value={formData.favCar}
        
        
        >
          <option value="scorpio">Scorpio</option>
          <option value="creta">Creata</option>
          <option value="porshe">Porshe</option>
          <option value="bmw">BMW</option>
          <option value="farari">Farari</option>
          <option value="tesla">Tesla</option>
          
          

        </select>

        {/* creating aubmit button to submit the data and we dont have to accumulate it */}
         {/* <input type='submit' value='submit'/> */}
         <br/>
         <br/>
        <button>Submit </button>

        

         



      </form>
      
    </div>
  );
}

export default App;
