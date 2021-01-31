import axios from 'axios'

import {ACTIONS_SERVICE, CLEAR, CPF_CHANGED, NAME_CHANGED, ERROR_API} from "./actionType";
import {CONFIG} from "../../constants/constants";
import {showMessage} from "../messageService/actions";
import {MESSAGE_TYPES} from "../messageService/messageType";


export const clearForm = () => ({
    type: CLEAR,
})

export const changeName = (event) => ({
    type: NAME_CHANGED,
    payload: event.target.value,
})

export const changeCpf = (event) => ({
    type: CPF_CHANGED,
    payload: event.target.value,
})

export const findAll = () => {
    const request =  axios.get(CONFIG.BASE_URL)
    return {
        type: ACTIONS_SERVICE.LIST,
        payload : request
    }
}

export const selectUser = (idUser) => ({
    type: ACTIONS_SERVICE.SELECT,
    payload: idUser,
})

export const save = (user) => {
   return dispatch => {
       axios.post(CONFIG.BASE_URL, user)
           .then(resp=> dispatch({
               type: ACTIONS_SERVICE.SAVE,
               payload : resp.data
           }))
           .then(resp=> dispatch(showMessage('User created!', MESSAGE_TYPES.SUCCESS)))
           .then(resp=> dispatch(clearForm))
           .then(resp=> dispatch(findAll()))
           .catch(error => { dispatch(
            showMessage(error.response.data.message, MESSAGE_TYPES.ERROR)
            )
        })
   }
}

export const update = (user) => {
    return dispatch => {
        axios.put(`${CONFIG.BASE_URL}/${user.id}`, user)
            .then(resp=> dispatch({
                type: ACTIONS_SERVICE.UPDATE,
                payload : resp.data
            }))
            .then(resp=> dispatch(showMessage('User updated!', MESSAGE_TYPES.SUCCESS)))
            .then(resp=> dispatch(clearForm))
            .then(resp=> dispatch(findAll()))
            .catch(error => { dispatch(
                showMessage(error.response.data.message, MESSAGE_TYPES.ERROR)
            )
            })
    }
}

export const deleteUser = (id) => {
    return dispatch => {
        axios.delete(`${CONFIG.BASE_URL}/${id}`)
            .then(resp=> dispatch({
                type: ACTIONS_SERVICE.REMOVE,
            }))
            .then(resp=> dispatch(showMessage('User deleted!', MESSAGE_TYPES.SUCCESS)))
            .then(resp=> dispatch(findAll()))
            .catch(error => { dispatch(
                showMessage(error.response.data.message, MESSAGE_TYPES.ERROR)
            )
            })
    }
}

export const importFile = (data) => {
    return dispatch => {
        axios.post(`${CONFIG.BASE_URL}/import`, data)
            .then(resp=> dispatch({
                type: ACTIONS_SERVICE.IMPORT,
                payload : resp.data
            }))
            .then(resp=> dispatch(showMessage('File successfully imported!', MESSAGE_TYPES.SUCCESS)))
            .then(resp=> dispatch(findAll()))
            .catch(error => { dispatch(
                showMessage(error.response.data.message, MESSAGE_TYPES.ERROR)
            )
            })
    }
}