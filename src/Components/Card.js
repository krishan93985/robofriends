import React from 'react';
const Card = ({ id,username,email}) => {
   // OR const { id,username,email} = props;
    return (
      <div className="tc grow bg-light-green dib br3 pa3 ma2 bw2 shadow-3">
          <img alt = 'icon' src={`https://robohash.org/${id}?size=250x250`}/>
          <h3>{username}</h3>
          <p>{email}</p>
      </div>
    );
    }

export default Card;