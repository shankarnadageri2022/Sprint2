import React from "react";
import NavBar from "./NavBar/NavBar";

function EnquiryResponse() {
  return (
    <div>
      
        <NavBar />
      

      <div className="container" style={{margin:"70px"}}>
        <h2>Your Query Response</h2>
      
      <form>
        <div className="form-group">
          <label htmlFor="pName">Query</label>
          <input type="text" className="form-control" name="cId" disabled />
        </div>
        <div className="form-group">
          <label htmlFor="pName">Response</label>
          <input type="text" className="form-control" name="cId" disabled />
        </div>
      </form>
    </div>
    </div>
  );
}

export default EnquiryResponse;
