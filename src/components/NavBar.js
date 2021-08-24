import React from "react";
import logo from "../images/logo-emerson.png"
import "../styles/navbar.css"
import {
    HashRouter as Router,  Link
} from "react-router-dom";

export const NavBar = () => {
    return (
        <Router>
            <div className="mygg-navbar hide">
                <div className="mygg-nav-logo">
                    <Link to="/">
                        <img src={logo} alt="logo-mygg"/>
                    </Link>
                </div>
                <div className="mygg-nav-list">
                    <ul className="mygg-nav-items">
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/">Campeones</Link>
                        </li>
                        <li>
                            <Link to="/">
                                Divisiones
                            </Link>
                        </li>
                        <li>
                            <Link to="/">Servidor</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav-bottom">
                <Link to="/" className="nav-b-item">
                    <i className="fas fa-home fa-2x"></i>
                </Link>
                <Link to="/" className="nav-b-item">
                    <i className="fas fa-list fa-2x"></i>
                </Link>
                <Link to="/" className="nav-b-item">
                    <i className="fas fa-trophy-alt fa-2x"></i>
                </Link>
                <Link to="/" className="nav-b-item">
                    <i className="fas fa-server fa-2x"></i>
                </Link>
            </div>
        </Router>
    )
}