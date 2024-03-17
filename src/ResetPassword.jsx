
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../public/css/site.css';
import '../public/fonts/font-awesome/css/font-awesome.css';
import '../public/fonts/open-sans/open-sans.css';
import '../public/lib/inspinia/inspinia.css';
import '../public/lib/inspinia/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ResetPassword() {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newConfirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*]).{8,}$/;
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        // Validation logic
        if (email === '') {
            setEmailError('Email address is required');
            return;
        } else if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
            return;
        } else {
            setEmailError('');
        }

        if (newPassword === '') {
            setPasswordError('Password is required');
            return;
        } else if (!passwordRegex.test(newPassword)) {
            setPasswordError('Password is weak.');
            return;
        } else {
            setPasswordError('');
        }

        // Check if passwords match
        if (newPassword !== newConfirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Send email to check existence in the database
        axios.post('https://streamline-backend-004.azurewebsites.net/forgot-password', { email })
            .then(response => {
                if (response.data.success) {
                    // If email exists, proceed to reset password
                    axios.post('https://streamline-backend-004.azurewebsites.net/reset-password', { email, newPassword, newConfirmPassword})
                        .then(response => {
                            if (response.data.success) {
                                setSuccess(true); // Password reset successful
                            } else {
                                setError(response.data.message); // Set error message received from the server
                            }
                        })
                        .catch(err => {
                            setError("An error occurred. Please try again later.");
                            console.error("Error:", err);
                        });
                } else {
                    setError(response.data.message); // Set error message received from the server
                }
            })
            .catch(err => {
                setError("An error occurred. Please try again later.");
                console.error("Error:", err);
            });
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
                  <p>Enter your credentials to reset Password</p>
                </div>
              {success ? (
                        <div className="alert alert-success" role="alert">
                            Password reset successful. <Link to="/">Login</Link> with your new password.
                        </div>
                    ) : (
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
                    <label className="control-label" htmlFor="Username">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      autoFocus
                      id="email"
                      name="email"
                      value={email} // Added value and onChange handlers
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="error" id="emailerror">{emailError}</span>
                  </div>
                  <div className="form-group signin-form m-b-sm">
                    <label className="control-label" htmlFor="New Password">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      autoComplete="off"
                      id="newPassword"
                      name="newPassword"
                      value={newPassword} // Added value and onChange handlers
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group signin-form m-b-sm">
                    <label className="control-label" htmlFor="New Confirm Password">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      autoComplete="off"
                      id="newConfirmPassword"
                      name="newConfirmPassword"
                      value={newConfirmPassword} // Added value and onChange handlers
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
  
                  <div className="row m-t-lg last-item">
                    {/* <div className="col-6 signin-wrapper"> */}
                      <button
                        className="btn btn-outline btn-link"
                        id="login-button"
                        name="button"
                        value="login"
                        type="submit" // Changed type to submit
                      >
                        Reset Password
                      </button>
                    {/* </div> */}
                  </div>
  
                  <input
                    name="__RequestVerificationToken"
                    type="hidden"
                    value="CfDJ8MV0BklDqDVPkrqlu-B5OAD0q5RnwBZQeiKEDmGOEttji6JOj_KRs3vWMV3MIPrK4A6CCWBJ_KiQUHNnLP-Yy5HF2xzMnlvmnzWbXAmnbtQdMcRzkdionE_tN5j2pCfxhnSYduLpbozpPWHhj5z42yc"
                  />
                {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}
                </form>
                    )}
              </div>
            </div>
            <div className="tagline m-b-sm">
              <div className="m-r-sm">
                <a
                  href="https://www.laboremus.ug/products/identity-verification"
                  className="tagline-links"
                >
                  About
                </a>
                <a
                  href="https://www.laboremus.ug/contact-us"
                  className="tagline-links m-l-xs"
                >
                  Support
                </a>
                <a
                  href="https://www.laboremus.ug/legal"
                  className="tagline-links m-l-xs"
                >
                  Legal
                </a>
              </div>
              <div className="m-t-sm text-muted" id="tagline-text">
                <p>BackOffice by Laboremus Uganda Limited</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ResetPassword;
