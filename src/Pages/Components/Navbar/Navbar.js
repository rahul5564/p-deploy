import "../Content/Content.css"
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../cartProvider.js/card";
import { UserSquare2} from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import "./navbar.css"
// import Signup from "./Signin.js/Signin";

export const Navbar = () => {
  const { CartItem, LikesItem ,Searchbar} = useContext(CartContext);
  return (
    <div className="Nav-main">
      <NavLink className="Nav-head" to="/">
        Icarus
      </NavLink>
      <input type="search" id="search1" placeholder="Search for product"   onChange={(e) => Searchbar(e)} />
      <NavLink className="nav" to="/Signup">
      <UserSquare2 size={38} color="#000000" />
      </NavLink>
      <NavLink className="nav" to="/Cart">
      <ShoppingCart size={38} color="#000000" />
        {CartItem.length === 0 ? "" : CartItem.length}
      </NavLink>
      <NavLink className="nav" to="/Like">
      <Heart size={38} color="#000000" />
        {LikesItem.length === 0 ? "" : LikesItem.length}
      </NavLink>{" "}
    </div>
  );
};
