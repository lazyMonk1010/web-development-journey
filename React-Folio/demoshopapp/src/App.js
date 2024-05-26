
import React from 'react';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
function App   ()  {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021,8,10),

    },
    {
      id: 'p2',
      title: 'Surf Excel',
      amount: 200,
      date: new Date(2021,2,12),

    },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021,11,28),

    },

    {
      id: 'p4',
      title: 'Areil',
      amount: 170,
      date: new Date(2021,10,20),

    },
  ];

  // child s parent ko communicate kese krte function bananp pri t produ data
  function printProductData(data){
    console.log("i am inside app.js")
    console.log(data)  
  }
  //step 2 pass the function as props name printProduct function pass kar dia prop k andr
  
  return (
    <div> 
    <NewProduct printProduct = {printProductData} />
    <Products items = {products} />

    {/* props ka use krke yh data products component m sned kar dia */}
      
    
    </div>

    
  );
}

export default App;
