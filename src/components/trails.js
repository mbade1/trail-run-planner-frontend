import React from "react";
import ImageNotFound from "../images/picture-not-found.jpg";
import Iframe from "react-iframe";
import { connect } from "react-redux";
import journalPost from "../actions/JournalPost";

const REACT_APP_GOOGLE_MAPS_API = process.env["REACT_APP_GOOGLE_MAPS_API"];
console.log(REACT_APP_GOOGLE_MAPS_API);

class Trails extends React.Component {
  constructor() {
    super();
    this.state = {
      journal: "",
      dateOfRun: "",
      userId: window.localStorage["id"],
      trailId: "",
      journals: []
    };
  }

  handleChange = (event) => {
    this.setState({
      dateOfRun: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let userId = window.localStorage["id"];
    let hikerProjectId = event.target[1].defaultValue;
    let imgMedium = event.target[2].defaultValue;
    let name = event.target[3].defaultValue;
    let length = event.target[4].defaultValue;
    let difficulty = event.target[5].defaultValue;
    let stars = event.target[6].defaultValue;
    let starVotes = event.target[7].defaultValue;
    let conditionDetails = event.target[8].defaultValue;
    let conditionStatus = event.target[9].defaultValue;
    let latitude = event.target[10].defaultValue;
    let longitude = event.target[11].defaultValue;
    let body = {
      hikerProjectId,
      imgMedium,
      name,
      length,
      difficulty,
      stars,
      starVotes,
      conditionDetails,
      conditionStatus,
      latitude,
      longitude,
    };
    this.props.journalPost(
      userId,
      this.state.userId,
      this.state.dateOfRun,
      body
    );
    this.setState({
      dateOfRun: "",
      journals: []
    });
    alert("This run has been added to your journal!");
  };

  render() {
    if (window.localStorage["id"]) {
      return (
        <div className="trails">
          {this.props.trails.map((trail) => (
            <div key={trail.id} className="trail">
              <img
                src={trail.imgMedium || ImageNotFound}
                alt={`${trail.name} trailhead`}
              />
              <h2>{trail.name}</h2>
              <Iframe
                //url={`https://www.google.com/maps/embed/v1/place?key=${REACT_APP_GOOGLE_MAPS_API}&q=location=${trail.latitude},${trail.longitude}`}
                url="https://www.google.com"
                width="200px"
                height="200px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
              />
              <p>
                <b>
                  <u>Miles:</u>
                </b>{" "}
                {trail.length}
                <br />
                <br />
                <b>
                  <u>Difficulty:</u>
                </b>{" "}
                {trail.difficulty}
                <br />
                <br />
                <b>
                  <u>Rating:</u>
                </b>{" "}
                {trail.stars} out of {trail.starVotes} votes
                <br />
                <br />
                <b>
                  <u>Latest Conditions:</u>
                </b>{" "}
                {trail.conditionStatus} {trail.conditionDetails}
                <br />
                <br />
                <h4>Add Run to Journal:</h4>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="date"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.dateOfRun}
                  />
                  <input type="hidden" id="trailId" value={trail.id} />
                  <input type="hidden" value={trail.imgMedium} />
                  <input type="hidden" value={trail.name} />
                  <input type="hidden" value={trail.length} />
                  <input type="hidden" value={trail.difficulty} />
                  <input type="hidden" value={trail.stars} />
                  <input type="hidden" value={trail.starVotes} />
                  <input type="hidden" value={trail.conditionDetails} />
                  <input type="hidden" value={trail.conditionStatus} />
                  <input type="hidden" value={trail.latitude} />
                  <input type="hidden" value={trail.longitude} />
                  <input type="submit" value="Add Run" />
                </form>
              </p>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="trails">
          {this.props.trails.map((trail) => (
            <div key={trail.id} className="trail">
              <img
                src={trail.imgMedium || ImageNotFound}
                alt={`${trail.name} trailhead`}
              />
              <h2>{trail.name}</h2>
              <Iframe
                url={`https://www.google.com/maps/embed/v1/place?key=${REACT_APP_GOOGLE_MAPS_API}&q=location=${trail.latitude},${trail.longitude}`}
                width="200px"
                height="200px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
              />
              <p>
                <b>
                  <u>Miles:</u>
                </b>{" "}
                {trail.length}
                <br />
                <br />
                <b>
                  <u>Difficulty:</u>
                </b>{" "}
                {trail.difficulty}
                <br />
                <br />
                <b>
                  <u>Rating:</u>
                </b>{" "}
                {trail.stars} out of {trail.starVotes} votes
                <br />
                <br />
                <b>
                  <u>Latest Conditions:</u>
                </b>{" "}
                {trail.conditionStatus} {trail.conditionDetails}
                <br />
                <br />
              </p>
            </div>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dateOfRun: state.dateOfRun,
    journals: state.journal,
  };
};

export default connect(mapStateToProps, { journalPost })(Trails);

//Coding assessment: Add a "like" button to like or unlike individual trails:

//in state: liker: false

// handleLiker = () => {
//   debugger
//   this.setState({
//     liker: !this.state.liker
//   })
// }

//<button onClick={this.handleLiker}>
//{this.state.liker ? 'UNLIKE' : 'LIKE'}
//</button>
