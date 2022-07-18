import { combineReducers } from 'redux';
import activitiesReducer from './activities_reducer';
import commentsReducer from './comments_reducer';
import followsReducer from './follows_reducer';
import kudosReducer from './kudos_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    activities: activitiesReducer,
    follows: followsReducer,
    comments: commentsReducer,
    kudos: kudosReducer
})

export default entitiesReducer;