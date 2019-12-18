import React, {Component} from 'react';
import "../scss/components/register.scss";
import {NavLink} from "react-router-dom";

class Register extends Component{
    render(){
        return(
            <header id="register__header">
                <div className="account__links">
                    <div className="login">
                        <NavLink to="/logowanie">Zaloguj</NavLink>
                    </div>
                    <div className="register">
                        <NavLink to="/rejestracja">Załóż konto</NavLink>
                    </div>
                </div>
                <nav>
                    <ul className="main__menu">
                        <li><NavLink to="/">Start</NavLink></li>
                        <li><NavLink to="/">O co chodzi?</NavLink></li>
                        <li><NavLink to="/">O nas</NavLink></li>
                        <li><NavLink to="/">Fundacja i organizacje</NavLink></li>
                        <li><NavLink to="/">Kontakt</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Register;