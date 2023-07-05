import { useState,React,useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios"

export default function Poster() {
    var data ={
        "h1":"So, you want to travel to",
        "h2":"SPACE",
        "h3":"Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore",
        "h4":"Explore",
      }

    return (
        <div className='poster' style={{ margin: '0% 5% 0% 5%' }}>
            <div className='poster-text'>
                <div className='h1' style={{fontSize:"35px"}}>{data.h1}</div>
                <div className='h2' style={{fontSize: '100px',margin: '20px 0px 20px 0px',color: 'white'}} >{data.h2}</div>
                <div className='h3' style={{fontSize:"25px"}}>{data.h3}</div>
            </div>
            <div className='poster-btn'><Link className='btn' to='/destination'>{data.h4}</Link></div>
        </div>
    )

}