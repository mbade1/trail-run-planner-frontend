import React from 'react'
import Trail from './trail'
import Iframe from 'react-iframe'


const Trails = (props) => {
    return (
        <div>
            {props.trails.map(trail => 
            <div key={trail.id} className='trail'>
                <h1>{trail.name}</h1>
                <img src={trail.imgMedium}/>
                <br />
                    {trail.summary}<br/><br/>  
                    <b>Difficulty</b>: {trail.difficulty}<br/><br />  
                    <b>Length</b>: {trail.length} miles &nbsp; 
                    <b>Ascent</b>: {trail.ascent} &nbsp;
                    <b>Descent</b>: {trail.descent}
                    <br/><br/>
                    <b>Highest point</b>: {trail.high} feet
                    <b>Lowest point</b>: {trail.low} feet
                    <h3>Conditions</h3>
                    <b>Status of this trail</b>: {trail.conditionStatus}&nbsp;
                    <b>Status details</b>: {trail.conditionDetails}&nbsp;
                    <b>Date of update</b>: {trail.conditionDate}    
            </div>
            )}
            <Trail trails={props.trails}/>
        </div>
      )
}
////40.7127837,-74.0059413

export default Trails