import React from 'react';
import './app.scss';
import StickyHeader from '../sticky-header';
import Main from "../main";

const App = () => {
    return (
        <React.Fragment>
            <StickyHeader/>
            <Main/>
        </React.Fragment>
    )
};

export default App;