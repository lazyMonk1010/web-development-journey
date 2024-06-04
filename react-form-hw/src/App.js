
import { useState } from "react";
import "./App.css";

function App() {

  const [formData ,setformData]= useState({
    firstName: "", lastName:"",email:"",country:"india", address:"",city:"",state:"",postalCode:"" , comments:"false", candidates:"false",offers:"false",pushNotifications:""


  })

  function changeHandler(event){
    //destructuring the data 
    const {name , value , checked , type} = event.target;
    //set kia data usme ek prev state pdi hongi and prev state k lie ek new object create krna hai

    setformData( (prev)=> ({...prev , [name]:type === "checkbox" ? checked: value}))

   

  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing  the value of form Data :")
    console.log(formData)

  }


  return(
    <div className="  flex flex-col items-center">
      <form onSubmit ={submitHandler}>
      <label htmlFor="firstName">First Name</label>
      <br/>

       
        <input type="text" 
        placeholder="Gini"
        name="firstName"
        id="firstName"
        value={formData.firstName}
        onChange={changeHandler}
        className="outline"
        />

        <br/>
        <br/>

      <label htmlFor="lastName">Last Name</label>
       <br/>

       
        <input type="text" 
        placeholder="jain"
        name="lastName"
        id="lastName"
        value={formData.lastName}
        onChange={changeHandler}
        className="outline"
        />

        <br/>
        <br/>

      <label htmlFor="email">Email</label>
       <br/>

       
        <input type="email" 
        placeholder="jainginni23@gmail.com"
        name="email"
        id="email"
        value={formData.email}
        onChange={changeHandler}
        className="outline"
        />

        <br/>
        <br/>

        <label htmlFor="country">Country</label>
        <br/>
        <select

        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="outline"

        
        
        >
          <option>India</option>
          <option>United State</option>
          <option>Canada</option>
          <option>New York</option>

        </select>

        <br/>
        <br/>

      <label htmlFor="address">Street Address</label>
       <br/>

       
        <input type="text" 
        placeholder="1234 Main St"
        name="address"
        id="address"
        value={formData.address}
        onChange={changeHandler}
        className="outline"
        />

        <br/>
        <br/>

      <label htmlFor="city">City</label>
       <br/>

       
        <input type="text" 
        placeholder="Asansol"
        name="city"
        id="city"
        value={formData.city}
        onChange={changeHandler}
        className="outline"
        />

        <br/>
        <br/>

      <label htmlFor="state">State/Province</label>
       <br/>

       
        <input type="text" 
        placeholder="WestBengal"
        name="state"
        id="state"
        value={formData.state}
        onChange={changeHandler}
        className="outline"
        />

        <br/>
        <br/>

      <label htmlFor="postalCode">Postal Code</label>
       <br/>

       
        <input type="text" 
        placeholder="451006"
        name="postalCode"
        id="postalCode"
        value={formData.postalCode}
        onChange={changeHandler}
        className="outline"
        />

         <fieldset>

          <legend>By Email</legend>
          <br/>

         <div className="flex flex-row">

         <input
          id="comments"
          name="comments"
          checked={formData.comments}
          type="checkbox"
          onChange={changeHandler}

          
          
          
          />
         {/* label vo hai jo tick kroge to us text p tick p bhi vo tick untick hi jaega */}

         <div>
          <label htmlFor="comments">Comments</label>
          <p>Get Notified when someone posts a comment on a posting</p>
          
         </div>
         </div>

         <br/>

         <div className="flex flex-row">

         <input
          id="candidates"
          name="candidates"
          checked={formData.candidates}
          type="checkbox"
          onChange={changeHandler}

          
          
          
          />
         {/* label vo hai jo tick kroge to us text p tick p bhi vo tick untick hi jaega */}

         <div>
          <label htmlFor="candidates">Candidates</label>
          <p>Get Notified when a candidate applies for a job</p>
          
         </div>
         </div>

         <br/>


         <div className="flex flex-row">

         <input
          id="offers"
          name="offers"
          checked={formData.offers}
          type="checkbox"
          onChange={changeHandler}

          
          
          
          />
         {/* label vo hai jo tick kroge to us text p tick p bhi vo tick untick hi jaega */}

         <div>
          <label htmlFor="offers">Offers</label>
          <p>Get Notified when a candidate acceps or reject an offer</p>
          
         </div>
         </div>
         
         </fieldset>
         <br/>
         <br/>

         <fieldset>
          <legend>Push Notifications</legend>

          <p>These are delivered via sms to your phone</p>

          <input
          type="radio"
          id="pushEverything"
          name="pushNotifications"
          value="Everthing"
          onChange={changeHandler}

          
          
          
          />
          <label htmlFor="pushEverything">Everything</label>

          <br/>

          <input
          type="radio"
          id="pushEmail"
          name="pushNotifications"
          value="Same as Email"
          onChange={changeHandler}

          
          
          
          />
          <label htmlFor="pushEmail">Same as Email</label>

          <br/>

          <input
          type="radio"
          id="pushNothing"
          name="pushNotifications"
          value="No push Notification"
          onChange={changeHandler}

          
          
          
          />
          <label htmlFor="pushNothing">No push Notification</label>
         </fieldset>

         <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>

        




      </form>

    </div>


  );

}

export default App;
