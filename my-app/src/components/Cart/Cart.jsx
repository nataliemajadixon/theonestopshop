import React from 'react';
// import { useSelector } from 'react-redux';
// import Product from '../Product/Product';

import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { addCart } from '../../redux/action';
import { delCart } from '../../redux/action';
import { addCart } from '../../redux/action';
import './Cart.css';
   


const Cart = () => {

    const cart = useSelector((state)=> state.handleCart)
    console.log(cart)
   
    const dispatch = useDispatch();

    const delProduct = (product) => {
        dispatch(delCart(product));
    }

    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    // total
    const addition = (acc, currentvalue) => {
        return acc + currentvalue.price * currentvalue.qty;
    };

    const total = cart.reduce(addition, 0);
    return(
        <body className='body'>
        <div className='cart'>
            {cart.map((product) => {
                return (
                    <div className="row"  style={{ marginTop: 40, textAlign: 'center'}}>
                    <div className="col-md-4" >
                    <img src={product.image} alt={product.title} height="200px" width="180px" style={{ marginLeft: 40}} />
                    </div>
                    <div className="col-md-4">
                        <h3>{product.title}</h3>
                    <p className="lead fw-bold">
                        {product.qty} X ${product.price} 
                        = $ {product.qty * product.price}
                    </p>
                    
                    <button className='btn btn-outline-dark me-4'
                   onClick={()=>delProduct(product)} >
                    <i className='fa fa-minus'></i>
                    </button>
                    <button className='btn btn-outline-dark' onClick={()=>addProduct(product)}>
                        <i className="fa fa-plus"></i>
                    </button>
    
    
                    </div>
                    
                </div>
                
        
                )
                
            })}
            {total > 0 && <h2 style={{ marginLeft: 40, textAlign:'center' }}>Total: &nbsp;{total}</h2>}
        </div>
        </body>
    )

}
export default Cart;

    
   
    
   
   
