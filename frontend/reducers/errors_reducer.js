import { combineReducers } from 'redux';
import activityErrorsReducer from './activity_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    activity: activityErrorsReducer,
    comment: commentErrorsReducer
})

export default errorsReducer;