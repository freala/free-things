import React, {Component} from 'react';

const foundations = {
    name:"foundations",
    description:"W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
    list:[
        {
            name:'Fundacja "Dbam o zdrowie"',
            goal:'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
            needs: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name:'Fundacja "Dla dzieci"',
            goal:'Pomoc dzieciom z ubogich rodzin',
            needs:"ubrania, meble, zabawki"
        },
        {
            name:'Fundacja "Bez domu"',
            goal:'Pomoc dla osób nie posiadających miejsca zamieszkania',
            needs:'ubrania, jedzenie, ciepłe koce'
        },
        {
            name:'Fundacja "Lorem ipsum 4"',
            goal:'Pellentesque consectetur, urna quis egestas aliquet',
            needs:'eleifend, tortor, pulvinar'
        },
        {
            name:'Fundacja "Lorem ipsum 5"',
            goal:'Pellentesque consectetur, urna quis egestas aliquet',
            needs:'eleifend, tortor, pulvinar'
        },
        {
            name:'Fundacja "Lorem ipsum 6"',
            goal:'Pellentesque consectetur, urna quis egestas aliquet',
            needs:'eleifend, tortor, pulvinar'
        },
        {
            name:'Fundacja "Lorem ipsum 7"',
            goal:'Pellentesque consectetur, urna quis egestas aliquet',
            needs:'eleifend, tortor, pulvinar'
        },
        {
            name:'Fundacja "Lorem ipsum 8"',
            goal:'Pellentesque consectetur, urna quis egestas aliquet',
            needs:'eleifend, tortor, pulvinar'
        },
        {
            name:'Fundacja "Lorem ipsum 9"',
            goal:'Pellentesque consectetur, urna quis egestas aliquet',
            needs:'eleifend, tortor, pulvinar'
        }
    ]
};

const organizations = {
    name:"organizations",
    description:"W naszej bazie znajdziesz listę zweryfikowanych organizacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
    list:[
        {
            name:'Organizacja "Lorem ipsum 1"',
            goal:"Pellentesque consectetur, urna quis egestas aliquet",
            needs:"eleifend, tortor, pulvinar"
        },
        {
            name:'Organizacja "Lorem ipsum 2"',
            goal:"Pellentesque consectetur, urna quis egestas aliquet",
            needs:"eleifend, tortor, pulvinar"
        },
        {
            name:'Organizacja "Lorem ipsum 3"',
            goal:"Pellentesque consectetur, urna quis egestas aliquet",
            needs:"eleifend, tortor, pulvinar"
        },
        {
            name:'Organizacja "Lorem ipsum 4"',
            goal:"Pellentesque consectetur, urna quis egestas aliquet",
            needs:"eleifend, tortor, pulvinar"
        },
        {
            name:'Organizacja "Lorem ipsum 5"',
            goal:"Pellentesque consectetur, urna quis egestas aliquet",
            needs:"eleifend, tortor, pulvinar"
        },
        {
            name:'Organizacja "Lorem ipsum 6"',
            goal:"Pellentesque consectetur, urna quis egestas aliquet",
            needs:"eleifend, tortor, pulvinar"
        }
    ]
};

const locals = {
    name:"locals",
    description:"W naszej bazie znajdziesz listę zweryfikowanych lokalnych zbiórek, z którymi współpracujemy. Możesz sprawdzić komu pomagają i czego potrzebują.",
    list:[
        {
            name:'Zbiórka "Lorem ipsum 1"',
            goal:"Pellentesque consectetur, urna quis egestas aliquet",
            needs:"Egestas, sed, tempus"
        },
        {
            name:'Zbiórka "Lorem ipsum 2"',
            goal:"Pellentesque consectetur, urna quis egestas aliquet",
            needs:"Egestas, sed, tempus"
        },
        {
            name:'Zbiórka "Lorem ipsum 3"',
            goal:"Pellentesque consectetur, urna quis egestas aliquet",
            needs:"Egestas, sed, tempus"
        }
    ]
};

class HomeWhoWeHelp extends Component{
    state = {
        currentContent: foundations,
        currentPage: 1,
        elementsOnPage: 3
    };
    handleClick = (object) => {
        this.setState({
            currentContent: object, currentPage: 1
        })
    };
    setPage = (page) => {
        this.setState({
            currentPage:page
        })
    };
    render(){
        let pageNumbers = [];
        for(let i=1; i<=Math.ceil(this.state.currentContent.list.length/this.state.elementsOnPage); i++){
            pageNumbers.push(i)
        }
        let pageContent = [];
        for(let j=(this.state.currentPage-1)*(this.state.elementsOnPage); j<(this.state.currentPage)*(this.state.elementsOnPage); j++){
            pageContent.push(
                <>
                <div>
                    <h3>{this.state.currentContent.list[j].name}</h3>
                    <p>{this.state.currentContent.list[j].goal}</p>
                </div>
                <p>{this.state.currentContent.list[j].needs}</p>
                </>)
        }
        return (
            <section className="who__we__help">
                <h2>Komu pomagamy?</h2>
                <img src="/assets/Decoration.svg" alt="decoration"/>
                <div className={"recipients"}>
                    <h3 onClick={()=>this.handleClick(foundations)} style={{border: this.state.currentContent.name==="foundations" ? "1px solid #3C3C3C": null}}>Fundacjom</h3>
                    <h3 onClick={()=>this.handleClick(organizations)} style={{border: this.state.currentContent.name==="organizations" ? "1px solid #3C3C3C": null}}>Organizacjom pozarządowym</h3>
                    <h3 onClick={()=>this.handleClick(locals)} style={{border: this.state.currentContent.name==="locals" ? "1px solid #3C3C3C": null}}>Lokalnym zbiórkom</h3>
                </div>
                <div className="recipients__content">
                    <div className="description">{this.state.currentContent.description}</div>
                    <ul className="content__list">
                        {pageContent.map((element,index) => <li key={index}>{element}</li>)}
                    </ul>
                    <ul className="content__pages" style={{display: pageNumbers.length===1&&'none'}}>
                        {pageNumbers.map((element,index) => <li onClick={() => this.setPage(element)} key={index} style={{border: this.state.currentPage===element ? "1px solid #3C3C3C": null}}>{element}</li>)}
                    </ul>
                </div>
            </section>
        )
    }
}

export default HomeWhoWeHelp;