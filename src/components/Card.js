function Card(props) {

    function handleClick() {
        props.onCardClick(props.name, props.link);
      } 

    return(
        <li className="element">
            <button type="button" className="element__delete"></button>
            <img className="element__foto" src={props.link} onClick={handleClick} />
            <div className="element__lable">
                <p className="element__title">{props.name}</p>
                <div className="element__lable-likes">
                <button type="button" className="element__like"></button>
                <p className="element__numder-likes">{props.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;