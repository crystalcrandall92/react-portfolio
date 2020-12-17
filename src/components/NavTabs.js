import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/styles.css"

function NavTabs() {
    const location = useLocation();

    return (
        <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
                <Link
                    to="/About"
                    className={location.pathname === "/About" ? "nav-link deactive" : "nav-link"}
                >
                    About
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Portfolio"
                    className={location.pathname === "/Portfolio" ? "nav-link deactive" : "nav-link"}
                >
                    Portfolio
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Resume"
                    className={location.pathname === "/Resume" ? "nav-link deactive" : "nav-link"}
                >
                    Resume
        </Link>
            </li>
        </ul>
    );
}

export default NavTabs;
