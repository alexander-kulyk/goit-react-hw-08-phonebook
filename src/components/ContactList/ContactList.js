import { useDispatch, useSelector } from "react-redux"
import { handleFindContact } from "redux/filterContactsSlice";
import { deleteContact } from "redux/opirations";

import { ContactList, ItemsContact,DeleteBtn, Notification } from "./ContactList.styled"


export const Contact = () =>{
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const query = useSelector(state => state.filter.filter);

    
    const  getVisibleContact = () =>{

        const normalizeFilter = query.toLocaleLowerCase()
      
        return contacts.filter(({name})=>
            name.toLocaleLowerCase().includes(normalizeFilter))
      };
      
      const visibleContact = getVisibleContact();

      const handleDaleteContact = id =>{
        dispatch(deleteContact(id))
        dispatch(handleFindContact(''))
        
      }

    
    
    return(
        <ContactList>
          
            { contacts.length === 0
                ? <Notification>You have no contacts</Notification>
                : visibleContact.length === 0
                    ? <Notification>contact not found</Notification>
                    : visibleContact.map(({id, name, phone}) =>(
                        <ItemsContact 
                        key={id}>{name}: {phone} <DeleteBtn type="button" onClick={()=>handleDaleteContact(id)}>delete</DeleteBtn>
                        </ItemsContact>
             
                    ))
            }
            
        </ContactList>
    )
}

