import React from 'react';
import NavBar from './NavBar/NavBar';

function ServiceRequest(){
    return(
        <div >
            <div><NavBar/></div>
            <div style={{margin:"60px"}}>
            <form>
            <div className="container" style={{width:"70%",backgroundColor:"#e8e3e3"}}>
            <div style={{backgroundColor:"#2e2d2d",color:"#eb5e5e"}}>
                <h2>Service Form</h2>
            </div> <br/>
                <div className="form-group">
                    <label htmlFor='cName'>CustomerId</label>
                    <input type="text" className="form-control" name="cId" />
                </div>
                <div className="form-group">
                    <label htmlFor='category'>Category</label>
                    <input type="text" className="form-control" name="category" />
                </div>
                <div className="form-group">
                    <label htmlFor='model'>Model</label>
                    <input type="text" className="form-control" name="model" />
                </div>

                <div className="form-group">
                    <label htmlFor='vName'>Vechile Name</label>
                    <input type="text" className="form-control" name="vName" />
                </div>

                <div className="form-group">
                    <label htmlFor='brand'>Brand</label>
                    <input type="text" className="form-control" name="cId" />
                </div>
                <div className="form-group">
                    <label htmlFor='pName'>serviceId</label>
                    <input type="text" className="form-control" name="cId"  disabled/>
                </div>

                <button type="submit" className="btn btn-primary" style={{marginRight:"15px"}}>Submit</button>
                <button type="reset" className="btn btn-secondary">Cancel</button>




                
            
            </div>
            </form>
            </div>

        </div>
    )
}

export default ServiceRequest;