import React from "react";
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup({isOpen, onClose}) {

  return (
    <PopupWithForm 
      name="avatar-form" 
      title="Обновить аватар" 
      buttonName="Сохранить"
      isOpen={isOpen}
     onClose={onClose}
   
    >
      <input 
      type="url" 
      placeholder="Ссылка на картинку" 
      className="popup__field popup__field-link"
      name="link"
      required />
      <span className="form__item-error form__item-error_field_link" ></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup

