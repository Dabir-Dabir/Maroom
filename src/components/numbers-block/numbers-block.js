import React from 'react';

const NumbersBlock = ({count = "--", description}) => {

    return (
        <div className="numbers">
            <h2 className="numbers__count">{count}</h2>
            <p className="numbers__description">{description}</p>
        </div>
    );
};

export default NumbersBlock;