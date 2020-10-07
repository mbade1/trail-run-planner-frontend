import React from 'react'

class Journals extends React.Component {
    constructor() {
        super();
        this.state = {
            journal: '',
        }
    }

    render() {
        debugger
        if (this.props.journals.length >= 1) {
        return (
            <div className="journal-trails">
                {this.props.journals.map(journalTrail => 
                <div key={journalTrail.id} className="trail">
                    {journalTrail.trail_id}

                </div>
                    

                    
                    )}
            </div>
        )
        } else {
            return (
                <div className="journal-trails">
                    Loading Journals...
                </div>
            )
        }
    }
}

export default Journals