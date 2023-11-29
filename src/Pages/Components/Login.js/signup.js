import React , {useState} from "react";
import {Container,Form,Button} from  "react-bootstrap";
import {useNavigate,Link} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../cartProvider.js/card";
import { Navbar } from "../Navbar/Navbar";
import { Details } from "./loginInfo/details";

const Login = () => {

  const {  handleChange,formData ,login,loginInfo} = useContext(CartContext);
  console.log("formdata",formData)

    const [Data,FormData] = useState({
        email:""
    })
    const navigate = useNavigate();

    // const handleChange = (e) =>{ 
    //     const {name,value} = e.target;
    //     setFormData({...formData,
    //         [name]: value,
    //     })
    // }

    const testCerdentails = () =>{
        formData.email = "dummy@gmail.com"
        formData.name = "Admin"
        FormData({
            ...Data, 
            email: "dummy@gmail.com"
          });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData,"frmm");
    }
    return(
        <div>
            {!login ? 
            <div>
        <Navbar/>
        <Container className="container">
            <h1 className="head">Sign In</h1>
            <Form onSubmit={handleSubmit} className="form">
            <Form.Group className="group">
                <Form.Label>Email</Form.Label><br/>
                <Form.Control type="email" name="email" value={Data.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="group">
                <Form.Label>Password</Form.Label><br/>
                <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
            </Form.Group>
            <div className="btn">
            <Link to="/Main" onClick={() => loginInfo(true)}>
            <Button variant="primary" type="submit" onClick={() => testCerdentails()}>Login with Test cerdentials</Button>
            </Link>
            <br/>
            <br/>
            <br/>
            <span className="span"><Link to="/Signup" className="span-link">Create New Account </Link></span>
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

export default Login;