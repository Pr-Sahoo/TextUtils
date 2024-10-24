import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    const [Mode , setMode] = useState("light");
    const onChange = () => {
        const mode = Mode === "light" ? "dark" : "light";
        setMode(mode);
        document.body.style.backgroundColor = Mode === "light" ? "pink" : "green";
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">{props.About}</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" aria-disabled="true" to='/'>Disabled</Link>
                        </li> */}
                    </ul>
                    <form className="d-flex me-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit"><Link className='nav-link active' to='/'>Search</Link></button>
                    </form>

                    <div className="form-check form-switch me-3">
                        {Mode === "light" ? "dark" : "light"}
                        <input className="form-check-input" type="checkbox" role="switch" onChange={onChange} id="flexSwitchCheckDefault" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired
}
// Navbar.defaultProps = {
//     title: "set tile",
//     About: "set about"
// }

export default Navbar;