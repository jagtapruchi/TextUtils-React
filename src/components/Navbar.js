import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      <div className="d-flex">
        <div className="bg-dark rounded mx-2" style={{height:'30px',width:'30px', cursor:"pointer"}} onClick={()=>props.toggleMode('dark')} >
        </div>
        <div className="bg-success rounded mx-2" style={{height:'30px',width:'30px', cursor:"pointer"}} onClick={()=>props.toggleMode('success')} >
        </div>
        <div className="bg-danger rounded mx-2" style={{height:'30px',width:'30px', cursor:"pointer"}} onClick={()=>props.toggleMode('danger')} >
        </div>
        <div className="bg-warning rounded mx-2" style={{height:'30px',width:'30px', cursor:"pointer"}} onClick={()=>props.toggleMode('warning')} >
        </div>
      </div>
      
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
        {/* <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={null}/> */}
        <label className="form-check-label" htmlFor="switchCheckDefault">Toggle Mode</label>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

// default props to be passed when the props are not set in the App.js file for any specific component, here Navbar
Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About here"
}

// defining datatype for Navbar properties:
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}


