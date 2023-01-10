import React from 'react';
import Products from '../Products/Products';
import './Home.css'



const Home = () => {
    return (
        <div className='hero' >
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpeg" className="card-img" alt="Background" height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>

                    </div>
                    <h5 className="card-title display-3 fw-bolder mb-0">
                        NEW THIS SEASON</h5>
                    <p className="card-text lead fs-2">
                        SEE ALL THE LASTEST TRENDS BELOW
                    </p>

                </div>
                
            </div>
           <Products />
        </div>
    );
};

export default Home;