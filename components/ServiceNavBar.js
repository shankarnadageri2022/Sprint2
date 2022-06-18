import React from "react";
import {Link} from 'react-router-dom';
import FetchAllServices from "./FetchAllServices";
function ServiceNavBar(){
    return(
       
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <Link className="navbar-brand" to="/home">eVMS</Link>
        
        <ul className="navbar-nav">
        <li class="nav-item">
                <a className="nav-link" to="/addCustomer">Add Customer</a>
            </li>
            <li class="nav-item">
                <a className="nav-link" to="/aboutus">AboutUs</a>
            </li>
            <li class="nav-item">
                <a className="nav-link" to="/login">SignIn</a>
            </li>
            <li class="nav-item">
                <a className="nav-link" to="#">SignUp</a>
            </li>
            <li class="nav-item">
                <a className="nav-link" to="/home">home</a>
            </li>
            <Link className="navbar-brand" to="/home">Home</Link>
           
        </ul>
    </nav>
    )

}
export default ServiceNavBar;