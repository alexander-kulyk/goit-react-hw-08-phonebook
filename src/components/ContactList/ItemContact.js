import { useIsFave } from 'hooks/useIsFave';
import { AiFillEdit, AiTwotoneDelete } from 'react-icons/ai';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import css from './ContactList.module.css';

export const ItemContact = ({
  id,
  name,
  number,
  handleDaleteContact,
  handleEditContact,
  handleAddFavorite,
  favContacts,
  removeFav,
}) => {
  const isFav = useIsFave(id, favContacts);
  return (
    <li className={css.item} key={id}>
      {name}: {number}
      <div style={{ marginLeft: '15px' }}>
        <button
          className={css.editBtn}
          type="button"
          onClick={() => handleEditContact(id)}
        >
          <AiFillEdit />
        </button>
        <button
          className={css.delBtn}
          type="button"
          onClick={() => handleDaleteContact(id)}
        >
          <AiTwotoneDelete />
        </button>
        {isFav ? (
          <button
            className={css.buttonFav}
            type="button"
            onClick={() => removeFav(id)}
          >
            <MdFavorite />
          </button>
        ) : (
          <button
            className={css.buttonFav}
            type="button"
            onClick={() => handleAddFavorite(id)}
          >
            <MdFavoriteBorder />
          </button>
        )}
      </div>
    </li>
  );
};
