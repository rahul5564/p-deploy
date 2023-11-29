import { Userprofile } from "../userProfile"
import {Link } from "react-router-dom";
import { Navbar } from "../../Navbar/Navbar";
import "../signin.css";
import AddressManager from "./adressManager";

export const Address = () => {
    return(
        <div>
             <Navbar/>
            <div>
            <h1 className="head">Account Details</h1>
        <div className="details container">
        <Userprofile/>
        <h2 className="head-sub head"><b>My Addresses</b></h2>
        <br/>
        <div className="address-Manager">
        <AddressManager/>
        </div>
        </div>
        </div>
        </div>
    )
}