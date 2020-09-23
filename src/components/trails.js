import React from 'react'
import Trail from './trail'


const Trails = (props) => {
    return (
        <div>
            Trails
            <Trail/>
          {/* {props.trails.map(trail =>
            <li key={trail.id}>
            </li> )} */}
        </div>
    
      )
}

export default Trails