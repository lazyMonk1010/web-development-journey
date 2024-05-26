import { useState } from 'react';
import './ProductForm.css'

function ProductForm(props){

    // //sare parameters 1 bar handle oject bana k for multiple parameters

    // const [fullProductInput , setfullpProductinput] = useState({
    //     title:'',
    //     date:''
    // });

    const[newTitle , setTitle] = useState('');
    const[newDate,setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
       // console.log(event.target.value);

    }
    function dateChangeHandler(event){
        setDate(event.target.value);
       // console.log(event.target.value);
    //    console.log("printing");
    //    console.log(title);
    //    console.log (date);
    }

    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title : newTitle,
            date:newDate

        };
        props.onSaveProduct(productData);

        //console.log(productData);

        //after print empty bhi karn hai handler ko empty kar do
        setTitle('');
        setDate('');

    }


    //  when form submit honga is handler ko cal kr di=ena submit handler ko
    return( <form onSubmit={submitHandler}>
        <div>
        <div className='new-product_control'>
            <label>Title</label>
            <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
        </div>

        <div className='new-product_control'>
            <label>Date</label>
            <input type ='date'  value = {newDate}onChange={dateChangeHandler} min ='2023-01-01' max = '2023-12-12'></input>
        </div>

        <div className='new-product_button'>
            <button type = 'submit'>Add Product</button>
        </div>

        </div>
        
    </form>)

}

export default ProductForm;