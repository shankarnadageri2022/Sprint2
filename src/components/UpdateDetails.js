import React from "react";
import NavBar from "./NavBar/NavBar";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { updateCustomer } from "../store/actions/UpdateDetailsAction";

function UpdateDetails() {

  const customer = useSelector(state => state.updateDetailsReducer.customer);
  
  const dispatch = useDispatch();


  const [cId, setcId] = useState(customer.customerId);
  const [cName, setcName] = useState(customer.customerName);
  const [cPhone, setcPhone] = useState(customer.customerPhone);
  const [cEmail, setcEmail] = useState(customer.customerEmail);
  const [cAddress, setcAddress] = useState(customer.customerAddress);

  const [updateDetailsErrors, setupdateDetailsErrors]=useState({});

  const handleSubmit = () => {

    let errors={};

    if(!cId){
      errors['customerIdError']= "customer id is required"
    }
    if(!cName){
      errors['customerNameError']= "customer name is required"
    }
    if(!cPhone){
      errors['customerNumberError']= "customer Number is required"
    }
    if(!cEmail){
      errors['customerEmailError']= "customer email is required"
    }
    if(!cAddress){
      errors['customerAddressError']= "customer address is required"
    }

    setupdateDetailsErrors(errors);

    const noErrors =Object.keys(errors).length===0;
    if(noErrors){
      const payload = {


        customerId: cId,
        customerName: cName,
        customerPhone: cPhone,
        customerEmail: cEmail,
        customerAddress: cAddress,
        
      }
  
      dispatch(updateCustomer(payload));
      alert("customer Details Updated.");
    }
  }

  const handleCancel = () => {
    setcId("");
    setcName("");
    setcPhone("");
    setcEmail("");
    setcAddress("")
  }
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="container" style={{ margin: "60px" }}>
        <div style={{ backgroundColor: "#2e2d2e", color: "#eb5e5f" }} >
          <h2>Update Details</h2></div>
        <div className="form-group">
          <label htmlFor="customerId">CustomerId</label>
          <input
            type="text"
            className="form-control"
            name="cId"
            value={cId}
            onChange={e => setcId(e.target.value)}
          />
           
        {
           updateDetailsErrors.customerIdError&&
           <div style={{color:"red"}}>{updateDetailsErrors.customerIdError} </div>
        }
        </div>
       
    
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={cName}
            onChange={e => setcName(e.target.value)}
          />
           {
           updateDetailsErrors.customerNameError&&
           <div style={{color:"red"}}>{ updateDetailsErrors.customerNameError} </div>
        }
        </div>
       

        <div className="form-group">
          <label htmlFor="email">CustomerEmail</label>
          <input
            type="text"
            className="form-control"
            name="cEmail"
            value={cEmail}
            onChange={e => setcEmail(e.target.value)}
          />
           {
           updateDetailsErrors.customerNumberError&&
           <div style={{color:"red"}}>{ updateDetailsErrors.customerNumberError} </div>
        }
        
        </div>
       
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={cAddress}

              onChange={e => setcAddress(e.target.value)}
          />
           {
           updateDetailsErrors.customerAddressError&&
           <div style={{color:"red"}}>{ updateDetailsErrors.customerAddressError} </div>
        }
        </div>
       

        <div className="form-group">
          <label htmlFor="phone">Phone No.</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={cPhone}
            onChange={e => setcPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit} style={{ marginRight: "15px" }}>Update</button>
      
          <button class="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
      </div>
    </div>
  );
}

export default UpdateDetails;
