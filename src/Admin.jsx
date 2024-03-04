import React, { useState, useEffect } from "react";
import axios from "axios";
import '../public/css/resetPassword.css'
import { Link } from "react-router-dom";

function Admin() {
  
    return (
        <div className="container" id="admin_cover">
            <div>
                <h2>Admin</h2>
            </div>
            {/* <button className="btn btn-primary admin_buttons" href="/reset-password">Reset Password</button> */}
            <Link to="/reset-password" className="btn btn-warning admin_buttons">Reset Password</Link>
            <br></br>
            {/* <button className="btn btn-primary admin_buttons" href="/register">Register User</button> */}
            <Link to="/register" className="btn btn-warning admin_buttons">Register User</Link>
        </div>    
    )
}

export default Admin;
