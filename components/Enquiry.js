import EnquiryNavBar from "./NavBar/EnquiryNavBar";
import {sendQuiry} from "../store/actions/EnquiryAction"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function Enquiry() {

  const [cId, setcId] = useState("");
  const [cEnquiry, setcEnquiry] = useState("");
  
 

  const enquiry = useSelector(state => state.enquiryReducer.enquiry)
  const dispatch = useDispatch();

  // const myFunction = async () => {
      
      
  //     but this function is not directly dispatching actions it returns middleware function, this middleware function returns dispatch action
  // };

 const  handleSubmit = () => {
  const payload = {
      customerId:cId ,
      enquiryText:cEnquiry
     
  }
  dispatch(sendQuiry(payload))
}
  
  return (
    <div>
      <EnquiryNavBar />

      <div className="container"  style={{ margin: "80px" }}>
        <form>
          <div style={{ backgroundColor: "#2e2d2d", color: "#eb5e5e" }}>
            <h2>Enquiry From</h2>{" "}
          </div>
          <br />
          <div className="form-group">
            <label for="formGroupExampleInput">
              <h4>CustomerId</h4>
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter CustomerId"
              name="cId" value={cId} onChange={e => setcId(e.target.value)}
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Your Query </span>
            </div>
            <textarea
              className="form-control"
              aria-label="With textarea"
              name="cEnquiry" value={cEnquiry} onChange={e => setcEnquiry(e.target.value)}
            ></textarea>
          </div>
          <br />
          <button
            type="submit"
            class="btn btn-primary"
            style={{ marginRight: "15px" }}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button type="reset" class="btn btn-secondary">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Enquiry;
