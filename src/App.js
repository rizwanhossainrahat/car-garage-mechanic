import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Log in/Log in/Login';
import PrivateRoute from './Pages/Log in/PrivateRoute/PrivateRoute';
import ManageServices from './Pages/ManageServices/ManageServices';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/booking/:serviceId" element={<PrivateRoute><Booking /></PrivateRoute>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/addservice" element={<AddService />}/>
        <Route path="/manageservices" element={<ManageServices />}/>
        <Route exact path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
