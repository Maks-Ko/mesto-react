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
        </>
    )    
}

export default Main;