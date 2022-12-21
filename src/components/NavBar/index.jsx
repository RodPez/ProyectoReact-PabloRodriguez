import React from "react";
import CartWidget from "../CartWidget";
import "./styles.css";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand fs-2 marca" href="#">La Glotoneria</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
                        <li className="nav-item navi">
                            <a className="nav-link active fs-5" aria-current="page" href="#comidas">Comidas</a>
                        </li>
                        <li className="nav-item navi">
                            <a className="nav-link active fs-5" aria-current="page" href="#bebidas">Bebidas</a>
                        </li>
                        <li className="nav-item navi">
                            <a className="nav-link active fs-5" aria-current="page" href="#postres">Postres</a>
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