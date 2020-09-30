const initialState = {
    trails: [],
    user: '',
    journals: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TRAILS':
            return {
                ...state,
                trails: action.payload.trails
            }
        case 'ADD_USER':
            return {
                ...state,
                user: [...state.user, action.payload.user]
            }
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }

        default:
            return state;
    }
}

export default Reducer;




//If you have multiple reducers, remember to use combineReducers (import this, if needed!)