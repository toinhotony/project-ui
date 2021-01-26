import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';

import Header from '../components/templates/Header'
import User from '../components/user/User';
import Footer from '../components/templates/Footer';

export default props => 
    <div className="app">
        <Header />
        <User />
        <Footer />
    </div>