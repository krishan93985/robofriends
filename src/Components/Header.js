import React, { memo } from 'react';
import Counter from './Counter';

//wrapping with memo does shallow props comparisons
//for within state comparison use useMemo (see docs)
//use shouldComponentUpdate for class based components
//to avoid shouldCom...Update use PureComponents in react
const Header = memo(({robots}) => {
    return (
        <div>
        <h1 style={{fontSize:"2.9rem", maxWidth:"100%"}}>Robofriends</h1>
        <Counter robots={robots} />
        </div>
    );
})

export default Header;