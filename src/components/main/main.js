import React from 'react';
import './images/rectangle-3-2.png';
import HouseProtected from "../house-protected";

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
                         src="https://i.imgur.com/Vmlo31w.png"/>
                </aside>
            </header>

            <section>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis dolorem enim, fugit itaque
                    maiores, minus obcaecati officia quasi quia quisquam ratione rem sequi temporibus totam unde velit
                    vitae. Ad.
                </div>
                <div>Alias assumenda at consequatur corporis cum deserunt dolore ex exercitationem facere fuga fugit
                    illum itaque, iusto nam neque, numquam optio perferendis porro possimus praesentium quaerat quasi
                    recusandae sit veniam vero?
                </div>
            </section>

            <HouseProtected/>
        </main>
    );
};

export default Main;