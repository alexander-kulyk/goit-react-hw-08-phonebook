//import { toast } from 'react-toastify';
import css from 'components/ContactList/ContactList.module.css'
import { MdFavorite } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { EditModal } from 'components/editModal/EditModal';


export const FavoriteContacts = ({
  favContacts,
  setFavContacts, 
  removeFav,
  setContactId,
  setIsOpentModal,
  isOpentModal,
  contactId
}) => {
    
  const handleRemoveFav = id => {
    removeFav(id)
    
  };
  const handleEditContact = id => {
    setContactId(id)
    setIsOpentModal(true);
};
    
  return (
    <ul className={css.list}>
      {favContacts.length === 0
          ? <p>You have no favorite contacts</p>
          : favContacts.map(({id, name, number})=>(
            <li className={css.item} key={id}>
              {name}: {number} 
              <button onClick={()=>handleEditContact(id)}><AiFillEdit/></button>
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
