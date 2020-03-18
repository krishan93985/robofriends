import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height:'800px' , border:'2px solid black'}}>
            {props.children}
        </div>
    );
}

export default Scroll;