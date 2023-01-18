import React from "react";

function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);}
 
  
  return(
    <li className="card">
      <button 
      className="button__card" 
      type="button" 
      onClick={handleClick}
      >
        <img className="card__image" src={card.link} alt="" />
      </button>
      <button className={`card__button_remove ${(card.owner._id === "8d3c6a15-ceca-43f0-a891-5377cbbfaafe") ? 'button_image_delete' : ''}`} type="button" aria-label="Удалить картинку"></button>
      <div className="card__section">
        <h2 className="card__name">{card.name}</h2>
        <div className="like__section">
          <button 
          className="button__like" 
          type="button" 
          aria-label="Поставить лайк" 
          name="like" ></button>
          <span className="card__like-item">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;