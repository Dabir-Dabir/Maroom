import React, {Component} from 'react';
import rightImgInactive from "./images/right-inactive.png";
import rightImgActive from "./images/right-active.png";
import './card.scss';

export default class Card extends Component {

    onTapPrev = () => {
        this.props.onTapPrev();
    };

    onTapNext = () => {
        this.props.onTapNext();
    };

    render() {

        const {
            order: {order, all},
            title, street, distance,
            rooms, square, flor, price
        } = this.props.data.cardData;

        let leftControllerClass = "card__controller card__left-controller btn";
        let rightControllerClass = "card__controller card__right-controller btn";
        let leftImage = rightImgActive;
        let rightImage = rightImgActive;

        if (order === 1) {
            leftControllerClass += " card__controller--disabled";
            leftImage = rightImgInactive;
        } else if (order === all) {
            rightControllerClass += " card__controller--disabled";
            rightImage = rightImgInactive;
        }

        return (
            <div className="card">
                <header className="card__header">
                    <span className="card__order">{order} / {all}</span>
                    <div className="card__controllers">
                        <button onClick={this.onTapPrev} className={leftControllerClass}>
                            <img src={leftImage} alt="" className="card__icon card__left-icon"/>
                        </button>
                        <button onClick={this.onTapNext} className={rightControllerClass}>
                            <img src={rightImage} alt="" className="card__icon card__right-icon"/>
                        </button>
                    </div>
                </header>
                <main className="card__content">
                    <div className="card__title-row card__row">
                        <h4 className="card__title">{title}</h4>
                        <div className="card__place">
                            <span className="card__status-dot"></span>
                            <span className="card__street">{street}</span>
                            <span className="card__distance">· {distance}</span>
                        </div>
                    </div>
                    <div className="card__numbers card__row">
                        <div className="card__number">
                            <div className="card__number-title">{rooms}</div>
                            <div className="card__number-description">комнат</div>
                        </div>
                        <div className="card__number">
                            <div className="card__number-title">{square}</div>
                            <div className="card__number-description">общая / жилая</div>
                        </div>
                        <div className="card__number">
                            <div className="card__number-title">{flor}</div>
                            <div className="card__number-description">этажность</div>
                        </div>
                    </div>
                    <footer className="card__footer card__row">
                        <div className="card__price">{price}</div>
                        <div className="card__status btn btn--type_info btn--size_s btn--display_left-icon">
                            <svg className="btn__img" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M13.1249 4.21301C12.8472 3.929 12.3969 3.929 12.1192 4.21301L6.22206 10.2442L3.88045 7.84938C3.60274 7.56536 3.15249 7.56536 2.87478 7.84938C2.59708 8.13339 2.59708 8.59388 2.87478 8.8779L5.71923 11.787C5.99693 12.071 6.44718 12.071 6.72489 11.787L13.1249 5.24153C13.4026 4.95751 13.4026 4.49703 13.1249 4.21301Z"
                                      fill="#F57C00"/>
                            </svg>
                            <span className="btn__text">Сдана</span>
                        </div>
                    </footer>
                </main>
            </div>
        )
    }
}