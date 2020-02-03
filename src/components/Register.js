import React, {Component} from 'react';
import "../scss/components/register.scss";
import {NavLink} from "react-router-dom";

class Register extends Component{
    state = {
        email: "",
        passwordOne: "",
        passwordTwo: ""
    };
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render(){
        return(
            <>
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
            <div className="register__content">
                <h2>Załóż konto</h2>
                <img src="/assets/Decoration.svg" alt="decoration"/>
                <form>
                    <div className="register__window">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" value={this.state.email}
                               onChange={this.handleInput}/>
                        <label htmlFor="password">Hasło</label>
                        <input id="password" type="password" name="password" value={this.state.passwordOne}
                               onChange={this.handleInput}/>
                        <label htmlFor="password__confirm">Powtórz hasło</label>
                        <input id="password__confirm" type="password" name="password" value={this.state.passwordTwo}
                               onChange={this.handleInput}/>
                    </div>
                    <div className="buttons">
                        <button type="submit"><NavLink to="/login">Zaloguj się</NavLink></button>
                        <button type="button">Załóż konto</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}

export default Register;