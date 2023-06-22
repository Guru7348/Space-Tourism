import React,{useState} from 'react';
import {MdOutlineNavigateNext,MdOutlineNavigateBefore} from 'react-icons/md'

export default function Techitem({data}){

    
    const [count,setcount] = useState(0)
    const [tech,setTech] = useState(data[count])
//   const count=0
//   const tech=data[0]

    
    function next(){
        count!==data.length-1?setcount(prevcount=>prevcount+1):setcount(0)
        setTech(data[count])
    }

    function prev(){
        count!==0?setcount(prevcount=>prevcount-1):setcount(data.length-1)
        setTech(data[count])
    }

        return(
            <div className='techcard' >
                <MdOutlineNavigateBefore className='h' onClick={prev} />
                <div className='tech_details'>
                    <div className='tech_name' style={{fontSize:'70px'}}>{tech.name}</div>
                    <div className='tech_desc gray' style={{fontSize:'30px'}} >{tech.description}</div>
                </div>
                <div className='tech_image'><img src={require('../assets/technology/'+tech.images.portrait)}/></div>
                <MdOutlineNavigateNext className='h' onClick={next}/>
            </div>
        )
}