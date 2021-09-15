import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
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
    .then((date) => {
        setCurrentUser(date);
    })
    .catch((err) => {
        console.log(err); // "Что-то пошло не так: ..."
    });
  }, []);
  
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
  function handleUpdateUser(props) {   
    api.editProfile(props)
    .then((date) => {
      setCurrentUser(date);
      closeAllPopups();     
    })
    .catch((err) => {
      console.log(err); // "Что-то пошло не так: ..."
    });
  }
  function handleUpdateAvatar(props) {
    api.editAvatar(props)
    .then((date) => {
      setCurrentUser(date);
      closeAllPopups();     
    })
    .catch((err) => {
      console.log(err); // "Что-то пошло не так: ..."
    });
  }
  
  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
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
