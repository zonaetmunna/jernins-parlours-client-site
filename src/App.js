import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AllService from './Pages/AllService/AllService';
import BookingList from './Pages/Dashboard/BookingList/BookingList';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import PlaceOrder from './Pages/Home/PlaceOrder/PlaceOrder';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
            <Route path="/allServices" element={<AllService></AllService>}></Route>
            <Route path="/placeOrder/:id" element={<PrivateRoute><PlaceOrder></PlaceOrder></PrivateRoute>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
              <Route exact path="/dashboard" element={<BookingList></BookingList>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div >
  );
}

export default App;
