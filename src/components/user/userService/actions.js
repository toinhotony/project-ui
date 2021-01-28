import axios from 'axios'

import {ACTIONS_SERVICE, CLEAR, CPF_CHANGED, FIND_ALL_USERS, NAME_CHANGED} from "./actionType";
import {CONFIG} from "../../../constants/constants";


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

//FIXME TOINHO : OBS verificar possibilidade de erro
export const save = (user) => {
   return dispatch => {
       axios.post(CONFIG.BASE_URL, user)
           .then(resp=> dispatch({
               type: ACTIONS_SERVICE.SAVE,
               payload : resp.data
           }))
           .then(resp=> dispatch(clearForm))
           .then(resp=> dispatch(findAll()))
   }
}

//FIXME TOINHO : OBS verificar possibilidade de erro
export const update = (user) => {
    return dispatch => {
        axios.put(`${CONFIG.BASE_URL}/${user.id}`, user)
            .then(resp=> dispatch({
                type: ACTIONS_SERVICE.UPDATE,
                payload : resp.data
            }))
            .then(resp=> dispatch(clearForm))
            .then(resp=> dispatch(findAll()))
    }
}

//FIXME TOINHO : OBS verificar possibilidade de erro
export const deleteUser = (id) => {
    return dispatch => {
        axios.delete(`${CONFIG.BASE_URL}/${id}`)
            .then(resp=> dispatch({
                type: ACTIONS_SERVICE.REMOVE,
            }))
            .then(resp=> dispatch(findAll()))
    }
}

//FIXME TOINHO : OBS verificar possibilidade de erro
export const importFile = (data) => {
    return dispatch => {
        axios.post(`${CONFIG.BASE_URL}/import`, data)
            .then(resp=> dispatch({
                type: ACTIONS_SERVICE.IMPORT,
                payload : resp.data
            }))
            .then(resp=> dispatch(findAll()))
    }
}