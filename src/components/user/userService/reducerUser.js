import {ACTIONS_SERVICE, CLEAR, CPF_CHANGED, NAME_CHANGED} from './actionType'

const INITIAL_STATE = {
    user: { id: '', name: '', cpf: '' },
    list: []
}

export const reducerUsers = (state = INITIAL_STATE, action) => {
    //FIXME TOINHO : OBS
    switch(action.type) {
        case CLEAR:
            return {...state, user: {name:'', cpf :''}}
        case NAME_CHANGED:
            return {...state, user: {...state.user, name :action.payload}}
        case CPF_CHANGED:
            return {...state, user: {...state.user, cpf :action.payload}}
        case ACTIONS_SERVICE.LIST:
            return {...state, list: action.payload.data }
        case ACTIONS_SERVICE.SAVE:
            return {...state, user: {name:'', cpf :''}}
        case ACTIONS_SERVICE.REMOVE:
            return {...state}
        case ACTIONS_SERVICE.SELECT:
            const user = state.list.filter(u => u.id === action.payload)[0];
            return {...state, user}
        case ACTIONS_SERVICE.UPDATE:
            return {...state, user: {name:'', cpf :''}}
        default :
            return state;
    }
}