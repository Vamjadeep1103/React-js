import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* Navbar Brand */}
        <a className="navbar-brand" href="#">Form</a>

        {/* Dark Mode Switch (Close to Navbar Brand) */}

        <div className="d-flex align-items-center ms-auto">
  <input 
    className="form-check-input me-2" 
    onClick={props.toggleMode} 
    type="checkbox" 
    role="switch" 
    id="flexSwitchCheckDefault" 
  />
  <label 
    className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} 
    htmlFor="flexSwitchCheckDefault"
  >
    {props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
  </label>
</div>

        {/* Navbar Toggler Button for Small Screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">User</a></li>
                <li><a className="dropdown-item" href="#">News</a></li>
                <li><a className="dropdown-item" href="#">Contact Number</a></li>
                <li><a className="dropdown-item" href="#">Authorization</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pricing
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">$100</a></li>
                <li><a className="dropdown-item" href="#">$200</a></li>
                <li><a className="dropdown-item" href="#">$300</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another Action</a></li>
                <li><a className="dropdown-item" href="#">Something Else Here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Define Prop Types
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
};

// Default Props
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About Textutils',
};
