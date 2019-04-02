import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import axios from 'axios'

//initialState ********************************************
const initialState = {
    Users: [],
    newUser: {}
}
//Action type **************************************************
const ADD_USER = 'ADD_USER'
const SEED_USER = 'SEED_USER'
//Action creators ***********************************************
export const seedUser = (user) => ({
    type: SEED_USER,
    user
})
export const addUser = (user) => ({
    type: ADD_USER,
    user
})

export const fetchUsers = () => {
    return async (dispatch) => {
        const response = await axios.get('/api/users')
        const users = response.data;
        dispatch(seedUser(users))
    } 
}

export const postUsers = () => {
    return async (dispatch) => {
        const response = await axios.post('api/users')
        const newUser = response.data
        dispatch(seedUser(newUser))
    }
}

//reducer **************************************************
const reducer = (state = initialState, action) => {
    switch(action.type){
        case SEED_USER:
            return {...state, Users: action.user }
        case ADD_USER:
            // const newUsers = [...state.Users, action.user];
            // console.log(newUsers)
            return {...state, newUser: action.user}
        default:
            return state
    }
}

//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store;