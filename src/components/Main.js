import avatar from '../images/image.jpg';
import buttonAvatar from '../images/Vector_pen.png';

function Main() {
    function handleEditAvatarClick() {
        const openPopup = document.querySelector('.popup_type_edit-avatar');
        openPopup.classList.add('popup_is-opened');
    }

    function handleEditProfileClick() {
        const openPopup = document.querySelector('.popup_type_edit-profile');
        openPopup.classList.add('popup_is-opened');
    }

    function handleAddPlaceClick() {
        const openPopup = document.querySelector('.popup_type_add-card');
        openPopup.classList.add('popup_is-opened');
    }
 
    return(
        <>
            <main className="main">
                <section className="profile">
                    <img src={avatar} alt="Аватарка" className="profile__avatar" />
                    <button type="button" src={buttonAvatar} className="profile__avatar-activ" onClick={handleEditAvatarClick}></button>
                    <div className="profile-info">
                        <h1 className="profile-info__title">Жак_Ив Кусто</h1>
                        <button type="button" className="profile-info__button" onClick={handleEditProfileClick}></button>
                        <p className="profile-info__text">Исследователь океана</p>
                    </div>
                    <button type="button" className="profile__button" onClick={handleAddPlaceClick}></button>
                </section>
                <section>
                    <ul className="elements">
                    </ul>
                </section>
            </main>            
            <div className="popup popup_type_edit-profile">
                <div className="popup__content">
                <button type="button" className="popup__button popup__button_profile popup__button-close"></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form name="profileForm" className="form form_profile" id="profileFormValidator" novalidate>
                    <fieldset className="form__container">
                    <input name="user_name" id="user_name" className="form__text form__text_edit_name" type="text" placeholder="Имя" required minlength="2" maxlength="40" />
                    <span id="user_name-error" className="form__input-error"></span>
                    <input name="activity" id="activity" className="form__text form__text_edit_about-me" type="text" placeholder="Вид деятельности" required minlength="2" maxlength="200" />
                    <span id="activity-error" className="form__input-error"></span>
                    <button type="submit" className="form__button">Сохранить</button>
                    </fieldset>
                </form>
                </div>
            </div>
            <div className="popup popup_type_add-card">
                <div className="popup__content">
                <button type="button" className="popup__button popup__button_card popup__button-close"></button>
                <h2 className="popup__title">Новое место</h2>
                <form name="card_form" className="form" id="cardFormValidator" novalidate>
                    <fieldset className="form__container">
                    <input name="image_name" id="image_name" className="form__text form__text_edit_name" type="text" placeholder="Название" required minlength="2" maxlength="30" />
                    <span id="image_name-error" className="form__input-error"></span>
                    <input name="url_image" id="url_image" className="form__text form__text_edit_about-me" type="url" placeholder="Ссылка на картинку" required />
                    <span id="url_image-error" className="form__input-error"></span>
                    <button type="submit" className="form__button">Сохранить</button>
                    </fieldset>
                </form>
                </div>
            </div>
            <div className="popup popup_type_edit-avatar">
                <div className="popup__content">
                <button type="button" className="popup__button popup__button_card popup__button-close"></button>
                <h2 className="popup__title">Обновить аватар</h2>
                <form name="avatar" className="form" id="avatarFormValidator" novalidate>
                    <fieldset className="form__container">
                    <input name="url_avatar" id="url_avatar" className="form__text form__text_edit_about-me" type="url" placeholder="Ссылка на аватарку" required />
                    <span id="url_avatar-error" className="form__input-error"></span>
                    <button type="submit" className="form__button">Сохранить</button>
                    </fieldset>
                </form>
                </div>
            </div>
            <div className="popup popup_type_delete-card">
                <div className="popup__content">
                <button type="button" className="popup__button popup__button_card popup__button-close"></button>
                <h2 className="popup__title">Вы уверены?</h2>
                <form name="card_form-delete" className="form">
                    <fieldset className="form__container">
                    <button type="submit" className="form__button">Да</button>
                    </fieldset>
                </form>
                </div>
            </div>
            <div className="popup popup_type_image">
                <div className="images-content">
                <button type="button" className="images-content__button popup__button-close"></button>
                <img className="images-content__foto" src="" alt="foto" />
                <h2 className="images-content__title"></h2>
                </div>
            </div>
        </>
    )    
}

export default Main;