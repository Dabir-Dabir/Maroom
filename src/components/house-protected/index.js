import React, {Component} from 'react';
import BannerImage from './images/Rectangle.jpg';
import './house-protected.scss';
import Card from "../card";

export default class HouseProtected extends Component {

    onTapPrev = () => {
        alert("left");
    };

    onTapNext = () => {
        alert("right");
    };

    render() {

        let serverData = {
            cardData: {
                order: {
                    order: 1,
                    all: 49
                },
                title: "Moscow Ave, 37",
                street: "Kol'tsevaya",
                distance: "5 мин. пешком",
                rooms: 22,
                square: "50 / 25 м²",
                flor: "10 / 16",
                price: "30 000 ₽"
            }
        };

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
                                <div className="numbers">
                                    <h2 className="numbers__count">179</h2>
                                    <p className="numbers__description">квартир в <br/> обслуживании</p>
                                </div>
                            </div>
                            <div className="col-6 col-md">
                                <div className="numbers">
                                    <h2 className="numbers__count">1425</h2>
                                    <p className="numbers__description">часов <br/> съекономлено</p>
                                </div>
                            </div>
                            <div className="col-6 col-md">
                                <div className="numbers">
                                    <h2 className="numbers__count">5+</h2>
                                    <p className="numbers__description">лет <br/> работы</p>
                                </div>
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
                    <img src={BannerImage} alt="" className="banner__image"/>
                    <Card data={serverData} onTapNext={this.onTapNext} onTapPrev={this.onTapPrev}/>
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