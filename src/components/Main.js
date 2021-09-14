import React from 'react';
import buttonAvatar from '../images/Vector_pen.png';
import Api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
    const api = new Api();    
    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {        
        api.getItemsCards()
        .then((date) =>{            
            setCards(date);
        })
        .catch((err) => {
            console.log(err); // "Что-то пошло не так: ..."
        });

    }, []);

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.toggleLikeCard(card._id, isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        api.deleteCardUser(card._id).then(() => {
            const newCard = cards.filter((c) => c._id !== card._id);
            setCards(newCard);
        });
        
    }

    return(
        
        <main className="main">
            <section className="profile">
                <img src={currentUser.avatar} alt="Аватарка" className="profile__avatar" />
                <button type="button" src={buttonAvatar} className="profile__avatar-activ" onClick={props.onEditAvatar}></button>
                <div className="profile-info">
                    <h1 className="profile-info__title">{currentUser.name}</h1>
                    <button type="button" className="profile-info__button" onClick={props.onEditProfile}></button>
                    <p className="profile-info__text">{currentUser.about}</p>
                </div>
                <button type="button" className="profile__button" onClick={props.onAddPlace}></button>
            </section>
            <section>
                <ul className="elements">
                    {cards.map(card => {return(
                    <Card
                        name={card.name}
                        link={card.link}
                        likes={card.likes}
                        _id={card._id}
                        key={card._id}
                        owner={card.owner}
                        onCardClick={props.onCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />)})}
                </ul>
            </section>
        </main>
        
    )    
}

export default Main;