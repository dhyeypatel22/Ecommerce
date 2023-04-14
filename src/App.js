import './App.css';
import "./Style.css";
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import Footer from './Components/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Blog from './Components/Blog';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Sproduct from './Components/Sproduct';
import SignUp from './Components/SignUp';
import Order from './Components/Order';
import CreateAcc from './Components/CreateAcc';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/sproduct' element={<Sproduct />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/order' element={<Order />} />
        <Route exact path='/create' element={<CreateAcc />} />
      </Routes>  
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
