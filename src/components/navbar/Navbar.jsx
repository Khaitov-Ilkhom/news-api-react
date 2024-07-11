import React from 'react'
import {NavLink, Outlet} from "react-router-dom";
import Container from "../container/Container.jsx";

const Navbar = () => {
    return (
        <>
            <Container>
                <nav>
                    <ul>
                        <li> <NavLink to=""> Home </NavLink> </li>
                        <li> <NavLink to="/blog"> Blog </NavLink> </li>
                        <li> <NavLink to="/about"> About </NavLink> </li>
                        <li> <NavLink to="/contact"> Contact </NavLink> </li>
                    </ul>
                </nav>
            </Container>
            <Outlet/>
    </>

    )
}
export default Navbar
