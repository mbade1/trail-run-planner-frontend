import React from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchCityAndTrails} from '../fetchCalls/Trails'
import Trails from '../components/Trails'
import TrailSearch from '../components/TrailSearch'

class TrailsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchCityAndTrails()
    }

    render() {
        return (
            <div className="trails-container">
                <TrailSearch fetchCityAndTrails={this.props.fetchCityAndTrails}/>
                <Trails trails={this.props.trails}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      trails: state.trails
    }
  }

export default connect(mapStateToProps, {fetchCityAndTrails})(TrailsContainer)