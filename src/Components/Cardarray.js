import React from 'react';
import Card from "./Card";

const Cardarray = ({robots}) => {
    return(
    <div>
        {robots.map((user,i) => 
        <Card key={i} id={user.id} name={user.name} username={user.username} email={user.email}/>
        )
        }
    </div>
    );
}

export default Cardarray;