import Axios from 'axios'

export const FETCH_DATA = "FETCH_DATA"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL"


export const getData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA })
    Axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
            // console.log(res)
            dispatch({type:FETCH_DATA_SUCCESS, payload:res.data.results})
        })
        .catch(err => console.log(err))
}