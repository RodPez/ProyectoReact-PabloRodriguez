import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./styles.css";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand fs-2 marca" to="/">La Glotoneria</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
                        <li className="nav-item navi">
                            <Link className="nav-link active fs-5 linksCategorias" to="/categoria/comidas">Comidas</Link>
                        </li>
                        <li className="nav-item navi">
                            <Link className="nav-link active fs-5 linksCategorias"  to="/categoria/bebidas">Bebidas</Link>
                        </li>
                        <li className="nav-item navi">
                            <Link className="nav-link active fs-5 linksCategorias"  to="/categoria/postres">Postres</Link>
                        </li>
                        <div className="widget-container">
                            <CartWidget/>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>    
    )
}