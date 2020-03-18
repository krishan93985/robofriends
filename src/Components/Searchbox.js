import React from 'react';

const searchBox = ({onsearch}) => {
    return (
        <div className='pa2'>
            <input
             className='pa3 ba b--green bg-lightest-blue'
             type='search' 
             placeholder='Search friends'
             onChange={onsearch} 
             />
        </div>
    );
}

export default searchBox;