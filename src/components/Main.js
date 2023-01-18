import React, {useState, useEffect} from "react";
import Card from "./Card";

import api from "../utils/Api";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) { 
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
          .then((res) => {
            setUserName(res.name);
            setUserAvatar(res.avatar);
            setUserDescription(res.about);
          })
          .catch((err) => {
            console.log(err);
          });
    
          api.getInitialCards()
            .then((res) => {
              setCards(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }, []);

    return (
        <main className="content">

        <section className="profile">

            <div className="profile__container">
                <div className="profile__avatar-container">
                    <button 
                    className="button profile__avatar-button" 
                    type="button" 
                    aria-label="Изменить аватар" 
                    name="avatar-button"
                    onClick={onEditAvatar}></button>

                    <img className="profile__avatar" src={userAvatar} alt=""></img>
                </div>

                <div className="profile__section">
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>

                        <button 
                        type="button" 
                        className="profile__edit-button"
                        onClick={onEditProfile}
                        ></button>

                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
            </div>

            <button 
            type="button"
             className="profile__add-button"
             name="add-button"
            onClick={onAddPlace}
            ></button>
        </section>

    
         <section className="elements">
         <ul className="elements__table">
           {cards.map((card) => {
            return <Card 
            key={card._id}
            card={card}
            onCardClick={onCardClick}
           
            />
          })}
      </ul>
    </section>
    </main>
    )
}

export default Main

