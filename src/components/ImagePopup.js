function ImagePopup() {
    return(
        <div className="popup popup_type_image">
            <div className="images-content">
            <button type="button" className="images-content__button popup__button-close"></button>
            <img className="images-content__foto" src="" alt="foto" />
            <h2 className="images-content__title"></h2>
            </div>
        </div>
    )
}

export default ImagePopup;