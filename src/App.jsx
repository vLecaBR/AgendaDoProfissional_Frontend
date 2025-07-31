// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // import do provider
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Bookings from './pages/Bookings/Bookings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;


function App() {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/bookings' element={<Bookings />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
