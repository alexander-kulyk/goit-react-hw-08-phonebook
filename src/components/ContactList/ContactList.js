import { EditModal } from "components/editModal/EditModal";
//import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { handleFindContact } from "redux/contacts/filterContactsSlice";
import { deleteContact } from "redux/contacts/opirations";
import { toast } from 'react-toastify';



import { ContactList, Notification, } from "./ContactList.styled"
import { useContext } from "react";
import createContext from '../../context/context'
import { ItemContact } from "./ItemContact";
//(favContacts ||  [])

export const Contact = ({ addFavorite, removeFav}) =>{
     const { 
        favContacts, 
        setContactId, 
        setIsOpentModal, 
        isOpentModal
    } = useContext(createContext);

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const query = useSelector(state => state.filter.filter);
    
    const  getVisibleContact = () => {
        const normalizeFilter = query.toLocaleLowerCase()
      
        return contacts.filter(({name})=>
            name.toLocaleLowerCase().includes(normalizeFilter))
    };
      
    const visibleContact = getVisibleContact();

    // const getFavContacts = id => { 
    //     return favContacts.filter(contact => contact.includes(id))
    // }
    
    const handleDaleteContact = id =>{
        dispatch(deleteContact(id))
        dispatch(handleFindContact(''));

        const checkFav = favContacts.some(contact => contact.id === id);

        if (checkFav === true) {
            removeFav(id)
        }
    };

    const handleEditContact = id => {
        setContactId(id)
        setIsOpentModal(true);
    };


    const handleAddFavorite = id => {
        const favContact = contacts.find(contact => contact.id  === id);
        const checkFavContact =  favContacts.some(contact =>contact.id === favContact.id);
       

        if (checkFavContact === true) {
            toast.error('this contact is in your favorites')
            return  
        };
        addFavorite(favContact)
        toast('added contact to favorite');
        
    };

    if  (contacts.length === 0) {
        return <Notification>You have no contacts</Notification>;
    }

    if (visibleContact.length === 0) {
        return <Notification>contact not found</Notification>;
    }

    return(
        <ContactList> 
            { visibleContact.map((c) => <ItemContact key={c.id} {...c} 
                                                    handleDaleteContact={handleDaleteContact} 
                                                    handleAddFavorite={handleAddFavorite} 
                                                    handleEditContact={handleEditContact}
                                                    favContacts={favContacts}/>)}
            {isOpentModal && <EditModal/>}
        </ContactList>
    )
    
}

//onClick={()=>handleEditContact(id)}
//isFav ? <MdFavorite/> : <MdFavoriteBorder/>