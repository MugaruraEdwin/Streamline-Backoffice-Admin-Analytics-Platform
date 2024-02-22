
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
        axios.post('http://localhost:3000/login', { email, password })
            .then(result => {
                if (result.data === "Success") {
                    navigate('/home');
                } else {
                    setError(result.data); // Set error message received from the server
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <div className="row" id="form-height">
                <div className="col-sm-8 margin" id="back-img">
                    <p id="para-0"><span id="smart">STREAMLINE BackOffice Analytics Admin Platform </span> Facilitates seamless back-office management, planning, and scheduling, ensuring the delivery of uncompromising quality, right on time.</p>
                </div>
                <div className="col-sm-4 margin">
                    <h2>Login</h2>
                    <form name="signup_form" id="signup_form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address<span className="red">*</span></label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
                            <span className="error" id="emailerror">{error && error}</span> {/* Display error message */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password<span className="red">*</span></label>
                            <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                            <span className="error" id="passworderror"></span>
                        </div>
                        <button type="submit" className="btn btn-outline-warning form-width" id="submit" name="submit">Login</button>
                        <p className="account">Don't have an account? <Link to="/register">Signup</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
