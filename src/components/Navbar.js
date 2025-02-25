import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        
        {/* Navbar Brand */}
        <a className="navbar-brand" href="#">Form</a>

        {/* Dark Mode Toggle Switch */}
        <div className="d-flex align-items-center ms-auto">
          <input 
            className="form-check-input me-2" 
            onClick={props.toggleMode} 
            type="checkbox" 
            role="switch" 
            id="darkModeSwitch" 
          />
          <label 
            className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} 
            htmlFor="darkModeSwitch">
            {props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
          </label>
        </div>

        {/* Navbar Toggler for Small Screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            
            {/* Home Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Home
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">User</a></li>
                <li><a className="dropdown-item" href="#">News</a></li>
                <li><a className="dropdown-item" href="#">Contact Number</a></li>
                <li><a className="dropdown-item" href="#">Authorization</a></li>
              </ul>
            </li>

            {/* Features Link */}
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            
            {/* Pricing Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Pricing
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">$100</a></li>
                <li><a className="dropdown-item" href="#">$200</a></li>
                <li><a className="dropdown-item" href="#">$300</a></li>
              </ul>
            </li>

            {/* About Us Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
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
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
};

// Default Props
Navbar.defaultProps = {
  mode: "light",
};
