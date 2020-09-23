import React from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchCityAndTrails} from '../actions/trails'
import Trails from '../components/trails'

class TrailsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchCityAndTrails()
    }

    render() {
        return (
            <div>
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