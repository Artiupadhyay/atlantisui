import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';
const TextContainer = ({ users }) => (

<div className="card" style={{height: "60vh", overflow:"auto"}}>
    {
      users
        ? (
          <div>
            <h5 className="card-header">Online Students:{users.length-1}</h5>
            <ul className="list-group list-group-flush">
                {users.map(({name}) => (
                  <li key={name} className="list-group-item">
                    {name}
                    <img alt="Online Icon" className="ml-2" src={onlineIcon}/>
                  </li>
                ))}
            </ul>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;