function PopupWithForm({name, isOpen, children,title, buttonName, isLoading, onClose}) {

    return (
      <div className={`popup popup_type_${name} ${isOpen && "popup_active"}`}>
        <div className="popup__container">
          <button
            type="button"
            className="popup__button-close"
            onClick={onClose}
          ></button>
          <h2 className="popup__title">{title}</h2>
          <form className="form popup__form" name={name}>
            {children}
            <button
              className="button popup__button popup__button-save"
              type="submit"
            >
              {isLoading ? "Сохранение..." : buttonName}
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default PopupWithForm

