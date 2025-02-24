import Navbar from './components/Navbar/Navbar';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Health from './Pages/Health';
import Schedule from './Pages/Schedule';
import Training from './Pages/Training';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Gain from './Pages/Gain';
function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<About category="about"/>}/>
      <Route path='/training' element={<Training category="train"/>}/>
      <Route path='/health' element={<Health category="healths"/>}/>
      <Route path='/schedule' element={<Schedule category="schedules"/>}/>
      <Route path='/login' element={<Login category="logins"/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/main' element={<Gain/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
