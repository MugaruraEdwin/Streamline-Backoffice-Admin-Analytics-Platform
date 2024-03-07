import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../public/css/signup.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [roleError, setRoleError] = useState(''); 
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const navigate = useNavigate();

    const nameRegex = /^[A-Z][a-z]+$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*]).{8,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic
        if (password === '') {
            setPasswordError('Password is required');
            return;
        } else if (!passwordRegex.test(password)) {
            setPasswordError('Password is weak.');
            return;
        } else {
            setPasswordError('');
        }

        if (firstname === '') {
            setFirstNameError('First name is required');
            return;
        } else if (firstname.length < 2 || firstname.length > 15 || !nameRegex.test(firstname)) {
            setFirstNameError('Invalid first name');
            return;
        } else {
            setFirstNameError('');
        }

        if (lastname === '') {
            setLastNameError('Last name is required');
            return;
        } else if (lastname.length < 2 || lastname.length > 15 || !nameRegex.test(lastname)) {
            setLastNameError('Invalid last name');
            return;
        } else {
            setLastNameError('');
        }

        if (email === '') {
            setEmailError('Email address is required');
            return;
        } else if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
            return;
        } else {
            setEmailError('');
        }

        if (role === '') {
            setRoleError('Please select a role');
            return;
        } else {
            setRoleError('');
        }

        if (password !== confirmpassword) {
            setConfirmPasswordError('Passwords do not match');
            return;
        } else {
            setConfirmPasswordError('');
        }

        // If all validations pass, send the request
        axios.post('https://streamline-admin-analytics-platform.azurewebsites.net/register', { firstname, lastname, email, role, password, confirmpassword })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container" id="signup_form">
         <div id="laboremus"><img id="laboremus_logo" src="../public/images/Laboremus_logo.png"></img></div>
            <div className="row" id="form-height">
                <div className="col-sm-8 margin" id="back-img">
                    <p id="para-0"><span id="smart">STREAMLINE BACKOFFICE </span> Facilitates seamless back-office management, planning, and scheduling, ensuring the delivery of uncompromising quality, right on time.</p>
                </div>
                <div className="col-sm-4 margin">
                    {/* <h2>Create an account</h2> */}
                    <form name="signup_form" id="signup_form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstname">First Name<span className="red">*</span></label>
                            <input type="text" className="form-control" id="firstname" placeholder="Enter First Name" name="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                            <span className="error" id="firstnameerror">{firstNameError}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name<span className="red">*</span></label>
                            <input type="text" className="form-control" id="lastname" placeholder="Enter Last Name" name="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                            <span className="error" id="lastnameerror">{lastNameError}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address<span className="red">*</span></label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span className="error" id="emailerror">{emailError}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role<span className="red">*</span></label>
                            <select id="role" className="form-select" aria-label="Role" name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="">Choose User Role ...</option>
                                <option value="user">Operational User</option>
                                <option value="admin">Admin</option>
                            </select>
                            <span className="error" id="roleerror">{roleError}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password<span className="red">*</span></label>
                            <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span className="error" id="passworderror">{passwordError}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmpassword">Confirm Password<span className="red">*</span></label>
                            <input type="password" className="form-control" id="confirmpassword" placeholder="Retype Password" name="confirmpassword" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <span className="error" id="confirmpassworderror">{confirmPasswordError}</span>
                        </div>
                        <button type="submit" className="btn btn-outline-custom form-width" id="submit" name="submit">Create Account</button>
                        {/* <button className="btn btn-light form-width google">Sign Up with <span id="g-1">G</span><span id="o-1">o</span><span id="o-2">o</span><span id="g-2">g</span><span id="l">l</span><span id="e">e</span></button> */}
                    </form>
                    {/* <p className="account">Already have an account? <Link to="/">Login</Link></p> */}
                </div>
            </div>
        </div>
    );
}

export default Signup;

