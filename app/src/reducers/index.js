
import { act } from 'react-dom/test-utils'
import { FETCH_DATA, FETCH_DATA_FAIL, FETCH_DATA_SUCCESS } from '../actions'

const initialState = {
    people: [],
    error: '',
    isFetching: false
}

export const rootReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                error: '',
                isFetching: true
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                people: action.payload
            }

        default:
            console.log("default")
            return state
    }
}