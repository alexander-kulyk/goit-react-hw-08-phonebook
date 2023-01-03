import { useState } from "react";
import { useSelector } from "react-redux"


export const FavoriteContacts = ({favId}) => {
    const contacs  = useSelector(state => state.contacts.items)
    const [favContacts, setFavContacts] = useState([])

    const favoriteContact = contacs.find(contact => contact.id === favId);
    console.log('favoriteContacts', favoriteContact);
    console.log('setFavContacts', setFavContacts)

    
    
    
    
console.log('favContacts', favContacts)
    
  return (
    <div>{favId}</div>
  )
}
