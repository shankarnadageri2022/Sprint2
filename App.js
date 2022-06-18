import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ChangePassword from './components/ChangePassword';
import Home from './components/Home';
import ServiceNavBar from './components/ServiceNavBar';
import FetchAllServices from './components/FetchAllServices';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/home/service" element={<ServiceNavBar />} />
          <Route path="/fetch/all/service" element={<FetchAllServices />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
