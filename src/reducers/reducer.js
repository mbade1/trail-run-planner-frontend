const initialState = {
  trails: [],
  user: '',
  id: '',
  journals: [],
  fetchTrails: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRAILS':
      return {
        ...state,
        trails: action.payload.trails,
        fetchTrails: true
      }
    case 'ADD_USER':
      return {
      ...state,
      user: action.payload.username,
      id: action.payload.id
    }
    case "SET_USER":
      return {
      ...state,
      user: action.payload.username,
      id: action.payload.id
    }
    case "ADD_JOURNAL":
      return {
        ...state,
        journals: action.payload
      }
    case 'FETCH_JOURNALTRAILS':
      return {
        ...state,
        journals: action.payload
      }

    default:
      return state;
  }
}

export default rootReducer;