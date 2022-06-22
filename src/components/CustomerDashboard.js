
import './NavBar/CustomerDashBoard.css'
import React from "react";
import { Link } from "react-router-dom";
import CustomerNavBar from "./NavBar/CustomerNavBar";

function CustomerDashboard() {
  return (
    <div>
      <CustomerNavBar/>

      <div className="container" style={{paddingTop:"80px"}}>

        <h2>User Dashboard</h2>

        <br>
        </br>
        
        <button type="button" class="btn btn-secondary btn-lg btn-block">
          <a className="cdBoard"  href="/customerdashboard/updatedetails">Update Profile</a>
           </button>
         
        
        <button type="button" class="btn btn-secondary btn-lg btn-block">
          <a className="cdBoard" href="/customerdashboard/changepassword" >Change Password</a>
         
        </button>
        <button type="button" class="btn btn-secondary btn-lg btn-block">
          <a className="cdBoard" href="/customerdashboard/recoverpassword" >Recover Password</a>
         
        </button>
        
      </div>
    </div>
  );
}

export default CustomerDashboard;
