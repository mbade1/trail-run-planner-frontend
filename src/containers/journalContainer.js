import React from 'react';
import {connect} from 'react-redux'
import JournalFetch from '../fetchCalls/JournalFetch'
import Journal from '../components/Journal'

class JournalContainer extends React.Component {

    // componentDidMount() {
    //     debugger
    //         let id = window.localStorage['id']
    //         JournalFetch(id)
    // }
    render() {
        return (
            <div className="journal-container">
                <Journal journal={this.props.journals}/>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      journals: state.journals
    }
  }


let id = window.localStorage['id']

export default connect(mapStateToProps, JournalFetch(id))(JournalContainer)