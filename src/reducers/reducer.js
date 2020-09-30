

const initialState = {
    trails: [],
    users: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TRAILS':
            return {
                ...state,
                trails: action.payload.trails
            }
        default:
            return state;
    }
}

export default Reducer;




//If you have multiple reducers, remember to use combineReducers (import this, if needed!)