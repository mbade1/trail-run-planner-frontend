import React from "react";
import Iframe from "react-iframe";
import ImageNotFound from "../images/picture-not-found.jpg";
import {journalPatch } from "../actions/Actions";
import {journalDelete} from '../actions/Actions'
import {withRouter} from 'react-router-dom'

const REACT_APP_GOOGLE_MAPS_API = process.env['REACT_APP_GOOGLE_MAPS_API']

class Journals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journals: [],
      tShirt: false,
      shorts: false,
      pants: false,
      jacket: false,
      gloves: false,
      hat: false,
      shoes: false,
      socks: false,
      map: false,
      watch: false,
      cellPhone: false,
      food: false,
      water: false,
      runningPack: false,
      firstAidPack: false,
      sunScreen: false,
      bugSpray: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: !!event.target.value,
    });
  };

  handleSubmit = (event) => {
    let id = window.localStorage["id"];
    let result = [];
    for (const property in this.state) {
      if (this.state[property] === true) {
        result.push(property);
      }
    }
    if (result.length === 1) {
      alert(`Remember to bring: ${result[0].toLowerCase()}`);
    } else if (result.length === 2) {
      let joined = result.join(" and ");
      alert(`Remember to bring: ${joined.toLowerCase()}!`);
    } else if (result.length > 2) {
      let lastIndex = result.pop();
      let joined = result.join(", ");
      alert(
        `Remember to bring: ${joined.toLowerCase()}, and ${lastIndex.toLowerCase()}!`
      );
    }
    journalPatch(id, event.target.id, this.state);
  };

  handleDelete = (event) => {
      let userId = window.localStorage["id"];
      journalDelete(userId, event.target.value)
      alert('This run has been deleted.')
      this.props.history.push("/trail-run-planner-frontend/trails");
  }

  render() {
    debugger
    if ((this.props.journals.length >= 1) && window.localStorage['id']) {
      return (
        <div>
          {this.props.journals.map((journal) => (
            <div key={journal.id} className="journal-trail">
              <img
                src={journal.imgMedium || ImageNotFound}
                alt={`${journal.name} trailhead`}
              />
              <h2>{journal.name}</h2>
              <h3>Day of Run: {journal.date_of_run}</h3>
              {/* url to be used: } */}
              <div className="journal-map-and-info">
                <Iframe
                  url={`https://www.google.com/maps/embed/v1/place?key=${REACT_APP_GOOGLE_MAPS_API}&q=location=${journal.latitude},${journal.longitude}`}
                  width="200px"
                  height="200px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                />
                {/* {information about the run} */}
                <p>
                  <b>
                    <u>Miles:</u>
                  </b>{" "}
                  {journal.length}
                  <br />
                  <br />
                  <b>
                    <u>Difficulty:</u>
                  </b>{" "}
                  {journal.difficulty}
                  <br />
                  <br />
                  <b>
                    <u>Latest Conditions:</u>
                  </b>{" "}
                  {journal.conditionStatus} {journal.conditionDetails}
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
              </div>
              {/* {packing list} */}
              <div className="packingList">
                <h2>What to Pack</h2>
                <h3>Clothing</h3>
                <p>
                  <form onSubmit={this.handleSubmit} id={journal.id}>
                    T-Shirt:{" "}
                    <input
                      type="checkbox"
                      name="tShirt"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.tShirt}
                    />
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Shorts:{" "}
                    <input
                      type="checkbox"
                      name="shorts"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.shorts}
                    />
                    &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; Pants{" "}
                    <input
                      type="checkbox"
                      name="pants"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.pants}
                    />
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Jacket:{" "}
                    <input
                      type="checkbox"
                      name="jacket"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.jacket}
                    />
                    <br />
                    Gloves:{" "}
                    <input
                      type="checkbox"
                      name="gloves"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.gloves}
                    />
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Hat:{" "}
                    <input
                      type="checkbox"
                      name="hat"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.hat}
                    />
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Shoes:{" "}
                    <input
                      type="checkbox"
                      name="shoes"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.shoes}
                    />
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Socks:{" "}
                    <input
                      type="checkbox"
                      name="socks"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.socks}
                    />
                    <h3>Maps and Communications</h3>
                    Map:{" "}
                    <input
                      type="checkbox"
                      name="map"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.map}
                    />
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Watch:{" "}
                    <input
                      type="checkbox"
                      name="watch"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.watch}
                    />
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Cellphone:{" "}
                    <input
                      type="checkbox"
                      name="cellphone"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.cellPhone}
                    />
                    <h3>Nutrition</h3>
                    Food:{" "}
                    <input
                      type="checkbox"
                      name="food"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.food}
                    />
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Water:{" "}
                    <input
                      type="checkbox"
                      name="water"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.water}
                    />
                    <h3>Extra</h3>
                    Running Pack:{" "}
                    <input
                      type="checkbox"
                      name="runningpack"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.runningPack}
                    />
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; First Aid Pack:{" "}
                    <input
                      type="checkbox"
                      name="firstaidpack"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.firstAidPack}
                    />
                    <br />
                    Sunscreen:{" "}
                    <input
                      type="checkbox"
                      name="sunscreen"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.sunScreen}
                    />
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Bugspray:{" "}
                    <input
                      type="checkbox"
                      name="bugspray"
                      onChange={(event) => this.handleChange(event)}
                      value={this.state.bugSpray}
                    />
                    <br />
                    <br />
                    <input type="submit" value="Pack for Run!" />
                    <br />
                    <br />
                  </form>
                  <button 
                    value={journal.id} 
                    onClick={(event) => this.handleDelete(event)}
                  >
                    Delete Run
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    } else if ((this.props.journals.length < 1) && window.localStorage['id']) {
      return (
        <div className="journal-trail">
          <h2>To add a run, click on Trails above</h2>
        </div>
      );
    } else {
      return (
        <div className="journal-trail">
          <h2>Log in or Sign up to make your journal!</h2>
        </div>
      )
    }
  }
}

export default withRouter(Journals);