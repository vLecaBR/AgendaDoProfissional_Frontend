// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Bookings from './pages/Bookings/Bookings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/agendamentos' element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
