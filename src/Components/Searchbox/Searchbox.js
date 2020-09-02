import React from 'react';

const SearchBox = ({onsearch}) => {
    return (
        <div className='pa2'>
            <input
             aria-label='Search friends'
             className='pa3 ba b--green bg-lightest-blue'
             type='search' 
             placeholder='Search friends'
             onChange={onsearch} 
             />
        </div>
    );
}

export default SearchBox;