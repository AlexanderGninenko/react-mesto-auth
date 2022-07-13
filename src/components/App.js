import React from "react";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] =
    React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] =
    React.useState(false);

  const [isRenderLoading, setIsRenderLoading] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});

  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));

    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCardClick = (card) => {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    setIsRenderLoading(true);
    api
      .delete(card._id)
      .then(() => {
        setCards(cards => cards.filter((item) => item !== card));
        closeAllPopups();
        setIsRenderLoading(false);
      })
      .catch((err) => console.log(err));
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleConfirmDeleteClick = (card) => {
    setIsConfirmDeletePopupOpen(true);
    setSelectedCard(card);
  };

  const handleUpdateUser = (data) => {
    setIsRenderLoading(true);
    api
      .sendUserInfo(data)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
        setIsRenderLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateAvatar = (data) => {
    setIsRenderLoading(true);
    api
      .handleUserAvatar(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
        setIsRenderLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleAddPlaceSubmit = (data) => {
    setIsRenderLoading(true);
    api
      .addUserCard(data)
      .then((newCard) => {
        
        setCards([newCard, ...cards]);
        closeAllPopups();
        setIsRenderLoading(false);

      })
      .catch((err) => console.log(err));
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmDeletePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onConfirmCardDelete={handleConfirmDeleteClick}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          isLoading={isRenderLoading}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          isLoading={isRenderLoading}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <ConfirmDeletePopup
          isOpen={isConfirmDeletePopupOpen}
          isLoading={isRenderLoading}
          onClose={closeAllPopups}
          card={selectedCard}
          onCardDelete={handleCardDelete}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          isLoading={isRenderLoading}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <ImagePopup isOpen={isImagePopupOpen} card={selectedCard} onClose={closeAllPopups} />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
