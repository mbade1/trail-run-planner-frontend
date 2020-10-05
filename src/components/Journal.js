import React from 'react'
import JournalFetch from '../fetchCalls/JournalFetch'

class Journal extends React.Component {
    constructor() {
        super();
        this.state = {
            journal: '',
        }
    }

    componentDidMount() {
        let id = window.localStorage['id']
        JournalFetch(id)
    }

    render() {
        return (
            <div className="journal">
                <h1>My Running Journal</h1>
                {/* {this.props.journals.map(journal => journal)}  */}

            </div>
        )
    }
}

export default Journal