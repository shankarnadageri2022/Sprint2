import React from "react";
import NavBar from "./NavBar/NavBar";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { getResponse } from "../store/actions/EnquiryResponseAction"
import { Link } from "react-router-dom";
function EnquiryResponse() {
  const response = useSelector(state => state.enquiryResponse.response);
  const [eId, setEId] = useState("");
  const dispatch = useDispatch();

  const fetchResponseById = () => {
    console.log(eId);
    dispatch(getResponse(eId));
  }
  const handleCancel = () => {
    setEId("");

  }
  return (
    <div>

      <NavBar />


      <div className="container" style={{ margin: "70px" }}>
        <h2>Your Query Response</h2>

        <div className="form-group">

          <label htmlFor="name">Enquiry Id</label>
          <input type="text" className="form-control" name="cId" value={eId} onChange={e => setEId(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary" onClick={fetchResponseById} style={{ marginRight: "15px" }}>Recover</button>

        <button type="reset" className="btn btn-secondary" onClick={handleCancel}>Cancel </button>
      </div>
      {
        response !== null &&
        <div>
          <p>Enquiry Id :{response.enquiryId}</p>
          <p>Query :{response.query}</p>
          <p>Response :{response.response}</p>
          <p>Status :{response.status}</p>

        </div>
      }

      <div>
        <button type="button" class="btn btn-light"><Link to="/enquiry">Back</Link></button>
      </div>
    </div>
  );
}

export default EnquiryResponse;
