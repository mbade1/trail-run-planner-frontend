import React from 'react'
import ImageNotFound from '../images/picture-not-found.jpg'
import Iframe from 'react-iframe'
import {connect} from 'react-redux'
import JournalPost from '../fetchCalls/JournalFetch'

class Trails extends React.Component {
    constructor() {
        super();
        this.state = {
            journal: '',
            dateOfRun: '',
            user: ''
        }
    }

    handleChange = (event) => {
        this.setState({
          dateOfRun: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        //function call to post into user's journal: PostRunToJournal(this.state.dateOfRun)
        //optional: this.props.history.push('/users/:id/journals)
        console.log(event)
        let userId = window.localStorage['id']
        debugger
        JournalPost(userId, this.state.dateOfRun)
        this.setState({
            dateOfRun: this.state.dateOfRun
        })
    }

    render() {
        return (
            <div className="trails">
                {this.props.trails.map(trail => 
                <div key={trail.id} className='trail'>
                    <img src={trail.imgMedium || ImageNotFound} alt={`${trail.name} trailhead`}/>
                    <h2>{trail.name}</h2>
                    {/* url to be used: {https://www.google.com/maps/embed/v1/place?key=AIzaSyCtvdMdqe2ppwzO7Y6faMVpDo-sJG0SkkQ&q=location=${trail.latitude},${trail.longitude}} */}
                    <Iframe url={`http://google.com`}
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
                    <br/><br/><b><u>Latest Conditions:</u></b> {trail.conditionStatus} {trail.conditionDetails}
                    <br/><br/>
                    <h4>Add Run to Journal:</h4>
                    <form onSubmit={this.handleSubmit}>
                        <input type="datetime-local" onChange={(event) => this.handleChange(event)} value={this.state.dateOfRun}/>
                        <input type="hidden" value={trail.id}/>
                        <input type="submit" value="Add Run"/>
                    </form>
                </p>
                
                </div>
                )}
                {/* <Trail trails={props.trails}/> */}
            </div>
          )

    }
    
}


const mapStateToProps = state => {
    return {
      dateOfRun: state.dateOfRun
    }
  }




export default connect(mapStateToProps, {JournalPost})(Trails)