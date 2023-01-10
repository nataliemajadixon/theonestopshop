import React from 'react';
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';
import './Navbar.css';


const Navbar = () => {


    // const cart = useSelector((state)=> state.handleCart)
    // console.log(cart)
    // // total
    // const addition = (acc, currentvalue) => {
    //     return acc + currentvalue.price * currentvalue.qty;
    // };
    // const total = cart.reduce(addition, 0);

    const state = useSelector((state)=> state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 shadow-lg">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        One Stop Shop</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">
                                    Products
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                           
                        </ul>
                        <div className="buttons">
                            
                               {/* <NavLink to="/create" className="btn btn-outline-dark ms-2"> */}
                               <NavLink to="/register/create" className="btn btn-outline-dark ms-2">
                               <i className="fa fa-user-plus me-1"></i>  Register</NavLink>
                               <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                               <i className="fa fa-shopping-cart me-1"></i>  Cart({state.length})</NavLink>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;