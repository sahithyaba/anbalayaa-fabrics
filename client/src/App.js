
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Product from './components/product/Product';
import JoinWhatsapp from './components/JoinWhatsapp/JoinWhatsapp';
import { Route,Routes } from 'react-router-dom';
import {Bootstrap} from 'react-bootstrap'
import Proforma from './components/proforma/Proforma';
import Invoice from './components/invoice/Invoice';
import Chat from './components/Chat';
import ImageUpload from './components/ImageUpload/ImageUpload';
import Admin from './pages/Admin';
import AboutUs from './components/AboutUs/AboutUs';
// import Login from './components/Login/Login'

function App() {
  return (
    <div>
      <NavBar/>  
      <Routes>
           <Route path="/" element={<Home/>}></Route>
            <Route path="/Product" element={<Product/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Invoice" element={<Invoice/>}></Route>
            <Route path="/Admin" element={<Admin/>}></Route>
            <Route path="/ImageUpload" element={<ImageUpload/>}></Route>
            <Route path="/AboutUs" element={<AboutUs/>}></Route>
      </Routes>
      <h6>Copyright @Anbalaya A Fabrics</h6>
      <JoinWhatsapp/>
      <Proforma/>
      {/* <ImageUpload/> */}
      {/* <Admin/> */}
      {/* <Login/> */}
      <Chat/>

    </div>
      
  );
}

export default App;
