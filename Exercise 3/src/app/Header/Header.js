import React from 'react';
import './Header.scss';

import loginLogo from './login-logo.png'

export default function Header(){

    return (
        <header  className="header container">
            <div className="row">
                <img className="col-xs-6" alt="" src={loginLogo}/>
                <h1 className="col-xs-6 login-txt">Login</h1>
            </div>
        </header>
    );
}