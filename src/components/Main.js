import React from 'react';
import avatar from '../images/image.jpg';
import buttonAvatar from '../images/Vector_pen.png';
import Api from '../utils/Api';
import Card from './Card';

function Main(props) {
    const api = new Api();
    const [dataUser, setDataUser] = React.useState({ userName: 'Жак-Ив Кусто', userDescription: 'Исследователь океана', userAvatar: avatar });
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {        
        api.getAllNeededData()
        .then((data) =>{
            const [userData, cardData] = data
            setDataUser({
                userName: userData.name,
                userDescription: userData.about,
                userAvatar: userData.avatar
            });
            setCards(cardData);
        })
        .catch((err) => {
            console.log(err); // "Что-то пошло не так: ..."
        });

    }, []);

    return(
        
        <main className="main">
            <section className="profile">
                <img src={dataUser.userAvatar} alt="Аватарка" className="profile__avatar" />
                <button type="button" src={buttonAvatar} className="profile__avatar-activ" onClick={props.onEditAvatar}></button>
                <div className="profile-info">
                    <h1 className="profile-info__title">{dataUser.userName}</h1>
                    <button type="button" className="profile-info__button" onClick={props.onEditProfile}></button>
                    <p className="profile-info__text">{dataUser.userDescription}</p>
                </div>
                <button type="button" className="profile__button" onClick={props.onAddPlace}></button>
            </section>
            <section>
                <ul className="elements">
                    {cards.map(card => {return(<Card name={card.name} link={card.link} likes={card.likes} key={card._id} onCardClick={props.onCardClick} />)})}
                </ul>
            </section>
        </main>
        
    )    
}

export default Main;