import React from 'react';
import StickyHeader from '../sticky-header';
import Main from "../main";
import ErrorBoundary from "../error-boundary";

const App = () => {
    return (
        <ErrorBoundary>
            <StickyHeader/>
            <Main/>
        </ErrorBoundary>
    )
};

export default App;