import React from "react";
import  './Login.css';
import {RiUser3Fill ,RiLockPasswordFill } from 'react-icons/ri';
import Newbar from "./Newbar";
import Footer from "./Footer";

const Newlogin =()=>{
    return(
      <>
     <Newbar/>
        <div className="wa">
        <div className="login">
            <h2 className="heading">
                LOGIN
            </h2>
            <form className="ff">
            <div className="login-form">
                <label htmlfor="username" className="form-label"><RiUser3Fill/>  Username</label>
                <input type="username" className="form-control" required></input>  
            </div>
            <div className="login-form">
                <label htmlfor="password"  className="form-label"> <RiLockPasswordFill/>  Password <a  href="ForgotPassword" className="pass">Forget Password</a>
                </label>
                <input type="password"  className="form-control" required></input>
            </div>
            <button type="Submit" className="button-login"><a href="Newlogin" alt="nothing">Submit</a></button>
            <div className="login-footer">
            <p>Don't have an account? <a href="Signup">Signup</a></p>
            </div>
            </form>
        </div>
   </div>
   <Footer/>
        </>
    )
}
export default Newlogin;
