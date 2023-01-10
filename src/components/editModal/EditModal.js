import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "redux/contacts/opirations";
import createContext from '../../context/context';

import css from '../editModal/EditModal.module.css'
import formCss from '../Form/form.module.css'
import { FaUserAstronaut } from 'react-icons/fa'
import { useAuth } from "hooks/useAuth";



export const EditModal = () => {
  const { user } = useAuth();
  
  const {favContacts, 
    setFavContacts, 
    setIsOpentModal,
    contactId} = useContext(createContext);

  const KEY = user.email;

    const contacts = useSelector(state =>state.contacts.items);
    const findContact = contacts.find(contact => contact.id === contactId);

    const {name, number} =findContact;

    const [editName, setEditName] = useState(name);
    const [editNumber, setEditNumber] = useState(number);
    
    const  dispatch  = useDispatch();


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handeleKeyDown = e =>{
      if (e.code === 'Escape') {
        setIsOpentModal(false) 
      }
  };
  
    useEffect(() => {
      window.addEventListener('keydown', handeleKeyDown);
    
      return () => {
        window.removeEventListener('keydown',  handeleKeyDown );
      }
    // eslint-disable-next-line no-use-before-define
    }, [handeleKeyDown])
    

    
    
    const handleSubmit = e => {
        
        e.preventDefault();
        const name = editName;
        const number = editNumber

        const editedContact = {contactId,name, number}

        dispatch(updateContact(editedContact));
        editFav(editedContact)
        setIsOpentModal(false);
    };

    const editFav = editedContact => { 

      const {contactId, name, number} = editedContact;

      const newFavs = favContacts.map(contact => {
        if (contact.id === contactId) {
          return{
            id: contactId,
            name,
            number
          }
        }
        return contact
    
      });

      setFavContacts(newFavs);
      window.localStorage.setItem(KEY, JSON.stringify(newFavs))

    };

    const onClickOverlay = e =>{

      if (e.target === e.currentTarget) {
        setIsOpentModal(false)  
      }
    };
    
    
  return (
    <div className={css.overlay} onClick={onClickOverlay}>
        <div className={css.modalBody}>
          <form
            className={formCss.form}
            onSubmit={handleSubmit}>
              <span ><FaUserAstronaut className={css.iconAstronaut}/></span>
              <input 
                className={formCss.input}
                type='name' value={editName} onChange={ e=>setEditName(e.target.value)}/>
              <input 
                className={formCss.input}
                type='namber'value={editNumber} onChange={ e=>setEditNumber(e.target.value)}/>
              <button 
                className={formCss.buttonForm}
                type="submit">edit</button>
          </form>
        </div>
    </div>
  )
}
