import React from 'react'
import ImageNotFound from '../images/picture-not-found.jpg'
import Iframe from 'react-iframe'
import {connect} from 'react-redux'
import journalPost from '../actions/JournalPost'

class Trails extends React.Component {
    constructor() {
        super();
        this.state = {
            journal: '',
            dateOfRun: '',
            userId: window.localStorage['id'],
            trailId: ''
        }
    }

    handleChange = (event) => {
        this.setState({
          dateOfRun: event.target.value
        })
    }

    // - Posting trail into Journal; plan what is needed (trail ID, user ID)
    // - fetch request: `/users/:user_id/journals`                                                     
    // - journal controller: #create with params of the dateOfRun and hikerProjectId???

    handleSubmit = event => {
        event.preventDefault()
        //function call to post into user's journal: PostRunToJournal(this.state.dateOfRun)
        //optional: this.props.history.push('/users/:id/journals)
        console.log(event)
        let userId = window.localStorage['id']

        
        let dateOfRun = this.state.dateOfRun
        // JournalPost(userId, this.state.userId, this.state.dateOfRun)
        let hikerProjectId = event.target[1].defaultValue
        let imgMedium = event.target[2].defaultValue
        let name = event.target[3].defaultValue
        let length = event.target[4].defaultValue
        let difficulty = event.target[5].defaultValue
        let stars = event.target[6].defaultValue
        let starVotes = event.target[7].defaultValue
        let conditionDetails = event.target[8].defaultValue
        let conditionStatus = event.target[9].defaultValue
        let latitude = event.target[10].defaultValue
        let longitude = event.target[11].defaultValue

        debugger
        fetch(`http://localhost:3000/users/${userId}/journals`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              journal: {
                trailId: hikerProjectId,
                dateOfRun: dateOfRun,
                imgMedium: imgMedium,
                name: name,
                length: length,
                difficulty: difficulty,
                stars: stars,
                starVotes: starVotes,
                conditionDetails: conditionDetails,
                conditionStatus: conditionStatus,
                latitude: latitude,
                longitude: longitude
              }
            })
            })
            .then(response => response.json())
            .then(newJournalEntry => console.log(newJournalEntry))

        this.setState({
            dateOfRun: ''
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
                    width="200px"
                    height="200px"
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
                        <input type="date" onChange={(event) => this.handleChange(event)} value={this.state.dateOfRun}/>
                        <input type="hidden" id="trailId" value={trail.id}/>
                        <input type="hidden" value={trail.imgMedium}/>
                        <input type="hidden" value={trail.name}/>
                        <input type="hidden" value={trail.length}/>
                        <input type="hidden" value={trail.difficulty}/>
                        <input type="hidden" value={trail.stars}/>
                        <input type="hidden" value={trail.starVotes}/>
                        <input type="hidden" value={trail.conditionDetails}/>
                        <input type="hidden" value={trail.conditionStatus}/>
                        <input type="hidden" value={trail.latitude}/>
                        <input type="hidden" value={trail.longitude}/>
                        <input type="submit" value="Add Run"/>
                    </form>
                </p>
                
                </div>
                )}
            </div>
          )

    }
    
}
//onChange={(event) => this.handleChange(event)} value={this.state.trailId: 

const mapStateToProps = state => {
    return {
      dateOfRun: state.dateOfRun
    }
  }




export default connect(mapStateToProps, {journalPost})(Trails)