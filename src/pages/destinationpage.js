import React from 'react';
import Desitems from '../components/desitems';
import DestItem from '../components/Dest-item';
import Navbar from '../components/navbar';
import "../css/style.css"

export default function Destinationpage() {
    const item = {
        'name': "Europa",
        'images': {
            // 'png': "../assets/destination/image-europa.png",
            'png': '/image-europa.png',
            'webp': "./assets/destination/image-europa.webp"
        },
        'description': "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        'distance': "628 mil. km",
        'travel': "3 years"
    }

    return (
        <div className='dest'>
            <Navbar />
            <Desitems/>
            {/* <DestItem item={item} /> */}
        </div>
    )
}