
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div>
  <Navbar></Navbar>
  <Routes> 
    <Route path='/home' element = {<Home/>}/>
    <Route path ='/about' element = {<About/>}/>
  </Routes>

    </div>
  );
}

export default App;
