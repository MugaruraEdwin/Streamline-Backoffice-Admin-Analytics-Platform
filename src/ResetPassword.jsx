
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '/css/resetPassword.css';

function ResetPassword() {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newConfirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*]).{8,}$/;
        // Validation logic
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
        axios.post('http://localhost:3000/forgot-password', { email })
            .then(response => {
                if (response.data.success) {
                    // If email exists, proceed to reset password
                    axios.post('http://localhost:3000/reset-password', { email, newPassword, newConfirmPassword})
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
        <div className="container" id="cover">
            <div id="content">
                <div className="col-md-6">
                    <h2>Reset Password</h2>
                    {success ? (
                        <div className="alert alert-success" role="alert">
                            Password reset successful. <Link to="/">Login</Link> with your new password.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="newPassword">New Password</label>
                                <input type="password" className="form-control" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                <span className="error" id="passworderror">{passwordError}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" className="form-control" id="newConfirmPassword" value={newConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-outline-custom ">Reset Password</button>
                            {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
