import { combineReducers } from 'redux';
import activitiesReducer from './activities_reducer';
import commentsReducer from './comments_reducer';
import followsReducer from './follows_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    activities: activitiesReducer,
    follows: followsReducer,
    comments: commentsReducer
})

export default entitiesReducer;