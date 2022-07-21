import React from 'react';

const Product = (props) => {
    return (
        <div>
            <h2>Name: {props.product.name}</h2>
            <p>${props.product.price} - 
                Description: {props.product.description}</p>
            <hr />
        </div>
    );
}

export default Product;
