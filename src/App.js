import "./App.css";
import "./Style.css";
import Main from "./Components/Main";
import Shop from "./Components/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Sproduct from "./Components/Sproduct";
import SignUp from "./Components/SignUp";
import Order from "./Components/Order";
import CreateAcc from "./Components/CreateAcc";
import ScrollToTop from "./Components/ScrollToTop";
import Spro1 from "./Components/Spro1";
import Spro2 from "./Components/Spro2";
import Spro3 from "./Components/Spro3";
import Spro4 from "./Components/Spro4";
import Spro5 from "./Components/Spro5";
import Spro6 from "./Components/Spro6";
import Spro7 from "./Components/Spro7";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/sproduct" element={<Sproduct />} />
          <Route exact path="/spro1" element={<Spro1 />} />
          <Route exact path="/spro2" element={<Spro2 />} />
          <Route exact path="/spro3" element={<Spro3 />} />
          <Route exact path="/spro4" element={<Spro4 />} />
          <Route exact path="/spro5" element={<Spro5 />} />
          <Route exact path="/spro6" element={<Spro6 />} />
          <Route exact path="/spro7" element={<Spro7 />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/create" element={<CreateAcc />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
