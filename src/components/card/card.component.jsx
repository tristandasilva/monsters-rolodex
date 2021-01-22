import React from 'react';
import './card.styles.css';

export const Card = props => (
   <div className='card-container'>
      <img
         src={`https://robohash.org/${props.monster.id.value}?set=set2&size=180x180`}
         alt='Robot Image'
      />
      <h2>{props.monster.name.first + ' ' + props.monster.name.last}</h2>
      <p>{props.monster.email}</p>
   </div>
);
