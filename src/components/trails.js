import React from 'react'
import Trail from './Trail'
import ImageNotFound from '../images/picture-not-found.jpg'
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
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(event)
        debugger
    }

    renderImages(image) {

    }
    
    render() {
        return (
            <div className="trails">
                {this.props.trails.map(trail => 
                <div key={trail.id} className='trail'>
                    <img src={trail.imgMedium || ImageNotFound}/>
                    <h2>{trail.name}</h2>
                    <Iframe url={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCtvdMdqe2ppwzO7Y6faMVpDo-sJG0SkkQ&q=location=${trail.latitude},${trail.longitude}`}
                    width="250px"
                    height="250px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
                <p>
                    <b><u>Miles:</u></b> {trail.length} 
                    <br/><br/>
                    <b><u>Difficulty:</u></b> {trail.difficulty} 
                    <br/><br/><b><u>Rating:</u></b> {trail.stars} out of {trail.starVotes} votes
                </p>
                
                </div>
                )}
                {/* <Trail trails={props.trails}/> */}
                {/*/ AIzaSyCtvdMdqe2ppwzO7Y6faMVpDo-sJG0SkkQ */}
            </div>
          )

    }
    
}

export default Trails