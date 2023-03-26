
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Product from './components/product/Product';
import JoinWhatsapp from './components/JoinWhatsapp/JoinWhatsapp';
import { Route,Routes } from 'react-router-dom';
import {Bootstrap} from 'react-bootstrap'

function App() {
  return (
    <div>
      <NavBar/>  
      <Routes>
           <Route path="/" element={<Home/>}></Route>
            <Route path="/Product" element={<Product/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
      <JoinWhatsapp/>
    </div>
      
  );
}

export default App;
