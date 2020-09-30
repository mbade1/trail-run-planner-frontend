import React from 'react';
import {connect} from 'react-redux'

class JournalContainer extends React.Component {
    render() {
        return (
            <div className="journal-container">
                JOURNAL CONTAINER
                <br/>
                This is where<br/>the user's journal<br/>will be clickable<br/>to access and view.
            </div>
        )
    }
}

export default JournalContainer