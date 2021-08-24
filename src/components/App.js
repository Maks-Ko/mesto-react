import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';

function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups(){
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }
  
  return (
    <div className="root">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
      <Footer />
      <PopupWithForm
          isOpen = {isEditProfilePopupOpen ? "popup_is-opened" : ""}
          onClose = {closeAllPopups}
          name="edit-profile"
          title="Редактировать профиль"
          id="profileFormValidator"
          children={
              <>
                <input name="user_name" id="user_name" className="form__text form__text_edit_name" type="text" placeholder="Имя" required minlength="2" maxlength="40" />
                <span id="user_name-error" className="form__input-error"></span>
                <input name="activity" id="activity" className="form__text form__text_edit_about-me" type="text" placeholder="Вид деятельности" required minlength="2" maxlength="200" />
                <span id="activity-error" className="form__input-error"></span>
              </>
            }
          />
      <PopupWithForm
          isOpen = {isAddPlacePopupOpen ? "popup_is-opened" : ""}
          onClose = {closeAllPopups}
          name="add-card"
          title="Новое место"
          id="cardFormValidator"
          children={
            <>
              <input name="image_name" id="image_name" className="form__text form__text_edit_name" type="text" placeholder="Название" required minlength="2" maxlength="30" />
              <span id="image_name-error" className="form__input-error"></span>
              <input name="url_image" id="url_image" className="form__text form__text_edit_about-me" type="url" placeholder="Ссылка на картинку" required />
              <span id="url_image-error" className="form__input-error"></span>
            </>
          } />
      <PopupWithForm
          isOpen = {isEditAvatarPopupOpen ? "popup_is-opened" : ""}
          onClose = {closeAllPopups}
          name="edit-avatar"
          title="Обновить аватар"
          children={
            <>
              <input name="url_avatar" id="url_avatar" className="form__text form__text_edit_about-me" type="url" placeholder="Ссылка на аватарку" required />
              <span id="url_avatar-error" className="form__input-error"></span>
            </>
          } />
      <PopupWithForm
          name="delete-card"
          title="Вы уверены?" />
      <ImagePopup />
      <template id="element-template">
        <li className="element">
          <button type="button" className="element__delete"></button>
          <img className="element__foto" />
          <div className="element__lable">
            <p className="element__title"></p>
            <div className="element__lable-likes">
              <button type="button" className="element__like"></button>
              <p className="element__numder-likes">0</p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
