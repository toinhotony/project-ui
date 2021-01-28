import React from 'react';

const UserDetail = props => {
    const { selectUser, deleteUser, user } = props;
    return (
        <tr key={ user.id }>
            <td>{ user.name }</td>
            <td>{ user.cpf }</td>
            <td>
                <button className="btn btn-info" onClick={() => selectUser(user.id)}>
                    <i className="fa fa-pencil"></i>
                </button>
                <button className="btn btn-danger ml-2" onClick={() => deleteUser(props.user.id)}>
                    <i className="fa fa-trash"></i>
                </button>
            </td>
        </tr>
    )
}

export default UserDetail;