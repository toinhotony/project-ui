import React, {useEffect, useRef} from 'react';
import Message from "../../message";

const UserForm = props => {
    const {save, update, user, changeName, changeCpf, clearForm, messageText, openDialog, severity } = props;
    const isInitialMount = useRef(true);

    useEffect(()=> {
        if (isInitialMount.current) {
            props.findAll();
            isInitialMount.current = false;
        }
    });

    const saveUser = user => {
        if (!user.id) {
            save(user);
        } else {
            update(user);
        }
    }

    return (
        <div className="form">
            
            <Message openDialog={openDialog} messageText={messageText} severity={severity} />

            <div className="row">
                { user.id &&
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Id</label>
                            <input type="text" className="form-control"
                                    name="id"
                                    value={ user.id }
                                    disabled />
                        </div>
                    </div>
                }

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control"
                               name="name"
                               value={ user.name }
                               onChange={changeName}
                               placeholder="Nome" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Cpf</label>
                        <input type="text" className="form-control"
                               name="cpf"
                               value={ user.cpf }
                               onChange={ changeCpf }
                               placeholder="Cpf" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary"
                             onClick={() => saveUser(user)}>
                        Save
                    </button>
                    <button className="btn btn-secondary ml-2"
                            onClick={ clearForm }>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;