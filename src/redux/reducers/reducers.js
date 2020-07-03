import * as ActionTypes from '../types/types'


const initialState = {
    username: '',
    password: ''
}


const reducers = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.ADD_USERNAME:
            return {
                ...state,
                username: "test Username"
            }
        case ActionTypes.ADD_PASSWORD:
            return {
                ...state,
                username: "test Password"
            }
        default:
            return state
    }
}

export default reducers