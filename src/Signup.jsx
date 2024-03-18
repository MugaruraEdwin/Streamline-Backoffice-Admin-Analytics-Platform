import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import '../public/css/signup.css';
import '../public/css/site.css';
import '../public/fonts/font-awesome/css/font-awesome.css';
import '../public/fonts/open-sans/open-sans.css';
import '../public/lib/inspinia/inspinia.css';
import '../public/lib/inspinia/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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


        if (password === '') {
            setPasswordError('Password is required');
            return;
        } else if (!passwordRegex.test(password)) {
            setPasswordError('Password is weak.');
            return;
        } else {
            setPasswordError('');
        }


        if (password !== confirmpassword) {
            setConfirmPasswordError('Passwords do not match');
            return;
        } else {
            setConfirmPasswordError('');
        }

        // If all validations pass, send the request
        axios.post('https://streamline-backend-004.azurewebsites.net/register', { firstname, lastname, email, role, password, confirmpassword })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="gray-bg">
        <div className="flex-column">
          <div className="flex-row-30">
            <div className="flex-logo">
              <img src="/images/streamline-logo.svg" alt="Streamline Logo" />
            </div>
            <div className="flex-info">
              <img
                className="fav"
                src="/images/streamline-asterick.svg"
                alt="Streamline Asterisk"
              />
              <h2>
                Facilitates seamless back-office management, planning, and
                scheduling, ensuring the delivery of uncompromising quality, right
                on time.
              </h2>
            </div>
          </div>
  
          <div className="flex-row-70">
            <div></div>
            <div className="middle-box loginscreen animated fadeInDown">
              <div className="signin-page">
                <div className="login-sub-heading">
                  <h3 className="text-center title">STREAMLINE BACKOFFICE</h3>
                  <p>Enter your credentials to signup for Streamline BackOffice</p>
                </div>
                <form
                  className="m-t-xs"
                  role="form"
                  id="login-form"
                  onSubmit={handleSubmit} // Added form submission handling
                >
                  <input
                    type="hidden"
                    id="ReturnUrl"
                    name="ReturnUrl"
                    value="/"
                  />
                  <div className="validation-alert-wrapper"></div>
                  <div className="form-group signin-form m-b-sm">
                    <label className="control-label" htmlFor="Firstname">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      autoFocus
                      id="firstname"
                      name="firstname"
                      value={firstname} // Added value and onChange handlers
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {firstNameError && <span className="alert alert-danger mt-3" id="firstnameerror">{firstNameError}</span>}
                  </div>
                  <div className="form-group signin-form m-b-sm">
                    <label className="control-label" htmlFor="Lastname">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                   
                      id="lastname"
                      name="lastname"
                      value={lastname} // Added value and onChange handlers
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {lastNameError && <span  className="alert alert-danger mt-3" id="lastnameerror">{lastNameError}</span>}
                  </div>
                  <div className="form-group signin-form m-b-sm">
                    <label className="control-label" htmlFor="Username">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                     
                      id="email"
                      name="email"
                      value={email} // Added value and onChange handlers
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <span  className="alert alert-danger mt-3" id="emailerror">{emailError}</span>}
                  </div>
                  <div className="form-group signin-form m-b-sm">
                    <label htmlFor="role" className="control-label">
                    Role
                    </label>
                    {/* <input
                      type="text"
                      className="form-control"
                      autoFocus
                      id="email"
                      name="email"
                      value={email} // Added value and onChange handlers
                      onChange={(e) => setEmail(e.target.value)}
                    /> */}
                    <select id="role" className="form-select" style={{height: '45px', backgroundColor: '#F9F9F9', border: '1px solid #C4C4C4', borderColor: '#F4F4F4', fontSize: '13px'}} aria-label="Role" name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">Choose User Role ...</option>
                        <option value="user">Operational User</option>
                        <option value="admin">Admin</option>
                    </select>
                    {roleError && <span  className="alert alert-danger mt-3" id="roleerror">{roleError}</span>}
                  </div>
                  <div className="form-group signin-form m-b-sm">
                    <label className="control-label" htmlFor="Password">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      autoComplete="off"
                      id="password"
                      name="password"
                      value={password} // Added value and onChange handlers
                      onChange={(e) => setPassword(e.target.value)}
                    />
                     {passwordError && <span  className="alert alert-danger mt-3" id="passworderror">{passwordError}</span>}
                  </div>
                  <div className="form-group signin-form m-b-sm">
                    <label className="control-label" htmlFor="confirmpassword">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      autoComplete="off"
                      id="confirmpassword"
                      name="confirmpassword"
                      value={confirmpassword} // Added value and onChange handlers
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                     {confirmPasswordError && <span  className="alert alert-danger mt-3" id="confirmpassworderror">{confirmPasswordError}</span>}
                  </div>
  
                  <div className="row m-t-lg last-item">
                    {/* <div className="col-6 m-t-sm forgot-password-wrapper">
                      <a id="forgot-password" href="/account/ForgotPassword">
                        {/* <p>Forgot password?</p> */}
                      {/* </a>
                    </div> */} 
                    {/* <div className="col-6 signin-wrapper"> */}
                      <button
                        className="btn btn-outline btn-link"
                        id="login-button"
                        name="button"
                        value="login"
                        type="submit" // Changed type to submit
                      >
                        Sign up
                      </button>
                    {/* </div> */}
                  </div>
  
                  <input
                    name="__RequestVerificationToken"
                    type="hidden"
                    value="CfDJ8MV0BklDqDVPkrqlu-B5OAD0q5RnwBZQeiKEDmGOEttji6JOj_KRs3vWMV3MIPrK4A6CCWBJ_KiQUHNnLP-Yy5HF2xzMnlvmnzWbXAmnbtQdMcRzkdionE_tN5j2pCfxhnSYduLpbozpPWHhj5z42yc"
                  />
                </form>
              </div>
            </div>
            <div className="tagline m-b-sm">
              <div className="m-t-sm text-muted" id="tagline-text">
                <p>BackOffice by Laboremus Uganda Limited</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Signup;

