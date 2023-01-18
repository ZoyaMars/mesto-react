import React, { useState } from "react"
import PopupWithForm from "./PopupWithForm"

function EditProfilePopup({isOpen, onClose}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm 
    name="edit-profile" 
    title="Редактировать профиль" 
      buttonName="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
   
    >
      <input 
        placeholder="Ваше имя"
        value={name}
        type="text" 
        className="popup__field popup__field-title"
        minLength="2"
        maxLength="40"
        id="title"
        onChange={handleNameChange}
        required 
      />
      <span className="popup__input-error title-error" ></span>
      <input 
        type="text" 
        placeholder="Исследователь океана" 
        className="popup__field popup__field-job"
        minLength="2"
        maxLength="200"
        id="job"
        value={description}
        onChange={handleDescriptionChange}
        required 
      />
      <span className="popup__input-error  job-error" ></span>
    </PopupWithForm> 
  )
}

export default EditProfilePopup
