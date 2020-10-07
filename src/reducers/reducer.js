const initialState = {
    trails: [],
    user: '',
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
            debugger
            return {
                ...state,
                user: action.payload
            }
        case "SET_USER":
            debugger
            return {
                ...state,
                user: action.payload
            }
        case "ADD_JOURNAL":
            debugger
            return {
                ...state,
                journals: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;