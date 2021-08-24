import React from 'react';
import avatar from '../images/image.jpg';
import buttonAvatar from '../images/Vector_pen.png';
import Api from '../utils/Api';

function Main(props) {
    // let userName = 'Жак-Ив Кусто';
    // let userDescription = 'Исследователь океана';
    // let userAvatar = avatar;

    const [dataUser, setDataUser] = React.useState({ userName: 'Жак-Ив Кусто', userDescription: 'Исследователь океана', userAvatar: avatar });

    React.useEffect(() => {
        const api = new Api();
        api.getAllNeededData()
        .then((data) =>{
            const [ dataFormUser, dataCards] = data;
            setDataUser({
                userName: dataFormUser.name,
                userDescription: dataFormUser.about,
                userAvatar: dataFormUser.avatar
            });
        })
        .catch((err) => {
            console.log(err); // "Что-то пошло не так: ..."
        });

    }, [])


    return(
        <>
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
                    </ul>
                </section>
            </main>
        </>
    )    
}

export default Main;