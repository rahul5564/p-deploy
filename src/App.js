import { Routes, Route } from "react-router-dom";
import { Like } from "./Pages/Components/like";
import { Cart } from "./Pages/Components/cart";
import { Intro } from "./Pages/Intro/Intro";
import { Main } from "./Main";
import Signup from "./Pages/Components/Login.js/Signin";
import Login from "./Pages/Components/Login.js/signup";
import { Details } from "./Pages/Components/Login.js/loginInfo/details";
import { Address } from "./Pages/Components/Login.js/loginInfo/address";
import "./Styles.css"

function App() {
  return (  
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Like" element={<Like />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Address" element={<Address />} />
      </Routes>
    </div>
  );
}

export default App;
