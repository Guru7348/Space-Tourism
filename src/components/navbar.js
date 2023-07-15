import React, { useEffect, useState } from 'react';
import {NavLink } from 'react-router-dom'
import "../css/style.css"

export default function Navbar() {
    const active = ({ isActive }) => ({ 
        borderBottom: isActive ? '3px solid white' : null })
    const [swidth,setswidth] = useState(false)

    const controlresize = ()=>{
        if(window.innerWidth<=800){
            console.log('swidth')
            setswidth(true)
        }
        else{
            setswidth(false)
        }
    }
    useEffect(controlresize,[])  
    window.onresize = controlresize

    const [open,setopen] = useState(false)
    
    function List(){
        if(swidth & open){
            return (
                <ul className={"horizontal"}>
                    <NavLink style={active} to='/Space-Tourism'>Home</NavLink>
                    <NavLink style={active} to='/destination' >Destination</NavLink>
                    <NavLink style={active} to='/crew' >Crew</NavLink>
                    <NavLink style={active} to='/technology'>Technology</NavLink>
                </ul>
            )
        }else if(!swidth){
            return(
            <ul className="ul">
                    <NavLink style={active} to='/Space-Tourism'>Home</NavLink>
                    <NavLink style={active} to='/destination' >Destination</NavLink>
                    <NavLink style={active} to='/crew' >Crew</NavLink>
                    <NavLink style={active} to='/technology'>Technology</NavLink>
                </ul>
            )
        }else if(swidth & !open){
            return(
                <ul className="horizontal hide">
                    <NavLink style={active} to='/Space-Tourism'>Home</NavLink>
                    <NavLink style={active} to='/destination' >Destination</NavLink>
                    <NavLink style={active} to='/crew' >Crew</NavLink>
                    <NavLink style={active} to='/technology'>Technology</NavLink>
                </ul>
            )
        }
    }

    return (
        <div className='navbar'>
            <div className='logo'></div>
            <div className='navbar-list'>
                {<List/>}
                <div className="hamburger" onClick={()=>{open?setopen(false):setopen(true)}}>Menu</div>
            </div>
        </div>
    )
}
