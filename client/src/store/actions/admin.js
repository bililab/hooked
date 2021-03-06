import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchAdminEvents = () => {
    return dispatch => {
        axios.get('/api/events/all')
            .then(res => {
                dispatch(fetchAdminEventsSuccess(res.data));
            }).catch(err => {
                dispatch(fetchAdminEventsFail(err));
            });
    };
};

export const fetchAllUsers = ()=>{
    return dispatch =>{
        axios.get('/api/users/all')
        .then(res=>{
            dispatch(fetchAllUsersSuccess(res.data))
        }).catch(err=>{
            dispatch(fetchallUsersFail(err))
        })
    }
}

export const fetchAllUsersSuccess =(users)=>{
    console.log('fetchAllUsers', users)
    return{
        type:actionTypes.FETCH_ALL_USERS_SUCCESS,
        Users: users
    }
}

export const fetchallUsersFail =(error)=>{
    return{
        type:actionTypes.FETCH_ALL_USERS_FAIL,
        error: error 
    }
}

export const fetchAdminEventsSuccess = (events) => {
    console.log(events)
    return {
        type: actionTypes.FETCH_USER_EVENTS_SUCCESS,
        adminEvents: events
    };
};

export const fetchAdminEventsFail = (error) => {
    return {
        type: actionTypes.FETCH_USER_EVENTS_FAIL,
        error: error
    };
};


// ACTIONS THAT WE NEED:
// CREATE EVENT, EVENT PRODUCTS, EVENT SPONSORS
// FETCH EVENTS (BASED OFF OF ADMIN ACCESS LEVELS)
// FETCH EVENT SPONSORS, EVENT PRODUCTS, EVENT ORDERS, EVENT PARTICIPANTS
// UPDATE EVENT, EVENT PRODUCTS, EVENT SPONSORS
// DELETE EVENT, EVENT SPONSOR, EVENT PRODUCT