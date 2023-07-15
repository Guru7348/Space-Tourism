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
                <div className='name align m f40' >{item.name}</div>
                <div className='desc m gray f30' >{item.description}</div>
                <div className='Distance m gray f30' >Distance: {item.distance}</div>
                <div className='travel m gray f30' >Time: {item.travel}</div>
            </div>
            <div id='item_img' ><img src={require('../assets/destination/'+item.images.png)} /></div>
        </div>
    )
}