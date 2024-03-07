
import React, { useState } from "react";
import '../public/css/signup.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:3000/login', { email, password })
            .then(result => {
                if (result.data.status === "Success") {
                    if (result.data.role === "admin") {
                        navigate('/admin');
                    } else {
                        navigate('/home');
                    }
                } else {
                    setError(result.data); // Set error message received from the server
                }
            })
            .catch(err => console.log(err));
    }

    const handleForgotPassword = () => {
        axios.post('https://streamline-admin-analytics-platform.azurewebsites.net/forgot-password', { email })
            .then(response => {
                if (response.data.success) {
                    // Redirect to a page to reset the password
                    navigate('/reset-password');
                } else {
                    setError(response.data.message); // Set error message received from the server
                }
            })
            .catch(err => console.log(err));
            
    }

    return (
        <div className="container">
            <div id="laboremus"><img id="laboremus_logo" src="/images/Laboremus_logo.png"></img></div>
            <div className="row" id="form-height">
                <div className="col-sm-7 margin" id="back-img">
                    <p id="para-0"><span id="smart">STREAMLINE BACKOFFICE </span> Facilitates seamless back-office management, planning, and scheduling, ensuring the delivery of uncompromising quality, right on time.</p>
                </div>
                <div className="col-sm-5 margin">
                    {/* <h2 id="title-1">Login</h2> */}
                    <form name="signup_form" id="signup_form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address<span className="red">*</span></label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password<span className="red">*</span></label>
                            <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                            <span className="error" id="emailerror">{error && error}</span> {/* Display error message */}
                        </div>
                        <button type="submit" className="btn btn-outline-custom form-width" id="submit" name="submit">Login</button>
                        {/* <button type="button" id="forgotPassword" className="btn btn-link" onClick={handleForgotPassword}>Forgot Password?</button> Forgot Password link/button */}
                    </form>
                    {/* <p className="account">Don't have an account? <Link to="/register">Signup</Link></p> */}
                </div>
            </div>
        </div>
    )
}

export default Login;