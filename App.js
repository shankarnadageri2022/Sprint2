
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Enquiry from './components/Enquiry';
import Service from './components/Service';
import ServiceRequest from './components/ServiceRequest';
import EnquiryResponse from './components/EnquiryResponse';
import Customer from './components/Customer';
import CustomerDashboard from './components/CustomerDashboard';
import UpdateDetails from './components/UpdateDetails';
import ChangePassword from './components/ChangePassword';
import RecoverPassword from './components/RecoverPassword';
import FetchAllServices from './components/FetchAllServices';

function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/enquiry" element={<Enquiry/>}/>
          <Route path="/enquiryresponse" element={<EnquiryResponse/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/service/fetchallservices" element={<FetchAllServices/>}/>
          <Route path="/servicerequest" element={<ServiceRequest/>}/>
          <Route path="/customer" element={<Customer/>}/>
          <Route path="/customerdashboard" element={<CustomerDashboard/>}/>
          <Route path="/customerdashboard/updatedetails"  element={<UpdateDetails/>}/>
          <Route path="/customerdashboard/changepassword" element={<ChangePassword/>}/>
          <Route path="/customerdashboard/recoverpassword" element={<RecoverPassword/>}/>

          
        </Routes>
      </Router>
      
    </div>

    
  );
}

export default App;
