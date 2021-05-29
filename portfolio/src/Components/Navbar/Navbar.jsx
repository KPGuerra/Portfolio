import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div className="NavContainer">
            <NavLink to="/">
                <h4> Home </h4>
            </NavLink>
            <NavLink to="/about">
                <h4> About Me </h4>
            </NavLink>
            <NavLink to="/skills">
                <h4> Skills </h4>
            </NavLink>
            <NavLink to="/education">
                <h4> Education </h4>
            </NavLink>
            <NavLink to="/projects">
                <h4> My Project </h4>
            </NavLink>
            <NavLink to="/blogs">
                <h4> Blogs </h4>
            </NavLink>
            <NavLink to="/contact">
                <h4> Contact Me </h4>
            </NavLink>
        </div>
    )
}

export default Navbar