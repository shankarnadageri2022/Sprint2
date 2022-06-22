import React from "react";
import CustomerNavBar from "./NavBar/CustomerNavBar";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { changePassword } from "../store/actions/ChangePasswordAction";
// import { changePassword } from "../store/actions/ChangePasswordAction"


function ChangePassword() {

  //const loggedInUser = useSelector(state => state.authenticationReducer.loggedInUser)

  const cgPassword = useSelector(state => state.authenticationReducer.cgPassword)

  const navigate = useNavigate();

  const dispatch = useDispatch();



  const [cId, setcName] = useState("");

  const [cOldPass, setcOldPass] = useState("");

  const [cNewPassword, setcNewPassword] = useState("");

  const [PasswordErrors,setPasswordErrors]=useState({});


  const handleSubmit = ()=> {

    let errors={};

    if(!cId){
      errors['customerIdError']= "customer id is required"
    }

    if(!cOldPass){
      errors['customerOldPasswordError']= "customer old password is required"
    }

    if(!cNewPassword){
      errors['customerNewPasswordError']= "customer new password is required"
    }

    setPasswordErrors(errors);
    const noErrors =Object.keys(errors).length===0;
    if(noErrors){
      const payload = {

        customerId: cId,
        oldPassword: cOldPass,
        newPassword: cNewPassword,
  
      }
  
      dispatch(changePassword(payload));
  
      alert("Password changed Sucessfully! ");
  
      navigate(-1);
    }
    

  }

  return (
    <div>
      <CustomerNavBar />
      <div className="container" style={{ marginTop: "70px" }}>

        <h2>Change Password</h2>
        <div>
          <form>
            <div className="form-group">
              <label htmlFor="name">Customer ID</label>
              <input type="text" className="form-control" name="cId" value={cId} onChange={e => setcName(e.target.value)} />
            </div>
            {
             PasswordErrors.customerIdError&&
             <div style={{color:"red"}}>{PasswordErrors.customerIdError} </div>
            }
            <div className="form-group">
              <label htmlFor="name">Old Password</label>
              <input type="text" className="form-control" name="oName" value={cOldPass} onChange={e => setcOldPass(e.target.value)} />
            </div>
            {
             PasswordErrors.customerOldPasswordError&&
             <div style={{color:"red"}}>{PasswordErrors.customerOldPasswordError} </div>
            }

            <div className="form-group">
              <label htmlFor="name">New Password</label>
              <input type="text" className="form-control" name="nName" value={cNewPassword} onChange={e => setcNewPassword(e.target.value)} />
            </div>
            {
             PasswordErrors.customerNewPasswordError&&
             <div style={{color:"red"}}>{PasswordErrors.customerNewPasswordError} </div>
            }
            <button onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
              style={{ marginRight: "15px" }}
            >
              Change
            </button>
            <button type="reset" className="btn btn-secondary">
              Cancel
            </button>
          </form>
        </div></div>
    </div>
  );
}

export default ChangePassword;

