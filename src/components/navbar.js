import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import "../css/style.css"

export default function Navbar() {
    const active = ({ isActive }) => ({ 
        borderBottom: isActive ? '3px solid white' : null })

    return (
        <div className='navbar'>
            <div className='logo'></div>
            <div className='navbar-list'>
                <ul>
                    <NavLink style={active} to='/'>Home</NavLink>
                    <NavLink style={active} to='/destination' >Destination</NavLink>
                    <NavLink style={active} to='/crew' >Crew</NavLink>
                    <NavLink style={active} to='/technology'>Technology</NavLink>
                </ul>
            </div>
        </div>
    )
}
