import { RECEIVE_ALL_KUDOS, RECEIVE_KUDO, REMOVE_KUDO } from "../actions/kudo_actions"

const initialState = {

}

const kudosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = {...state};
    switch(action.type){
        case RECEIVE_ALL_KUDOS:
            nextState = {...action.kudos};
            return nextState;
        case RECEIVE_KUDO:
            if (nextState[action.kudo.activityId] === undefined) {
                let newActivityId = {};
                newActivityId[action.kudo.id] = action.kudo;
                nextState[action.kudo.activityId] = newActivityId;
            } else {
                let currentState = nextState[action.kudo.activityId][action.kudo.id]
                nextState[action.kudo.activityId][action.kudo.id] = {...currentState, ...action.kudo};
            }
            return nextState;
        case REMOVE_KUDO:
            delete nextState[action.kudo.activityId][action.kudo.id]
            return nextState;
        default:
            return state;
    }
}

export default kudosReducer;