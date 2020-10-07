import React from 'react'
import Iframe from 'react-iframe'
import ImageNotFound from '../images/picture-not-found.jpg'

class Journals extends React.Component {
    constructor() {
        super();
        this.state = {
            journal: [],
        }
    }

    // componentDidUpdate() {
    //     debugger
    //     if (this.props.journals.length >= 1) {
    //         this.props.journals.map(journalTrail =>
    //             this.fetchTrails(journalTrail.trail_id))
    //     } 
    // }



    render() {
        debugger
        if (this.props.journals.length >= 1) {
            return (
                <div>
                    {this.props.journals.map(journal => 
                        <div key={journal.id} className='trail'>
                            <img src={journal.imgMedium || ImageNotFound} alt={`${journal.name} trailhead`}/>
                            <h2>{journal.name}</h2>
                            <h3>Day of Run: {journal.date_of_run}</h3>
                            {/* url to be used: {https://www.google.com/maps/embed/v1/place?key=AIzaSyCtvdMdqe2ppwzO7Y6faMVpDo-sJG0SkkQ&q=location=${trail.latitude},${trail.longitude}} */}
                            <Iframe url={`http://google.com`}
                                width="200px"
                                height="200px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"/>
                        {/* {information about the run} */}
                        <p>
                            <b><u>Miles:</u></b> {journal.length} 
                        <br/><br/>
                            <b><u>Difficulty:</u></b> {journal.difficulty} 
                        <br/><br/>
                            <b><u>Latest Conditions:</u></b> {journal.conditionStatus} {journal.conditionDetails}
                        <br/><br/><br/><br/><br/><br/><br/>
                        </p>
                        
                        {/* {packing list} */}
                        
                        <h2>What to Pack</h2>
                        <input type="checkbox" />


                        
                    </div>

                    )}
                </div>     
            )
            
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}


export default Journals