import React from "react";
import {logOutFetch} from "../actions/Actions";
import { withRouter } from "react-router";
import { connect } from "react-redux";

const LogOut = ({ history }) => {
  return (
    <div className="LogOut">
      <div className="logout-container">
        <h1>Are you sure you want to Log Out?</h1>
        <div
          onClick={() => {
            localStorage.removeItem("id");
            history.push("/trail-run-planner-frontend");
            window.location.reload();
          }}
        >
          <p>If yes, click here.</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    id: state.id,
  };
};

export default withRouter(connect(mapStateToProps, { logOutFetch })(LogOut));