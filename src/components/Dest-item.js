import React from 'react';
import '../css/style.css';

export default function DestItem({ item }) {
    // console.log(item.images.png.toString())
    // const image = require(item.images.png)    
    // console.log(image)
    // console.log(item)
    return (
        <div className='destitem' style={{ color: 'white' }}>
            <div className='dest_details'>
                <div className='name align m' style={{fontSize:'40px'}}>{item.name}</div>
                <div className='desc m gray' style={{fontSize:'30px'}}>{item.description}</div>
                <div className='Distance m gray' style={{fontSize:'30px'}}>Distance: {item.distance}</div>
                <div className='travel m gray' style={{fontSize:'30px'}}>Time: {item.travel}</div>
                <button id='dest_btn' className='m'>Book Now</button>
            </div>
            <div id='item_img' ><img src={require('../assets/destination/'+item.images.png)} /></div>
        </div>
    )
}