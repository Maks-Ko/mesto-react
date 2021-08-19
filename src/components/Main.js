import avatar from '../images/image.jpg';
import buttonAvatar from '../images/Vector_pen.png';

function Main() {
    return(
        <>
            <main className="main">
                <section className="profile">
                    <img src={avatar} alt="Аватарка" className="profile__avatar" />
                    <button type="button" src={buttonAvatar} className="profile__avatar-activ"></button>
                    <div className="profile-info">
                        <h1 className="profile-info__title">Жак_Ив Кусто</h1>
                        <button type="button" className="profile-info__button"></button>
                        <p className="profile-info__text">Исследователь океана</p>
                    </div>
                    <button type="button" className="profile__button"></button>
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