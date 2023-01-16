import { EditModal } from 'components/editModal/EditModal';
import { useDispatch, useSelector } from 'react-redux';
import { handleFindContact } from 'redux/contacts/filterContactsSlice';
import { deleteContact } from 'redux/contacts/opirations';
import { toast } from 'react-toastify';

//import { Notification } from './ContactList.styled';
import { useContext } from 'react';
import createContext from '../../context/context';
import { ItemContact } from './ItemContact';
import css from './ContactList.module.css';
//(favContacts ||  [])

export const ContactList = ({ addFavorite, removeFav }) => {
  const { favContacts, setContactId, setIsOpentModal, isOpentModal } =
    useContext(createContext);

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const query = useSelector(state => state.filter.filter);

  const getVisibleContact = () => {
    const normalizeFilter = query.toLocaleLowerCase();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContact = getVisibleContact();

  const handleDaleteContact = id => {
    dispatch(deleteContact(id));
    dispatch(handleFindContact(''));

    const checkFav = favContacts.some(contact => contact.id === id);

    if (checkFav === true) {
      removeFav(id);
    }
  };

  const handleEditContact = id => {
    setContactId(id);
    setIsOpentModal(true);
  };

  const handleAddFavorite = id => {
    const favContact = contacts.find(contact => contact.id === id);
    const checkFavContact = favContacts.some(
      contact => contact.id === favContact.id
    );

    if (checkFavContact === true) {
      toast.error('this contact is in your favorites');
      return;
    }
    addFavorite(favContact);
  };

  if (contacts.length === 0) {
    return <p className={css.notifi}>You have no contacts</p>;
  }

  if (visibleContact.length === 0) {
    return <p className={css.notifi}>contact not found</p>;
  }

  return (
    <ul className={css.list}>
      {visibleContact.map(contact => (
        <ItemContact
          key={contact.id}
          {...contact}
          handleDaleteContact={handleDaleteContact}
          handleAddFavorite={handleAddFavorite}
          handleEditContact={handleEditContact}
          favContacts={favContacts}
          removeFav={removeFav}
        />
      ))}
      {isOpentModal && <EditModal />}
    </ul>
  );
};
