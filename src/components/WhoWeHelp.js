import React, {Component} from 'react';

class FoundationOne extends Component{
    render(){
        return(
            <div className="foundation">
                <div className="foundation__name">
                    <h3>Fundacja "Dbam o zdrowie"</h3>
                    <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                </div>
                <div className="needs">
                    <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </div>
            </div>
        )
    }
}

class FoundationTwo extends Component{
    render(){
        return(
            <div className="foundation">
                <div className="foundation__name">
                    <h3>Fundacja "Dla dzieci"</h3>
                    <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                </div>
                <div className="needs">
                    <p>ubrania, meble, zabawki</p>
                </div>
            </div>
        )
    }
}

class FoundationThree extends Component{
    render(){
        return(
            <div className="foundation">
                <div className="foundation__name">
                    <h3>Fundacja "Bez domu"</h3>
                    <p>Cel i misja: Pomoc dla osób nieposiadających miejsca zamieszkania.</p>
                </div>
                <div className="needs">
                    <p>ubrania, jedzenie, ciepłe koce</p>
                </div>
            </div>
        )
    }
}

class FoundationFour extends Component{
    render(){
        return(
            <div className="foundation">
                <div className="foundation__name">
                    <h3>Fundacja "Dla dzieci"</h3>
                    <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                </div>
                <div className="needs">
                    <p>ubrania, meble, zabawki</p>
                </div>
            </div>
        )
    }
}

class FoundationFive extends Component{
    render(){
        return(
            <div className="foundation">
                <div className="foundation__name">
                    <h3>Fundacja "Dla dzieci"</h3>
                    <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                </div>
                <div className="needs">
                    <p>ubrania, meble, zabawki</p>
                </div>
            </div>
        )
    }
}

class FoundationSix extends Component{
    render(){
        return(
            <div className="foundation">
                <div className="foundation__name">
                    <h3>Fundacja "Dla dzieci"</h3>
                    <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                </div>
                <div className="needs">
                    <p>ubrania, meble, zabawki</p>
                </div>
            </div>
        )
    }
}

class FoundationSeven extends Component{
    render(){
        return(
            <div className="foundation">
                <div className="foundation__name">
                    <h3>Fundacja "Dla dzieci"</h3>
                    <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                </div>
                <div className="needs">
                    <p>ubrania, meble, zabawki</p>
                </div>
            </div>
        )
    }
}

class FoundationList extends Component{
    state={
        foundations:
            [<FoundationOne/>, <FoundationTwo/>, <FoundationThree/>, <FoundationFour/>, <FoundationFive/>, <FoundationSix/>, <FoundationSeven/>],
        currentPage: 1,
        foundationsPerPage: 3
    };
    handleClick = (e, i) =>{
        this.setState({
            currentPage: i
        })
    };
    render() {
        const {foundations, currentPage, foundationsPerPage} = this.state;
        const indexOfLastFoundation = foundationsPerPage * currentPage;
        const indexOfFirstFoundation = indexOfLastFoundation - foundationsPerPage;
        const currentFoundations = foundations.slice(indexOfFirstFoundation, indexOfLastFoundation);
        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(foundations.length/foundationsPerPage); i++) {
            pageNumbers.push(<div key={i} onClick={e => this.handleClick(e, i)} className={currentPage === i && 'active'}>{i}</div>)
        }
        return (
            <div className="foundations">
                <p>W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy.
                    Możesz sprawdzić, czym się zajmują, komu pomagają i czego potrzebują.</p>
                <div className="foundations__list">
                    {
                        currentFoundations.map((foundation, i) => {
                                return <div key={i}>{foundation}</div>
                            }
                        )
                    }
                    <div className="foundations__pages">
                        {pageNumbers}
                    </div>
                </div>
            </div>
        )
    }
}

/*class OrganizationList extends Component{
    state={

    };
    render(){
        return(
        <div className="organizations">
            <p>Fusce in gravida nulla, eget eleifend turpis. Pellentesque consectetur,
               urna quis egestas aliquet, tortor eros pharetra justo, eu pulvinar quam nunc sed leo.
               Fusce in gravida nulla, eget eleifend turpis. Pellentesque consectetur,
               urna quis egestas aliquet, tortor eros pharetra justo, eu pulvinar quam nunc sed leo.</p>
        </div>
        )
    }
}

class LocalList extends Component{
    state={
    };
    render(){
        return(
        )
    }
}*/


class HomeWhoWeHelp extends Component{
    render(){
        return(
            <>
                <section className="who__we__help">
                    <h2>Komu pomagamy?</h2>
                    <img src="/assets/Decoration.svg" alt="decoration"/>
                    <div className="recipients">
                        <div>Fundacjom</div>
                        <div>Organizacjom pozarządowym</div>
                        <div>Lokalnym zbiórkom</div>
                    </div>
                    <div className="content__switch">
                        <FoundationList />

                    </div>
                </section>
            </>
        )
    }
}

export default HomeWhoWeHelp;