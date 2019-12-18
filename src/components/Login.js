import React, {Component} from 'react';
import "../scss/components/login.scss";
import {NavLink} from "react-router-dom";

class Login extends Component{
    state = {
        email: "",
        password: ""
    };
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render(){
        return(
            <>
                <header id="login__header">
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
                <div className="login__content">
                    <h2>Zaloguj się</h2>
                    <img src="/assets/Decoration.svg" alt="decoration"/>
                    <form>
                        <div className="login__window">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleInput}/>
                            <label htmlFor="password">Hasło</label>
                            <input id="password" type="password" name="password" value={this.state.password} onChange={this.handleInput}/>
                        </div>
                        <div class="buttons">
                            <button type="button"><NavLink to="/rejestracja">Załóż konto</NavLink></button>
                            <button type="submit">Zaloguj się</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Login;