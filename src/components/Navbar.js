import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav class={'navbar navbar-expand-lg navbar-${props.mode} bg--${props.mode}'}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Form</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
          <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">User</a></li>
            <li><a class="dropdown-item" href="#">News</a></li>
            <li><a class="dropdown-item" href="#">Contact Number</a></li>
            <li><a class="dropdown-item" href="#">authorizartion</a></li>
          </ul>  
        </li>


        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pricing</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">100$</a></li>
            <li><a class="dropdown-item" href="#">200$</a></li>
            <li><a class="dropdown-item" href="#">300$</a></li>
          </ul>
        </li>


        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            AboutUs
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Anotheraction</a></li>
            <li><a class="dropdown-item" href="#">Somethingelsehere</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
  
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About Textutils',
  
}


/*in react js how to use props in functional component
imr = import React from 'react' 
impt = import PropTypes from 'prop-types'

here prpos is used to pass data from one component to another component
props are read only
props are immutable
props are used to communicate between components
props are used to pass data from one component to another component
props are used to pass data from parent component to child component
props are used to pass data from child component to parent component
props are used to pass data from parent component to multiple child components
props are used to pass data from child component to parent component  
default props are used to set default values for props
*/