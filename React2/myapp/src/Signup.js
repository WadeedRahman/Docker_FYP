import React, { useState } from "react";
import './Signup.css';
import { RiUser3Fill, RiLockPasswordFill, RiMailAddFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 /*
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Validate username
        const usernameRegex = /^(?=.*[a-z_])(?=.*[A-Z0-9_]).{4,15}$/;
    
        if (!usernameRegex.test(username)) {
          alert('Username must be 4-15 characters (letters, numbers, underscores)');
          return;
        }
    
        // Validate password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,9}$/;
        if (!passwordRegex.test(password)) {
          alert('Password must be 4-9 characters and include lowercase, uppercase, numbers, and symbols');
          return;
        }
    
        // If validations pass, you can proceed with login
        console.log('Login successful! Username:', username, 'Password:', password);
    
        // Clear username and password fields after successful login
        setUsername('');
        setPassword('');
      };*/




   const handleSignup = (event) => {
        event.preventDefault();

       
        const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*_)[a-zA-Z\d_]{4,15}$/;
        if (!usernameRegex.test(username)) {
            alert('Username must contain lowercase, uppercase, numbers, underscore, and be 4 to 15 characters long.');
            return;
        }

       
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,9}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must contain lowercase, uppercase, symbols, and be 4 to 9 characters long.');
            return;
        }

       
       
        console.log('Signup successful');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <>
            <Navbar />
            <div className="wa">
                <div className="signup">
                    <h2 className="heading">
                        SIGNUP
                    </h2>
                    <form className="ff" >
                        <div className="signup-form">
                            <label htmlFor="username" className="form-label">
                                <RiUser3Fill />
                                Username
                            </label>
                            <input
                                type="username"
                                className="form-control"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="signup-form">
                            <label htmlFor="email" className="form-label">
                                <RiMailAddFill /> Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="signup-form">
                            <label htmlFor="password" className="form-label">
                                <RiLockPasswordFill /> Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="signup-buton" onSubmit={handleSignup}>Submit</button>
                        <div className="signupform-footer">
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Signup;
