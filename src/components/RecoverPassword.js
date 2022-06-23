import React, { useEffect } from "react";
import CustomerNavBar from "./NavBar/CustomerNavBar";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { recoverPassword } from "../store/actions/RecoverPasswordAction";
import { useParams } from 'react-router-dom';

function RecoverPassword() {

  const rPassword = useSelector(state => state.authenticationReducer.recoverPassword);


  const [cId, setCId] = useState("");

  const [recPassError, setrecPassError] = useState({});

  const dispatch = useDispatch();

  const fetchPasswordById = () => {

    const errors={};
    if(!cId){
      errors['customerIdError']= "customer id is required"
    }
    setrecPassError(errors);
    const noErrors =Object.keys(errors).length===0;
    if(noErrors){

      const payload = {
        customerId: cId,
      }
    console.log(cId);
    dispatch(recoverPassword(cId));

  }
}
  //  useEffect(fetchPasswordById, [cId]);



  return (
    <div>
      <CustomerNavBar />

      <div className="container" style={{ marginTop: "70px" }}>

        <h2>Recover Password</h2>
        <div>

          <div className="form-group">

            <label htmlFor="name">Customer ID</label>
            <input type="text" className="form-control" name="cId" value={cId} onChange={e => setCId(e.target.value)} />
            {
           recPassError.customerIdError&&
           <div style={{color:"red"}}>{  recPassError.customerIdError} </div>
        }
          </div>

          <button type="submit" className="btn btn-primary" onClick={fetchPasswordById} style={{ marginRight: "15px" }}>Recover</button>

          <button type="reset" className="btn btn-secondary">Cancel </button>



        </div>
      </div>

    </div>
  )
}

export default RecoverPassword;