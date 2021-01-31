import React from 'react';
import UserDetail from "../userDetail";

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
                    <th>Name</th>
                    <th>Cpf</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { renderRows(props.list) }
            </tbody>
        </table>
    )
}

export default UserList;