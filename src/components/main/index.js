import React from 'react';
import './main.scss';

const Main = () => {

    return (
        <main className="main">
            <header className="home-header">
                <div className="home-header__left-side">
                    <section className="site-description">
                        <div className="site-description__container">
                            <h1 className="site-description__title">
                                Сдаем, контролируем и <br className="d-none d-sm-block"/>
                                обслуживаем квартиры
                            </h1>
                            <a href="#" className="site-description__first-action btn btn--type_primary btn--size_m">
                            <span className="btn__text">Сдать <span
                                className="d-none d-sm-inline">квартиру</span></span>
                            </a>
                            <a href="#" className="site-description__second-action btn btn--type_outline btn--size_m">
                            <span className="btn__text">Снять <span
                                className="d-none d-sm-inline">квартиру</span></span>
                            </a>
                        </div>
                    </section>
                    <section className="partners">

                    </section>
                </div>
                <aside className="home-header__right-side d-none d-md-block">
                    <img className="home-header__background-image"
                         src="/public/images/rectangle-3-2.png"
                         srcSet="/public/images/rectangle-3-2@2x.png 2x,
                                 /public/images/rectangle-3-2@3x.png 3x"/>
                </aside>
            </header>
        </main>
    );
};

export default Main;