import React, {Component, Fragment} from 'react';
import Card from "../card";
import ErrorBoundary from "../error-boundary";
import MockyService from "../../services/mocky-service";
import BannerImage from "./images/Rectangle.jpg";
import Numbers from "../numbers-block";

export default class HouseProtected extends Component {

    mockyService = new MockyService();

    state = {
    };

    componentDidMount() {
        this.mockyService
            .getNumbers()
            .then(this.onDataLoaded)
            .catch((err) => {console.error(err)} );
    }

    onDataLoaded = ({...data}) => {
        this.setState({
            ...data
        })
    };

    render() {

        const flatDescription  = <Fragment>квартир в <br/> обслуживании</Fragment>;
        const hoursDescription = <Fragment>часов <br/> съекономлено</Fragment>;
        const yearsDescription = <Fragment>лет <br/> работы</Fragment>;

        const { flatCount, hoursCount, yearsCount } = this.state;

        return (
            <section className="house-protected">
                <header className="house-protected__header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <h2 className="house-protected__title">Ваша квартира в надежных руках</h2>
                                <p className="house-protected__description">Мы оцениваем квартиру и даем рекомендации
                                    собственнику
                                    по устранению недостатков в квартире, проверяем подлинность и актуальность
                                    правоустанавливающих документов.</p>
                            </div>
                            <div className="col-6 col-md offset-md-1">
                                <Numbers count={flatCount} description={flatDescription} />
                            </div>
                            <div className="col-6 col-md">
                                <Numbers count={hoursCount} description={hoursDescription} />
                            </div>
                            <div className="col-6 col-md">
                                <Numbers count={yearsCount} description={yearsDescription} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-md-2">
                                <a href="#"
                                   className="house-protected__rent-button btn btn--type_primary btn--style_section btn--size_m">
                                    <span className="btn__text">Сдать квартиру</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </header>
                <main className="banner">
                    <ErrorBoundary>
                        <img src={BannerImage} alt="" className="banner__image"/>
                        <Card />
                    </ErrorBoundary>
                </main>
                <footer className="newsletters">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 offset-md-3">
                                <h2 className="newsletters__title">Подпишитесь на рассылку и получайте последние новости
                                    и
                                    интересные предложения</h2>
                            </div>
                            <div className="col-12 col-md-4 offset-md-4">
                                <form className="subscribe">
                                    <input type="email" className="subscribe__input" placeholder="Ваш email"/>
                                    <button type="submit" className="subscribe__submit">
                                        <svg className="subscribe__icon" width="22" height="23" viewBox="0 0 22 23"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21 1.13965L10 12.1396M21 1.13965L14 21.1397L10 12.1396M21 1.13965L1 8.13965L10 12.1396"
                                                stroke="#A6AEBC" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        )
    }
};