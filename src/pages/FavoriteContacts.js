//import { ContactList, FavBtn, ItemsContact, Notification } from "components/ContactList/ContactList.styled"
import { toast } from 'react-toastify';

export const FavoriteContacts = ({favContacts, setFavContacts}) => {
    
const handleRemoveFav = id => {
  toast('remove from favorite')
  const newState = favContacts.filter(contact =>contact.id !== id)
  setFavContacts(newState)
  
};
    
  return (
    <ul>
      {favContacts.length === 0
          ? <p>You have no favorite contacts</p>
          : favContacts.map(({id, name, number})=>(
            <li key={id}>
              {name}: {number} 
              <button onClick={() => handleRemoveFav(id)}>remove</button>
            </li>
          ))
      }
    </ul>
  )
}
