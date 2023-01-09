import { deleteContact } from "redux/contacts/opirations";
import { MdFavorite } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { EditModal } from 'components/editModal/EditModal';
import { AiTwotoneDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux';

import css from 'components/ContactList/ContactList.module.css'





export const FavoriteContacts = ({
  favContacts,
  setFavContacts, 
  removeFav,
  setContactId,
  setIsOpentModal,
  isOpentModal,
  contactId
}) => {
  const dispatch = useDispatch();
    
  const handleRemoveFav = id => {
    removeFav(id)
    
  };
  const handleEditContact = id => {
    setContactId(id)
    setIsOpentModal(true);
};

const handleDaleteContact = id =>{
  dispatch(deleteContact(id));
  handleRemoveFav(id);
};
    
  return (
    <ul className={css.list}>
      {favContacts.length === 0
          ? <p>You have no favorite contacts</p>
          : favContacts.map(({id, name, number})=>(
            <li className={css.item} key={id}>
              {name}: {number} 
              <button className={css.editBtn} onClick={()=>handleEditContact(id)}><AiFillEdit/></button>
              <button className={css.delBtn} onClick={()=>handleDaleteContact(id)} ><AiTwotoneDelete/></button>
              <button className={css.buttonFav} onClick={() => handleRemoveFav(id)}><MdFavorite/></button>
            </li>
          ))
      }
       {isOpentModal && <EditModal 
          setIsOpentModal ={setIsOpentModal} 
          contactId={contactId}
          favContacts={favContacts}
          setFavContacts={setFavContacts}
          />}
    </ul>
  )
}
