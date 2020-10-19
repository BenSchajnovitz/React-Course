import React from 'react';
import feet from './feet.png';
import './Footer.scss'

function Footer(){
    return(
        <footer className="footer container">
            <div className="row">
                <img className="col-xs-4" src={feet} alt=""/>
                <div className="col-xs-4 footer-txt">Im A Footer!</div>
                <img className="col-xs-4" src={feet} alt=""/>
            </div>
        </footer>
    );
}

export default Footer;