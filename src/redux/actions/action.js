import * as actionTypes from '../types/types'

export const addUsername = (username) => {
    return {
        type: actionTypes.ADD_USERNAME,
        username:username
    }
}

export const addPassword = (payload) => {
    return {
        type: actionTypes.ADD_PASSWORD,
        payload:payload
    }
}