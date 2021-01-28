import React from 'react';
import UserDetail from "../userDetail";
import {deleteUser, selectUser} from "../userService/actions";

const UserList = props => {

    const renderRows = listUsers => {
        return listUsers.map(user => {
           return <UserDetail user={user} selectUser={props.selectUser} deleteUser={props.deleteUser} />
        })
    }

    return (
        <table className="table mt-4">
            <thead>
            <tr>
                <th>Nome</th>
                <th>Cpf</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
                { renderRows(props.list) }
            </tbody>
        </table>
    )
}

export default UserList;