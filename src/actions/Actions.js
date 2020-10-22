const REACT_APP_GEO_API = process.env["REACT_APP_GEO_API"];
const REACT_APP_HIKING_API = process.env["REACT_APP_HIKING_API"];
const REACT_APP_BACKEND_API = process.env["REACT_APP_BACKEND_API"];

export const fetchCityAndTrails = (city = "Foresta", statee = "CA") => {
  return (dispatch) => {
    fetch(
      `https://api.geocod.io/v1.6/geocode?q=${city}%2c+${statee}&api_key=${REACT_APP_GEO_API}`
    )
      .then((resp) => resp.json())
      .then((coordinates) => fetchTrails(coordinates));

    const fetchTrails = (coordinates) => {
      fetch(
        `https://www.hikingproject.com/data/get-trails?lat=${coordinates["results"][0]["location"]["lat"]}&lon=${coordinates["results"][0]["location"]["lng"]}&maxResults=50&key=${REACT_APP_HIKING_API}`
      )
        .then((resp) => resp.json())
        .then((trails) =>
          dispatch({
            type: "FETCH_TRAILS",
            payload: trails,
          })
        );
    };
  };
};

export const journalDelete = (userId, journal) => {
  fetch(`${REACT_APP_BACKEND_API}/users/${userId}/journals/${journal}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      journal: journal,
    }),
  });
  return fetch(`${REACT_APP_BACKEND_API}/users/${userId}/journals`).then((r) =>
    r.json()
  );
};

export const journalFetch = (userId) => {
  return (dispatch) => {
    fetch(`${REACT_APP_BACKEND_API}/users/${userId}/journals`)
      .then((response) => response.json())
      .then((journalTrails) => {
        dispatch({
          type: "FETCH_JOURNALTRAILS",
          payload: journalTrails,
        });
      });
  };
};

export const journalPatch = (userId, journalId, data) => {
  fetch(`${REACT_APP_BACKEND_API}/users/${userId}/journals/${journalId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  })
    .then((response) => response.json())
    .then((updatedJournal) => console.log(updatedJournal));
};

export const journalPost = (userId, hiker_project_id, dateOfRun, body) => {
  debugger;
  return (dispatch) => {
    debugger;
    fetch(`${REACT_APP_BACKEND_API}/users/${userId}/journals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        journal: {
          hiker_project_id: hiker_project_id,
          dateOfRun: dateOfRun,
          body: body,
        },
      }),
    })
      .then((response) => response.json())
      .then((newJournalEntry) => {
        dispatch({ type: "ADD_JOURNAL", payload: newJournalEntry });
      });
  };
};

export const logInFetch = (username, password) => {
  return (dispatch) => {
    fetch(`${REACT_APP_BACKEND_API}/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((loggedInUser) => {
        if (loggedInUser.id) {
          localStorage.setItem("id", loggedInUser.id);
          dispatch({ type: "SET_USER", payload: loggedInUser });
        } else {
          alert(loggedInUser.message);
        }
      });
  };
};

export const logOutFetch = (id) => {
  localStorage.removeItem("id");
  fetch(`${REACT_APP_BACKEND_API}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then((response) => response.json())
    .then((loggedOutUser) => {
      localStorage.removeItem("id");
      dispatchEvent({ type: "LOGOUT_USER", payload: loggedOutUser });
    });
};

export const signUpFetch = (user, password) => {
  return (dispatch) => {
    fetch(`${REACT_APP_BACKEND_API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          user: user,
          password: password,
        },
      }),
    })
      .then((response) => response.json())
      .then((newUser) => {
        if (newUser.id) {
          localStorage.setItem("id", newUser.id);
          dispatch({ type: "ADD_USER", payload: newUser });
        } else {
          alert(newUser.message);
        }
      });
  };
};
