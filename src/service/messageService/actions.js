import {ACTIONS_MESSAGE} from "./actionType";

export function showMessage(messageText, severity) {
    return {
        type : ACTIONS_MESSAGE.SHOW_MESSAGE,
        messageText : messageText,
        severity
    }
}

export function closeMessage() {
    return {
        type : ACTIONS_MESSAGE.CLOSE_MESSAGE
    }
}