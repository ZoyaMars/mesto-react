import React from "react";

function ImagePopup({card, onClose}) {
  return(
    <div className={`popup popup_big_image ${card.isOpen ? 'popup_active' : ''}`}>
      <div className="popup__section">
        <button 
          type="button"
          className="popup__button-close"
          aria-label="Закрыть окно"
          onClick={() => {onClose(card.card)}}
        >
        </button>
        <img 
          className="popup__image"
          src={card.card.link}
          alt={card.card.name}
        />
        <h2 className="popup__text">{card.card.name}</h2>
      </div>
    </div>
  );
}
export default ImagePopup;

