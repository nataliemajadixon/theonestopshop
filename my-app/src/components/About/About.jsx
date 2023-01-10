import React from 'react';


const About = () => {
    return (
        <div className='hero' >
            <div className="card bg-dark text-white border-0">
                <img src="/assets/AboutMe.jpeg" className="card-img" alt="Background" height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-middle">
                    <div className='container'>

                    </div>
                    <h5 className="card-title display-3 fw-bolder mb-0">
                        About Me</h5>
                    <p className="card-text lead fs-2">
                        Created By Natalie Dixon
                    </p>
        <hr></hr>
        <p>One Stop Shop has all the latest trends</p>
        <p>Feel free to create an account with us by clicking on Register in the top right corner. </p>
                </div>
                
            </div>
           
        </div>
    );
};

export default About;