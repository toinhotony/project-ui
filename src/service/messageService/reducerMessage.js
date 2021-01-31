import {ACTIONS_MESSAGE} from "./actionType";

const INITIAL_STATE = {
    messageText : '',
    openDialog : false,
    severity: ''
}

export function reducerMessage(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONS_MESSAGE.SHOW_MESSAGE:
            return {...state, messageText : action.messageText, openDialog: true, severity: action.severity}
        case ACTIONS_MESSAGE.CLOSE_MESSAGE:
            return {...state, messageText : '', openDialog: false}
        default :
            return state;
    }

}