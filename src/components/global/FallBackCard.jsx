import React from 'react';

function FallBackCard({ cardNumber = 5 }) {
  const dumpCards = new Array(cardNumber).fill(0);
  const cardsList = dumpCards.map((index,key) => (
  <li className="card-skeleton" key={key} > 
    <div className="card-reflect"></div>
  </li>));

  return (
    <ul className="card-holder">
      { cardsList }
    </ul>
  );
}

export default FallBackCard;