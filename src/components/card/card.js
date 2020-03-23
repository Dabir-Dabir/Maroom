import React, {Component} from 'react';
import CardTemplate from "./card-template";
import Spinner from '../spinner';
import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";
import MockyService from "../../services/mocky-service";

export default class Card extends Component {

    mockyService = new MockyService();

    state = {
        data: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.onTapPrev();
    }

    onDataLoaded = ({id, cardData}) => {
        if(!id) {
            throw "Error";
        }

        this.setState({
            id,
            data: cardData,
            loading: false
        })
    };

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    };

    onTapPrev = () => {
        this.setState({
            loading: true
        });

        this.mockyService
            .getPrev()
            .then(this.onDataLoaded)
            .catch(this.onError);
    };

    onTapNext = () => {
        this.setState({
            loading: true
        });

        this.mockyService
            .getNext()
            .then(this.onDataLoaded)
            .catch(this.onError);
    };

    render() {

        const {data, loading, error} = this.state;

        const isLoading = loading ? <Spinner/> : null;
        const isError = error && !loading ? <ErrorIndicator/> : null;
        const content = !loading && !error ?
            <CardTemplate data={data} onTapPrev={this.onTapPrev} onTapNext={this.onTapNext}/> : null;

        return (
            <div className="card">
                <ErrorBoundary>
                    {isLoading}
                    {isError}
                    {content}
                </ErrorBoundary>
            </div>
        )
    }
}