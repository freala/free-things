import React, {Component} from 'react';
import {Link} from "react-scroll";
import "../scss/components/home.scss";

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
                        <Link to="/logowanie">Zaloguj</Link>
                    </div>
                    <div className="register">
                        <Link to="/rejestracja">Załóż konto</Link>
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
                                to="three__columns"
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
                        <img src="/src/assets/Decoration.svg" alt="decoration"/>
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

            </>
        )
    }
}

class HomeSimpleSteps extends Component{
    render(){
        return null
    }
}

class HomeAboutUs extends Component{
    render(){
        return(
            <>

            </>
        )
    }
}

class HomeWhoWeHelp extends Component{
    render(){
        return(
            <>

            </>
        )
    }
}

class HomeContact extends Component{
    render(){
        return(
            <>

            </>
        )
    }
}

export default Home;