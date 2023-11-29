import React from "react";
import {Container,Form,Button} from  "react-bootstrap";
import "./signin.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import { Details } from "./loginInfo/details";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../cartProvider.js/card";
import { Navbar } from "../Navbar/Navbar";

export const Signup = () => {
  const {  handleChange,formData,Login,loginInfo } = useContext(CartContext);

    const handleSubmit = async(e) => {
        e.preventDefault()
    }

    return(
        <div>
            {!Login ? 
            <div>
            <Navbar/>            
        <Container className="container">
            <h1 className="head">Registration Form</h1>
            <Form onSubmit={handleSubmit} className="form">
            <Form.Group className="group">
                <Form.Label>Name</Form.Label><br/>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required/>
            </Form.Group>
            <Form.Group className="group">
                <Form.Label>Email</Form.Label><br/>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange}  required/>
            </Form.Group>
            <Form.Group className="group">
                <Form.Label>Password</Form.Label><br/>
                <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required/>
            </Form.Group>
            <div className="btn">
            <Link to="/Main">
            <Button variant="primary" type="submit" onClick={() => loginInfo(true)}>Register</Button>
            </Link>
            <br/>
            <br/>
            <span className="span-link">Already have an account?<Link to="/Login" className="span-link">Login</Link></span>
            </div> 
            </Form>
        </Container>
        </div>
        :
        <Details/>
     }
        </div>
    )
}

export default Signup;