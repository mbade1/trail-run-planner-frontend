const initialState = {
    trails: [],
    user: '',
    journals: [],
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TRAILS':
            return {
                ...state,
                trails: action.payload.trails
            }
        case 'ADD_USER':
            debugger
            return {
                ...state,
                user: action.payload.user
            }
        case "SET_USER":
            debugger
            return {
                ...state,
                user: action.payload
            }

        default:
            return state;
    }
}

export default Reducer;