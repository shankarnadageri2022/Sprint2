import React, { useEffect } from "react";
import CustomerNavBar from "./NavBar/CustomerNavBar";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { recoverPassword } from "../store/actions/RecoverPasswordAction";
import {useParams} from 'react-router-dom';

function RecoverPassword() {

  const rPassword = useSelector(state => state.authenticationReducer.recoverPassword);
  // const navigate = useNavigate();

  const [cId, setCId]=useState("");
  const dispatch = useDispatch();  

  const fetchPasswordById = () => {
   console.log(cId);
    dispatch(recoverPassword(cId));
  }
  
  //  useEffect(fetchPasswordById, [cId]);
    
    // navigate(-1);

  return (
    <div>
      <CustomerNavBar />
 
      <div className="container" style={{ marginTop: "70px" }}>
    
        <h2>Recover Password</h2>
        <div>
         
            <div className="form-group">
             
              <label htmlFor="name">Customer ID</label>
              <input type="text" className="form-control" name="cId" value={cId} onChange={e => setCId(e.target.value)} />
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={fetchPasswordById} style={{ marginRight: "15px" }}>Recover</button>

            <button type="reset" className="btn btn-secondary">Cancel </button>
            
        

        </div>
        </div>

    </div>
  )
}

export default RecoverPassword;