import React from 'react'
import Trail from './trail'
import Iframe from 'react-iframe'


class Trails extends React.Component {
    constructor() {
        super();
        this.state = {
            journal: '',
            dateOfRun: ''
        }
    }

    handleChange = (event) => {
        console.log(event)
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(event)
        debugger
    }
    
    render() {
        return (
            <div>
                {this.props.trails.map(trail => 
                <div key={trail.id} className='trail'>
                    
                
                    <img src={trail.imgMedium}/>
                    <h1>{trail.name}</h1>
                    {trail.length} {trail.difficulty} {trail.stars} out of {trail.starVotes}

                </div>
                )}
                {/* <Trail trails={props.trails}/> */}
            </div>
          )

    }
    
}

export default Trails