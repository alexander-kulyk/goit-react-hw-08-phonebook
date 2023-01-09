import { EditModal } from "components/editModal/EditModal";
//import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { handleFindContact } from "redux/contacts/filterContactsSlice";
import { deleteContact } from "redux/contacts/opirations";
import { toast } from 'react-toastify';

import { AiFillEdit } from 'react-icons/ai'
import { AiTwotoneDelete } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md'



import { ContactList, ItemsContact,DeleteBtn, Notification, EditBtn, FavBtn } from "./ContactList.styled"
import { useIsFave } from "hooks/useIsFave";
//(favContacts ||  [])

export const Contact = ({
    addFavorite,
    removeFav,
    favContacts,
    setFavContacts,
    setContactId, 
    setIsOpentModal, 
    isOpentModal, 
    contactId}) =>{

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const query = useSelector(state => state.filter.filter);

    const isFav = useIsFave(contactId, favContacts);
    console.log('isFav', isFav);
    
    
    
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

    

    
    return(
        <ContactList>
          
            { contacts.length === 0
                ? <Notification>You have no contacts</Notification>
                : visibleContact.length === 0
                    ? <Notification>contact not found</Notification>
                    : visibleContact.map(({id, name, number}) =>(
                        <ItemsContact key={id}>
                            {name}: {number}
                            <div style={{marginLeft: '15px'}}>
                                <EditBtn type="button" onClick={()=>handleEditContact(id)}><AiFillEdit/></EditBtn> 
                                <DeleteBtn type="button" onClick={()=>handleDaleteContact(id)}><AiTwotoneDelete/></DeleteBtn>
                                <FavBtn type="button"onClick={()=>handleAddFavorite(id)}>{isFav ? <MdFavorite/> : <MdFavoriteBorder/>}</FavBtn>
                            </div>
                        </ItemsContact>
                    ))
            }
            {isOpentModal && <EditModal 
                                    setIsOpentModal ={setIsOpentModal} 
                                    contactId={contactId}
                                    setFavContacts={setFavContacts}
                                    favContacts={favContacts}/>}
        </ContactList>
    )
    
}

//onClick={()=>handleEditContact(id)}
//isFav ? <MdFavorite/> : <MdFavoriteBorder/>