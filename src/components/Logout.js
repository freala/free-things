import React, {Component} from 'react';
import "../scss/components/logout.scss";
import {NavLink} from "react-router-dom";

class Logout extends Component{
    render(){
        return(
            <>
                <header id="logout__header">
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
                <div className="logout__content">
                    <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                    <img src="/assets/Decoration.svg" alt="decoration"/>
                    <button><NavLink to="/home">Strona główna</NavLink></button>
                </div>
            </>
        )
    }
}

export default Logout;