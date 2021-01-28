import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';

import Header from '../components/pages/header/header'
import Home from '../components/home/home';
import Footer from '../components/pages/footer/footer';

export default props => 
    <div className="app">
        <Header />
        <Home />
        <Footer />
    </div>