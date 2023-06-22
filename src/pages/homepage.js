import React from 'react';
import Navbar from '../components/navbar';
import Poster from '../components/poster';
import "../css/style.css"
export default function Homepage() {

    return (
        <div className='home'>
            <Navbar />
            <Poster />
        </div>
    )
}