import React from "react";
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup({isOpen, onClose}) {

  return (
    <PopupWithForm 
      name="add-image" 
      title="Новое место" 
      buttonName="Создать" 
      isOpen={isOpen}
      onClose={onClose}
    >
      <input 
        type="text" 
        placeholder="Название" 
        className="popup__field popup__field-place"
        id="place"
        minLength="2"
        maxLength="30"
        required />
      <span className="popup__input-error place-error" ></span>
      <input 
        type="url" 
        placeholder="Ссылка на картинку" 
        className="popup__field popup__field-place"
        id="link"
        required 
      />
      <span className="popup__input-error link-error" ></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup

