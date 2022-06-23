import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addService } from "../store/actions/GetAllServicesActions";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
function ServiceRequest() {

  const [cId, setCId] = useState("");
  const [sCategory, setCategory] = useState("");
  const [sModel, setModel] = useState("");
  const [sVehicleName, setVehicleName] = useState("");
  const [sBrand, setBrand] = useState("");

  const [formErrors, setFormErrors] = useState({});

  const { id } = useParams();

  const newService = useSelector((state) => state.serviceReducer.newService);

  const dispatch = useDispatch();
  const navigate=useNavigate();


  const handleSubmit = (event) => {
  
    //validate data

    let errors = {};
    if (!cId) {
      errors['customerIdError'] = "Customer Id is required";

    }
    if (!sCategory) {
      errors['categoryError'] = "Category is required";
    }

    if (!sModel) {
      errors['modelError'] = "Model is required";
    }
    if (!sBrand) {
      errors['brandError'] = "Brand is required";
    }
    if (!sVehicleName) {
      errors['vehicleNameError'] = "vehicle Name is required";
    }

    setFormErrors(errors);

    const noErrors = Object.keys(errors).length === 0;



    event.preventDefault();

    if (noErrors) {
      console.log("Valid form data");
      const payload = {


        category: sCategory,
        model: sModel,
        vehicleName: sVehicleName,
        brand: sBrand,
        serviceListId: id
      }


      dispatch(addService(cId, payload));
  
      navigate(-1);
    }

    
  };
  const handleCancel = () => {
    setCId("");
    setCategory("");
    setModel("");
    setVehicleName("");
    setBrand("");
  }


  return (
    <div className="container">
      <div>
        <NavBar />
      </div>
      <div style={{ margin: "60px" }}>
        <form>
          <div
            className="container"
            style={{ width: "70%", backgroundColor: "#e8e3e3" }}
          >
            <div style={{ backgroundColor: "#2e2d2d", color: "#eb5e5e" }}>
              <h2>Service Form</h2>
            </div>
            <br />
            <div className="form-group">

              <label htmlFor="cId">CustomerId</label>
              <input
                type="text"
                className="form-control"
                name="cId"
                value={cId}
                onChange={(e) => setCId(e.target.value)}
              />
              {
                formErrors.customerIdError && <div style={{ color: 'red' }}>{formErrors.customerIdError}</div>
              }
            </div>

            <div className="form-group">

            <label htmlFor="category">Category</label><br/>

              <select class="form-select" aria-label="category"  value={sCategory} onChange={(e) => setCategory(e.target.value)}>
              <option value="">--Select--</option>  
                <option selected>Two Wheeler</option>

                <option value="1">Three Wheeler</option>

                <option value="2">Four Wheeler</option>

              </select>

              {
                formErrors.categoryError && <div style={{ color: 'red' }}>{formErrors.categoryError}</div>
              }

            </div>
            <div className="form-group">
              <label htmlFor="model">Model</label>
              <input
                type="text"
                className="form-control"
                name="model"
                value={sModel}
                onChange={(e) => setModel(e.target.value)}
              />
              {
                formErrors.modelError && <div style={{ color: 'red' }}>{formErrors.modelError}</div>
              }
            </div>
            <div className="form-group">
              <label htmlFor="vName">Vechile Name</label>
              <input
                type="text"
                className="form-control"
                name="vName"
                value={sVehicleName}
                onChange={(e) => setVehicleName(e.target.value)}
              />
              {
                formErrors.vehicleNameError && <div style={{ color: 'red' }}>{formErrors.vehicleNameError}</div>
              }
            </div>
            <div className="form-group">
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                className="form-control"
                name="brand"
                value={sBrand}
                onChange={(e) => setBrand(e.target.value)}
              />

              {
                formErrors.brandError && <div style={{ color: 'red' }}>{formErrors.brandError}</div>
              }
            </div>

            <button
              onClick={handleSubmit}
              className="btn btn-primary"
              style={{ marginRight: "15px" }}
            >
              Submit
            </button>

            <button type="reset" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ServiceRequest;
