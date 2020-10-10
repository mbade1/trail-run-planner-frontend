import React from 'react';
import {connect} from 'react-redux'
import {journalFetch} from '../actions/JournalFetch'
import Journals from '../components/Journals'
import JournalHeader from '../components/JournalHeader'

class JournalContainer extends React.Component {

    componentDidMount() {
        let id = window.localStorage['id']
        journalFetch(id)
    }
    render() {
        return (
            <div className="journal-container">
                <JournalHeader/>
                <Journals journals={this.props.journals}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger
    return {
      journals: state.journals,
      id: state.id
    }
  }
  let id = window.localStorage['id']

export default connect(mapStateToProps, journalFetch(id))(JournalContainer)