import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "redux/contacts/opirations";



export const EditModal = ({contactId}) => {

    const contacts = useSelector(state =>state.contacts.items);
    const findContact = contacts.find(contact => contact.id === contactId);

    const {name, number} =findContact;

    const [editName, setEditName] = useState(name);
    const [editNumber, setEditNumber] = useState(number)
    
    const  dispatch  = useDispatch()

    
    
    const handleSubmit = e => {
        console.log('handleSubmit')
        e.preventDefault();
        const name = editName;
        const number = editNumber

        const editedContact = {contactId,name, number}

        dispatch(updateContact(editedContact))
    }
    
    
      
    
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='name' value={editName} onChange={ e=>setEditName(e.target.value)}/>
            <input type='namber'value={editNumber} onChange={ e=>setEditNumber(e.target.value)}/>
            <button type="submit">edit</button>
        </form>
    </div>
  )
}
