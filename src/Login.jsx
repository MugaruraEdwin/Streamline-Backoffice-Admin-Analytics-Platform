import React, { useState } from 'react';
// import '../public/css/signup.css';
import '../public/css/site.css';
import '../public/fonts/font-awesome/css/font-awesome.css';
import '../public/fonts/open-sans/open-sans.css';
import '../public/lib/inspinia/inspinia.css';
import '../public/lib/inspinia/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://streamline-backend-004.azurewebsites.net/login', {
        email,
        password,
      })
      .then((result) => {
        if (result.data.status === 'Success') {
          if (result.data.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/home');
          }
        } else {
          setError(result.data); // Set error message received from the server
        }
      })
      .catch((err) => console.log(err));
  };

  const handleForgotPassword = () => {
    axios
      .post(
        'https://streamline-backend-004.azurewebsites.net/forgot-password',
        { email }
      )
      .then((response) => {
        if (response.data.success) {
          // Redirect to a page to reset the password
          navigate('/reset-password');
        } else {
          setError(response.data.message); // Set error message received from the server
        }
      })
      .catch((err) => console.log(err));
  };

  const togglePassword = () => {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.textContent = 'Hide';
    } else {
      passwordInput.type = 'password';
      toggleButton.textContent = 'Show';
    }
  };

  return (
    // <div className="container">
    //     <div id="laboremus"><img id="laboremus_logo" src="/images/Laboremus_logo.png" alt="Laboremus Logo"></img></div>
    //     <div className="row" id="form-height">
    //         <div className="col-sm-7 margin" id="back-img">
    //             <p id="para-0"><span id="smart">STREAMLINE BACKOFFICE </span> Facilitates seamless back-office management, planning, and scheduling, ensuring the delivery of uncompromising quality, right on time.</p>
    //         </div>
    //         <div className="col-sm-5 margin">
    //             {/* <h2 id="title-1">Login</h2> */}
    //             <form name="signup_form" id="signup_form" onSubmit={handleSubmit}>
    //                 <div className="form-group">
    //                     <label htmlFor="email">Email address<span className="red">*</span></label>
    //                     <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
    //                 </div>
    //                 <div className="form-group">
    //                     <label htmlFor="password">Password<span className="red">*</span></label>
    //                     <div className="input-group">
    //                         <input type="password" className="form-control login_password" id="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
    //                         <div className="input-group-append">
    //                             <button className="btn btn-outline-secondary" type="button" id="togglePassword" onClick={togglePassword}>Show</button>
    //                         </div>
    //                     </div>
    //                     <span className="error" id="emailerror">{error && error}</span> {/* Display error message */}
    //                 </div>
    //                 <button type="submit" className="btn btn-outline-custom form-width" id="submit" name="submit">Login</button>
    //                 {/* <button type="button" id="forgotPassword" className="btn btn-link" onClick={handleForgotPassword}>Forgot Password?</button> Forgot Password link/button */}
    //             </form>
    //             {/* <p className="account">Don't have an account? <Link to="/register">Signup</Link></p> */}
    //         </div>
    //     </div>
    // </div>
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
                <p>Enter your credentials to access Streamline BackOffice</p>
              </div>
              {/* <form
              className="m-t-xs"
              role="form"
              id="login-form"
              action=""
              method="post"
            >
              <input type="hidden" id="ReturnUrl" name="ReturnUrl" value="/" />
              <div className="validation-alert-wrapper"></div>
              <div className="form-group signin-form m-b-sm">
                <label className="control-label" htmlFor="Username">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  autoFocus
                  required
                  data-val="true"
                  data-val-required="The Email is required"
                  id="Username"
                  name="Username"
                  value=""
                />
                <span
                  className="text-danger field-validation-message field-validation-valid"
                  data-valmsg-for="Username"
                  data-valmsg-replace="true"
                ></span>
              </div>
              <div className="form-group signin-form m-b-sm">
                <label className="control-label" htmlFor="Password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  autoComplete="off"
                  required
                  data-val="true"
                  data-val-required="The Password is required"
                  id="Password"
                  name="Password"
                />
                <span
                  className="text-danger field-validation-message field-validation-valid"
                  data-valmsg-for="Password"
                  data-valmsg-replace="true"
                ></span>
              </div>

              <div className="row m-t-lg last-item">
                <div className="col-6 m-t-sm forgot-password-wrapper">
                  <a id="forgot-password" href="/account/ForgotPassword">
                    <p>Forgot password?</p>
                  </a>
                </div>
                <div className="col-6 signin-wrapper">
                  <button
                    className="btn btn-outline btn-link"
                    id="login-button"
                    name="button"
                    value="login"
                  >
                    Sign in
                  </button>
                </div>
              </div>

              <input
                name="__RequestVerificationToken"
                type="hidden"
                value="CfDJ8MV0BklDqDVPkrqlu-B5OAD0q5RnwBZQeiKEDmGOEttji6JOj_KRs3vWMV3MIPrK4A6CCWBJ_KiQUHNnLP-Yy5HF2xzMnlvmnzWbXAmnbtQdMcRzkdionE_tN5j2pCfxhnSYduLpbozpPWHhj5z42yc"
              />
            </form> */}
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
                  <span className="error" id="emailerror">{error && error}</span> {/* Display error message */}
                </div>

                <div className="row m-t-lg last-item">
                  <div className="col-6 m-t-sm forgot-password-wrapper">
                    <a id="forgot-password" href="/account/ForgotPassword">
                      {/* <p>Forgot password?</p> */}
                    </a>
                  </div>
                  {/* <div className="col-6 signin-wrapper"> */}
                    <button
                      className="btn btn-outline btn-link"
                      id="login-button"
                      name="button"
                      value="login"
                      type="submit" // Changed type to submit
                    >
                      Sign in
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

export default Login;
