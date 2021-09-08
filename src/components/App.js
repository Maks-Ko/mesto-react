import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
import Api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const api = new Api();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ isOpen: false, name: '', link: ''});  
  const [currentUser, setCurrentUser] = React.useState([]);

  React.useEffect(() => {
    api.getItemsUser()
    .then((date) =>{
        setCurrentUser(date);
        //console.log(date);      
    })
    .catch((err) => {
        console.log(err); // "Что-то пошло не так: ..."
    });

  }, []);

 // console.log(currentUser);
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(name, link) {
    setSelectedCard({
      isOpen: true,
      name: name,
      link: link,
    })
  }

  function closeAllPopups(){
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({
      isOpen: false,
      name: '',
      link: '',
    });
  }
  
  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm
            isOpen = {isEditProfilePopupOpen ? "popup_is-opened" : ""}
            onClose = {closeAllPopups}
            name="edit-profile"
            title="Редактировать профиль"
            id="profileFormValidator"
            buttonText="Сохранить"
            >
              <input name="user_name" id="user_name" className="form__text form__text_edit_name" type="text" placeholder="Имя" requiredminlength="2" maxLength="40" />
              <span id="user_name-error" className="form__input-error"></span>
              <input name="activity" id="activity" className="form__text form__text_edit_about-me" type="text" placeholder="Вид деятельности" requiredminlength="2" maxLength="200" />
              <span id="activity-error" className="form__input-error"></span>
            </PopupWithForm>
        <PopupWithForm
            isOpen = {isAddPlacePopupOpen ? "popup_is-opened" : ""}
            onClose = {closeAllPopups}
            name="add-card"
            title="Новое место"
            id="cardFormValidator"
            buttonText="Сохранить"
            >
              <input name="image_name" id="image_name" className="form__text form__text_edit_name" type="text" placeholder="Название" requiredminlength="2" maxLength="30" />
              <span id="image_name-error" className="form__input-error"></span>
              <input name="url_image" id="url_image" className="form__text form__text_edit_about-me" type="url" placeholder="Ссылка на картинку" required />
              <span id="url_image-error" className="form__input-error"></span>
            </PopupWithForm>
        <PopupWithForm
            isOpen = {isEditAvatarPopupOpen ? "popup_is-opened" : ""}
            onClose = {closeAllPopups}
            name="edit-avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            >
              <input name="url_avatar" id="url_avatar" className="form__text form__text_edit_about-me" type="url" placeholder="Ссылка на аватарку" required />
              <span id="url_avatar-error" className="form__input-error"></span>
            </PopupWithForm>
        <PopupWithForm
            name="delete-card"
            title="Вы уверены?"
            buttonText="Удалить" />
        <ImagePopup
            isOpen = {selectedCard.isOpen ? "popup_is-opened" : ""}
            onClose = {closeAllPopups}
            name={selectedCard.name}
            link={selectedCard.link} />
      </CurrentUserContext.Provider>   
    </div>
  );
}

export default App;
