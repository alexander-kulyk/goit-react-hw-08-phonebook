import { EditModal } from "components/editModal/EditModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { handleFindContact } from "redux/contacts/filterContactsSlice";
import { deleteContact } from "redux/contacts/opirations";

import { AiFillEdit } from 'react-icons/ai'
import { FiDelete } from 'react-icons/fi'



import { ContactList, ItemsContact,DeleteBtn, Notification, EditBtn } from "./ContactList.styled"


export const Contact = () =>{

    const [editModal, setEditModal] = useState(false);
    const [contactId, setContactId] = useState('');


    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const query = useSelector(state => state.filter.filter);

    
    const  getVisibleContact = () => {
        const normalizeFilter = query.toLocaleLowerCase()
      
        return contacts.filter(({name})=>
            name.toLocaleLowerCase().includes(normalizeFilter))
    };
      
    const visibleContact = getVisibleContact();
    
    const handleDaleteContact = id =>{
        dispatch(deleteContact(id))
        dispatch(handleFindContact(''))  
    };

    const handleEditContact = id => {
        setContactId(id)
        setEditModal(true);
    }
    
    
    
    
    return(
        <ContactList>
          
            { contacts.length === 0
                ? <Notification>You have no contacts</Notification>
                : visibleContact.length === 0
                    ? <Notification>contact not found</Notification>
                    : visibleContact.map(({id, name, number}) =>(
                        <ItemsContact 
                        onClick={()=>handleEditContact(id)}
                        key={id}>{name}: {number}
                            <div style={{marginLeft: '15px'}}>
                                <EditBtn type="button" onClick={()=>handleEditContact(id)}><AiFillEdit/></EditBtn> 
                                <DeleteBtn type="button" onClick={()=>handleDaleteContact(id)}><FiDelete/></DeleteBtn>
                            </div>
                        </ItemsContact>
                    ))
            }
            {editModal && <EditModal contactId={contactId}/>}
        </ContactList>
    )
}

