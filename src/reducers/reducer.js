const initialState = {
  trails: [],
  username: "",
  id: "",
  journals: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TRAILS":
      return {
        ...state,
        trails: action.payload.trails,
      };
    case "ADD_USER":
      return {
        ...state,
        username: action.payload.username,
        id: action.payload.id,
      };
    case "SET_USER":
      return {
        ...state,
        username: action.payload.username,
        id: action.payload.id,
      };
    case "ADD_JOURNAL":
      debugger
      return {
        ...state,
        journals: action.payload,
      };
    case "FETCH_JOURNALTRAILS":
      return {
        ...state,
        journals: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        username: "",
        id: "",
      };

    default:
      return state;
  }
};

export default rootReducer;