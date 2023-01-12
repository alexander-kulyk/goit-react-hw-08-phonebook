import { useIsFave } from "hooks/useIsFave";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { EditBtn, ItemsContact, DeleteBtn, FavBtn } from "./ContactList.styled"

export const ItemContact  =  ({id, name, number, handleDaleteContact, handleEditContact,handleAddFavorite , favContacts}) => {
    console.log('favContacts', favContacts)
    const isFav = useIsFave(id, favContacts)
    return (
    <ItemsContact key={id}>
            {name}: {number}
             <div style={{marginLeft: '15px'}}>
                <EditBtn type="button" onClick={()=>handleEditContact(id)}><AiFillEdit/></EditBtn> 
                <DeleteBtn type="button" onClick={()=>handleDaleteContact(id)}><AiTwotoneDelete/></DeleteBtn>
                <FavBtn type="button"onClick={()=>handleAddFavorite(id)}>{isFav ? <MdFavorite/> : <MdFavoriteBorder/>}</FavBtn>
            </div>
    </ItemsContact>)
}