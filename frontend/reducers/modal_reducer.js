import { CLOSE_MODAL, OPEN_MODAL } from "../actions/modal_actions";

let initialState = {
    modal: false
}

const modalReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = {...state};
    switch(action.type){
        case OPEN_MODAL:
            nextState = {modal : true}
            return nextState;
        case CLOSE_MODAL:
            nextState = {modal: false}
            return nextState;
        default:
            return state;
    }
}

export default modalReducer;