import { combineReducers } from 'redux';
import activitiesReducer from './activities_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    activities: activitiesReducer
})

export default entitiesReducer;