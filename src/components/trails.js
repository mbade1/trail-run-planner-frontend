import React from 'react'
import Trail from './trail'


const Trails = (props) => {
    return (
        <div>
            {props.trails.map(trail => 
            <div key={trail.id} className='trail'>
                <h1>{trail.name}</h1>
                <img src={trail.imgMedium}/>
                <div>
                    {trail.summary}<br/>  
                    {trail.difficulty} &nbsp;
                    Length: {trail.length} miles
                    Ascent: {trail.ascent} &nbsp;
                    Descent: {trail.descent}
                    <h3>Conditions</h3>
                    Status of {trail.name}: {trail.conditionStatus}&nbsp;
                    Status details: {trail.conditionDetails}&nbsp;
                    Date of {trail.conditionDate}
                    <br/>
                </div>
            </div>)}
            <Trail trails={props.trails}/>
        </div>
    
      )
}

export default Trails