import { combineReducers } from 'redux';
import activitiesReducer from './activities_reducer';
import followsReducer from './follows_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    activities: activitiesReducer,
    follows: followsReducer
})

export default entitiesReducer;