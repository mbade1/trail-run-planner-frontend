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
                        <div key={journal.id} className='journal-trail'>
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
                            <br/><br/><br/><br/><br/><br/>
                            </p>
                            {/* {packing list} */}
                            <div className="packingList">
                            <h2>What to Pack</h2>
                            <h3>Clothing</h3>
                            <p>
                                T-Shirt: <input type="checkbox" />&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Shorts: <input type="checkbox" /> &nbsp;&nbsp;&nbsp;| 
                                &nbsp;&nbsp;&nbsp;Pants <input type="checkbox" />&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Jacket: <input type="checkbox" />
                                <br/>
                                Gloves: <input type="checkbox" />&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Hat: <input type="checkbox" />&nbsp;&nbsp;&nbsp;|
                                &nbsp;&nbsp;&nbsp;Shoes: <input type="checkbox" />&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Socks: <input type="checkbox" />
                            </p>
                            <h3>Maps and Communications</h3>
                            <p>
                                Map: <input type="checkbox" />&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Watch: <input type="checkbox" />&nbsp;&nbsp;&nbsp;|
                                &nbsp;&nbsp;&nbsp;Cellphone: <input type="checkbox" />
                            </p>
                            <h3>Nutrition</h3>
                            <p>
                                Food: <input type="checkbox" />&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Water: <input type="checkbox" />
                            </p>
                            <h3>Extra</h3>
                            <p>
                                Running Pack: <input type="checkbox" />&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;First Aid Pack: <input type="checkbox" />
                                <br/>
                                Sunscreen: <input type="checkbox" />&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Bugspray: <input type="checkbox" />
                                <br/><br/>Click here to update Your Run
                            </p>

                        </div>
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