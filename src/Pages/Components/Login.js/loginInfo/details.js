import { Userprofile } from "../userProfile"
import { useContext } from "react";
import { CartContext } from "../../../cartProvider.js/card";
import { Navbar } from "../../Navbar/Navbar";
import "../signin.css";
import {Link } from "react-router-dom";

export const Details = () => {
  const {formData ,loginInfo} = useContext(CartContext);
    return(
        <div>
            <Navbar/>
            <div>
            <h1 className="head">Account Details</h1>
        <div className="details container">
        <Userprofile/>
        <h2 className="head-sub head"><b>Profile Details</b></h2>
        <br/>
        <div className="details-info">
            <div><b>Full Name </b> {formData.name}</div> 
            <div><b>Email </b>{formData.email}</div> 
        </div>
        <h2  className="head-sub head">Account Settings</h2>
        <br/>
        <button onClick={() => loginInfo(false)} className="head logout"><Link to="/Login">Logout</Link></button>
        </div>
        </div>
        </div>
    )
}