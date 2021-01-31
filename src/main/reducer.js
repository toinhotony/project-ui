import { combineReducers } from 'redux'
import {reducerUsers} from "../service/userService/reducerUser";
import {reducerMessage} from "../service/messageService/reducerMessage";

const rootReducer = combineReducers({
    reducerUsers: reducerUsers,
    reducerMessage:  reducerMessage
})

export default rootReducer;