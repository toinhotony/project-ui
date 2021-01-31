import React from 'react';
import './home.css'

import UserUpload from '../user/userUpload';
import UserForm from '../user/userForm';
import UserList from '../user/userList';

const Home = props => {
        return (
            <home className="content container-fluid user__bloc">
                <div className="p-3 mt-3">
                    <UserUpload />
                    <UserForm />
                    <UserList />
                </div>
            </home>
        )
}

export default Home;