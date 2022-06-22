import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {getServiceStatus} from '../store/actions/GetAllServicesActions';
import {useDispatch} from 'react-redux';
import NavBar from './NavBar/NavBar';

function Status() {

    const serviceRequest=useSelector(state=>state.serviceReducer.serviceRequest)
    const dispatch= useDispatch();

    const myFunction=async()=>{
        dispatch(getServiceStatus())
    };

    useEffect(()=>{
        myFunction();},[]);
    

    return (
        <div>

            <NavBar/>

            <div className='container' style={{marginTop:"70px"}}>
            <h2 style={{ backgroundColor: "lightblue" }}>All Service Status</h2><br></br>
            {   
                    <table border="1" align='center'>
                        <tr>
                           
                            <th>ServiceRequest Id</th>
                            <th>Vechile Name</th>
                            <th>Service Name</th>
                            <th>Status</th>
                            <th>Amount</th>
                            
                            
                        </tr>
                        {
                            serviceRequest.map((t, index) =>
                                <tr key={index}>
                                    
                                    <td>{t.serviceRequestId}</td>
                                    <td>{t.vehicleName}</td>
                                    <td>{t.serviceListId}</td>
                                    <td>{t.status}</td>
                                    <td>{t.totalAmount}</td>
                                
                                </tr>
                                
                            )
                        }
                    </table>
                  
                    }  

                    </div>      
        </div>
        )
    }
    export default Status;