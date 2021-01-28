import { combineReducers } from 'redux'
import {reducerUsers} from "../components/user/userService/reducerUser";

const rootReducer = combineReducers({
    reducerUsers : reducerUsers,
})

export default rootReducer;