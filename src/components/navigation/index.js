import React, {Component} from "react";
import './navigation.scss';
import MockyService from '../../services/mocky-service';
import ErrorIndicator from '../error-indicator'

export default class Navigation extends Component {

    mockyService = new MockyService();

    state = {
        links: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getMenuItems();
    }

    onMenuItemsLoaded = (menuItems) => {
        this.setState({
            links: menuItems,
            error: false
        });

    };

    onError = () => {
        this.setState({
            error: true,
        });
    };

    getMenuItems() {
        this.mockyService
            .getMenuItems()
            .then(this.onMenuItemsLoaded)
            .catch(this.onError);
    }

    render() {

        const {links, error} = this.state;

        const errorMessage = error ? <ErrorIndicator/> : null;
        const menuItems = !error ? <MenuItems menuLinks={links}/> : null;

        return (
            <nav className="navigation">
                <menu className="navigation__menu">
                    {errorMessage}
                    {menuItems}
                </menu>
                <a href="#"
                   className="navigation__login-button btn btn--type_primary btn--size_m btn--display_left-icon">
                    <svg className="btn__img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         fill="none" viewBox="0 0 24 24">
                        <path fill="#191919" fillRule="evenodd"
                              d="M18.661 18c-.312-.793-.833-1.385-1.533-1.837C16.028 15.452 14.336 15 12 15c-2.336 0-4.028.452-5.129 1.163-.7.452-1.22 1.044-1.532 1.837H18.66zM20 20c.552 0 1.008-.45.944-1-.466-4.046-3.834-6-8.944-6-5.11 0-8.478 1.954-8.944 6-.064.55.392 1 .944 1h16zM10 8c0 1.095.905 2 2 2s2-.905 2-2-.905-2-2-2-2 .905-2 2zM8 8c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4z"
                              clipRule="evenodd"/>
                    </svg>
                    <span className="btn__text">Войти</span>
                </a>
                <a href="#" className="navigation__register-button d-md-none btn btn--type_outline btn--size_m">
                    <span className="btn__text">Создать профиль</span>
                </a>
            </nav>
        );
    }
};


const MenuItems = ({menuLinks}) => {

    return (
        menuLinks.map((item, count) => {
            const {title, url} = item;
            let classList = "navigation__list";
            if (!count) classList += " d-md-none";

            return (
                <li className={classList} key={url}>
                    <a href={url} className="navigation__link">{title}</a>
                </li>
            )
        })
    )
};