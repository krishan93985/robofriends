import React from 'react';

const Counter = ({robots}) => {

    return (
        <button>Count:{robots.length}</button>
    );
}

export default Counter;