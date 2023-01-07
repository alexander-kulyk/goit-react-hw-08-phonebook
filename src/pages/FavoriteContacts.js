//import { toast } from 'react-toastify';
import css from 'components/ContactList/ContactList.module.css'
import { GrFavorite } from 'react-icons/gr'


export const FavoriteContacts = ({favContacts, removeFav}) => {
    
  const handleRemoveFav = id => {
    removeFav(id)
    
  };
    
  return (
    <ul className={css.list}>
      {favContacts.length === 0
          ? <p>You have no favorite contacts</p>
          : favContacts.map(({id, name, number})=>(
            <li className={css.item} key={id}>
              {name}: {number} 
              <button className={css.buttonFav} onClick={() => handleRemoveFav(id)}><GrFavorite/></button>
            </li>
          ))
      }
    </ul>
  )
}
