const initialState = {
    example: []
}

const Reducer = (state = {trails: [], users: []}, action) => {
    switch(action.type) {
        case 'ADD_TRAILS':
            return {
                ...state,
                trails: [...state.trails]
            }
        default:
            return state;
    }
}

export default Reducer;




//If you have multiple reducers, remember to use combineReducers (import this, if needed!)