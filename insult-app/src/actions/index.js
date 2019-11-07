import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchInsults = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axios 
        .get('https://cors-anywhere.herokuapp.com/https://insult.mattbas.org/api/insult')
        .then(res => {
            console.log('res', res)
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }));
};