import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import "../scss/components/home.scss";
import HomeWhoWeHelp from "./WhoWeHelp";

class Home extends Component{
    render(){
        return(
            <>
                <HomeHeader/>
                <HomeThreeColumns/>
                <HomeSimpleSteps/>
                <HomeAboutUs/>
                <HomeWhoWeHelp/>
                <HomeContact/>
            </>
        )
    }
}

class HomeHeader extends Component{
    render(){
        return(
            <header id="home">
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
                        <li><Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}>Start</Link></li>
                        <li><Link
                                activeClass="active"
                                to="simple__steps"
                                spy={true}
                                smooth={true}
                                duration={500}>O co chodzi?</Link></li>
                        <li><Link
                                activeClass="active"
                                to="about__us"
                                spy={true}
                                smooth={true}
                                duration={500}>O nas</Link></li>
                        <li><Link
                                activeClass="active"
                                to="who__we__help"
                                spy={true}
                                smooth={true}
                                duration={500}>Fundacja i organizacje</Link></li>
                        <li><Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}>Kontakt</Link></li>
                    </ul>
                </nav>
                <div className="banner">
                    <div className="message">
                        <h1>Zacznij pomagać!</h1>
                        <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                        <img src="/assets/Decoration.svg" alt="decoration"/>
                    </div>
                    <div className="buttons">
                        <button>oddaj rzeczy</button>
                        <button>zorganizuj zbiórkę</button>
                    </div>
                </div>
            </header>
        )
    }
}

class HomeThreeColumns extends Component{
    render(){
        return(
            <>
                <section className="three__columns">
                    <div className="column">
                        <h3>10</h3>
                        <h4>oddanych worków</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur laoreet eu metus vitae dignissim. Maecenas lorem diam, semper a tincidunt a,
                            pharetra non ligula.</p>
                    </div>
                    <div className="column">
                        <h3>5</h3>
                        <h4>wspartych organizacji</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur laoreet eu metus vitae dignissim. Maecenas lorem diam, semper a tincidunt a,
                            pharetra non ligula.</p>
                    </div>
                    <div className="column">
                        <h3>7</h3>
                        <h4>zorganizowanych zbiórek</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur laoreet eu metus vitae dignissim. Maecenas lorem diam, semper a tincidunt a,
                            pharetra non ligula.</p>
                    </div>
                </section>
            </>
        )
    }
}

class HomeSimpleSteps extends Component{
    render(){
        return(
            <>
                <section className="simple__steps">
                    <div className="intro__steps">
                        <h2>Wystarczą 4 proste kroki</h2>
                        <img src="/assets/Decoration.svg" alt="decoration"/>
                    </div>
                    <div className="steps">
                        <div className="step">
                            <img src="/assets/Icon-1.svg" alt="icon"/>
                            <h5>Wybierz rzeczy</h5>
                            <div className="line"/>
                            <p>ubrania, zabawki, sprzęt i inne</p>
                        </div>
                        <div className="step">
                            <img src="/assets/Icon-2.svg" alt="icon"/>
                            <h5>Spakuj je</h5>
                            <div className="line"/>
                            <p>skorzystaj z worków na śmieci</p>
                        </div>
                        <div className="step">
                            <img src="/assets/Icon-3.svg" alt="icon"/>
                            <h5>Zdecyduj komu chcesz pomóc</h5>
                            <div className="line"/>
                            <p>wybierz zaufane miejsce</p>
                        </div>
                        <div className="step">
                            <img src="/assets/Icon-4.svg" alt="icon"/>
                            <h5>Zamów kuriera</h5>
                            <div className="line"/>
                            <p>kurier przyjedzie w dogodnym terminie</p>
                        </div>
                    </div>
                    <div className="submit__steps">
                        <button><NavLink to="/logowanie">oddaj rzeczy</NavLink></button>
                    </div>
                </section>
            </>
        )
    }
}

class HomeAboutUs extends Component{
    render(){
        return(
            <>
                <section className="about__us">
                    <div className="us">
                        <h2>O nas</h2>
                        <img src="/assets/Decoration.svg" alt="decoration"/>
                        <p>Fusce in gravida nulla, eget eleifend turpis. Pellentesque consectetur,
                            urna quis egestas aliquet, tortor eros pharetra justo, eu pulvinar quam nunc sed leo. </p>
                        <img src="/assets/Signature.svg" alt="signature" className="signature"/>
                    </div>
                    <div className="team"/>
                </section>
            </>
        )
    }
}

class HomeContact extends Component{
    state = {
        name: "",
        email: "",
        message: ""
    };
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render(){
        return(
            <>
                <section className="contact">
                    <div className="transparent__background">
                    </div>
                    <div className="section__content">
                        <div className="contact__us">
                            <h2>Skontaktuj się z nami</h2>
                            <img src="/assets/Decoration.svg" alt="decoration"/>
                            <form>
                                <div className="contact__data">
                                    <div className="contact__name">
                                        <label htmlFor="name">Wpisz swoje imię</label>
                                        <input id="name" type="text" name="name" value={this.state.name} placeholder="Krzysztof" onChange={this.handleInput}/>
                                    </div>
                                    <div className="contact__email">
                                        <label htmlFor="email">Wpisz swój email</label>
                                        <input id="email" type="email" name="email" value={this.state.email} placeholder="abc@xyz.pl" onChange={this.handleInput}/>
                                    </div>
                                </div>
                                <div className="contact__message">
                                    <label htmlFor="textarea">Wpisz swoją wiadomość</label>
                                    <textarea id="textarea" name="message" value={this.state.message}
                                              placeholder="Fusce in gravida nulla, eget eleifend turpis. Pellentesque
                                              consectetur, urna quis egestas aliquet, tortor eros pharetra justo,
                                              eu pulvinar quam nunc sed leo. Fusce in gravida nulla, eget eleifend turpis."
                                              onChange={this.handleInput}/>
                                </div>
                                <button type="submit">Wyślij</button>
                            </form>
                        </div>
                        <div className="section__footer">
                            <p>Copywright by CodersLab</p>
                            <div className="media__icons">
                                <a href=" "><i className="fab fa-facebook-square"></i></a>
                                <a href=" "><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                </section>
            </>
        )
    }
}

export default Home;