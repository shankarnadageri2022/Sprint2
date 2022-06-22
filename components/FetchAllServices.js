import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/homebg.jpeg';

import { useDispatch, useSelector } from 'react-redux';
import { GetAllServices } from '../store/actions/GetAllServicesActions';
import NavBar from './NavBar/NavBar';



function FetchAllServices() {

    const services = useSelector(state => state.serviceReducer.services)
    const dispatch = useDispatch();

    const myFunction = () => {
        dispatch(GetAllServices())
    };

    useEffect(() => {
        myFunction();
    }, []);

    return (

        
        <div className='container' style={{ height: "500px",marginTop:"70px"}}>
            <div>
                <NavBar/>
            </div>
            {/* <SearchProduct/> */}
            <div class="row">
                {
                    services.map((p, index) =>
                        <div key={index} className="col-sm-3">
                            {/* <Link to={`/product/get/${p.productId}`}> */}
                            <div className="card" style={{ width: "200px", height: "250px" }}>
                                <img className="card-img-top" src={img1} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">{p.serviceName}</h4>
                                    <p className="card-text">{p.price}</p>
                                </div>
                            </div>
                            {/* </Link> */}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default FetchAllServices;