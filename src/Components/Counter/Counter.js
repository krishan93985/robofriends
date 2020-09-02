import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount] = useState(0);

    return (
        <button id="counter" data-count={count} onClick={() => setCount(count+1)} >Count:{count}</button>
    );
}

export default Counter;