import React from 'react';

export default function Crew({crew,flex}){

    const direction = flex=='right'?'row':'row-reverse'
        return(
            <div className='crewcard' style={{flexDirection:direction}}>
                <div className='crew_details'>
                    <div className='crew_name' style={{fontSize:'60px'}}>{crew.name}</div>
                    <div className='crew_role gray'>{crew.role}</div>
                    <div className='crew_bio gray' >{crew.bio}</div>
                </div>
                <div className='crew_image'><img src={require('../assets/crew/'+crew.images.png)}/></div>
            </div>
        )

}