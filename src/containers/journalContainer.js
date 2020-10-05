import React from 'react';
import {connect} from 'react-redux'
import JournalFetch from '../fetchCalls/JournalFetch'
import Journal from '../components/Journal'

class JournalContainer extends React.Component {
    render() {
        return (
            <div className="journal-container">
                <Journal journal={this.props.journal}/>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      journal: state.journal
    }
  }




export default connect(mapStateToProps, {JournalFetch})(JournalContainer)