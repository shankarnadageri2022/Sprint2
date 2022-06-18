import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <a class="navbar-brand" href="/home">eVMS</a>
                <ul class="navbar-nav">
                    <li class="nav-item">

                        <a class="nav-link" href="/home/service"> <Link  to="/fetch/all/service"> service</Link> </a>
                            
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Enquiry</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/home">Customer</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
} export default NavBar;