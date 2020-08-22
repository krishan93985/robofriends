import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount] = useState(0);

    console.log('Counter')
    return (
        <button onClick={() => setCount(count+1)}>Count:{count}</button>
    );
}

export default Counter;