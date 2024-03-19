import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../public/css/resetPassword.css'
import '../public/css/site.css';
import '../public/fonts/font-awesome/css/font-awesome.css';
import '../public/fonts/open-sans/open-sans.css';
import '../public/lib/inspinia/inspinia.css';
import '../public/lib/inspinia/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Admin() {

    const navigate = useNavigate();

    const handleResetPassword = () => {
      navigate('/reset-password');
    };
  
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
                    <div className="middle-box loginscreen animated fadeInDown">
                        <div className="signin-page">
                            <div className="login-sub-heading">
                                <h3 className="text-center title">Streamline BackOffice</h3>
                                <p>Administrator options</p>
                            </div>
                            <div className="admin-buttons">
                                <Link to="/register" className="btn btn-outline btn-link"  style={{ textDecoration: 'none' }}>Register User</Link>
                                <Link to="/reset-password" className="btn btn-outline btn-link" style={{ textDecoration: 'none' }}>Reset Password</Link>
                            </div>
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

export default Admin;
