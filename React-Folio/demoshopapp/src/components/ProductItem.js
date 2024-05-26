import React , { useState} from 'react';

import ProductDate from './ProductDate';
import Card from './Card';

import './ProductItem.css';

const ProductItem = (props) => {

    const [title,setTitle] = useState(props.title);


    function clickHandler(){
        //title = "popcorn";
        setTitle("Popcorn");
        console.log("button clicked");
    };

    return (
        <Card classname = 'product-item'>
            <ProductDate date= {props.date} />
            <div className = 'product-item_description'>
                <h2> {title}
                </h2>

            </div>
            <button onClick = {clickHandler} >ADD TO CART</button>

        </Card>

    );
}

export default ProductItem;