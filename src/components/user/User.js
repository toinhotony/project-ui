import React, { Component } from 'react';
import axios from 'axios'
import './User.css'
import UserUpload from './UserUpload';

//State inicial
const baseURL = 'http://localhost:8089/api/users';

const initialState = {
    user: { name: '', cpf: '' },
    list: []
}

export default class User extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseURL).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseURL}/${user.id}` : baseURL;
        axios[method](url, user).then(resp => {
            const list = this.getUpdatedList(resp.data);
            this.setState({ user: initialState.user, list });
        })
    }

    getUpdatedList(user, add= true) {
        const list = this.state.list.filter(u => u.id !== user.id );
        if (add) list.unshift(user);
        return list;
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={ this.state.user.name }
                                onChange={ e => this.updateField(e) } 
                                placeholder="Nome" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Cpf</label>
                            <input type="text" className="form-control" 
                                name="cpf" 
                                value={ this.state.user.cpf }
                                onChange={ e => this.updateField(e) } 
                                placeholder="Cpf" />
                        </div>
                    </div>
                </div>           
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" 
                            onClick={ e => this.save(e) }>
                                Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" 
                            onClick={ e => this.clear(e) }>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseURL}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable() {
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
                    { this.renderRows() }
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={ user.id }>
                    <td>{ user.name }</td>
                    <td>{ user.cpf }</td>
                    <td>
                        <button className="btn btn-info" onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    
    render() {
        return (
            <user className="content container-fluid">
                <div className="p-3 mt-3">
                    <UserUpload />
                    { this.renderForm() }
                    { this.renderTable() }
                </div>
            </user>
        )
    }
}