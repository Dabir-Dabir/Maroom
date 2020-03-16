import React from 'react';
import StickyHeader from '../sticky-header';
import Main from "../main";
import './app.scss'

const App = () => {
    return (
        <React.Fragment>
            <StickyHeader/>
            <Main/>
        </React.Fragment>
    )
};

export default App;