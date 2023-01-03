import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "redux/contacts/opirations";

import css from '../editModal/EditModal.module.css'
import formCss from '../Form/form.module.css'
import { FaUserAstronaut } from 'react-icons/fa'



export const EditModal = ({contactId}) => {

    const contacts = useSelector(state =>state.contacts.items);
    const findContact = contacts.find(contact => contact.id === contactId);

    const {name, number} =findContact;

    const [editName, setEditName] = useState(name);
    const [editNumber, setEditNumber] = useState(number)
    
    const  dispatch  = useDispatch()

    
    
    const handleSubmit = e => {
        
        e.preventDefault();
        const name = editName;
        const number = editNumber

        const editedContact = {contactId,name, number}

        dispatch(updateContact(editedContact))
    };

    const onClickOverlay = e =>{

      if (e.target === e.currentTarget) {
          
      }
    }
    
      
    
    
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
