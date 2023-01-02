import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { logOutUser } from "redux/auth/operations";


export const UserMenu = () => {

  const  { user } = useAuth()
  //const userName = useSelector(state => state.auth.user.name)
    
    const dispatch = useDispatch();

    const handleClickLogOut = () => {
      dispatch(logOutUser());
    }
    

  return (
    <div style={{display: 'flex'}}>
      <Link to='contacts'>Phonebook</Link>
        <p style={{margin: '0 0 0 20px'}}>{user.name}</p>
        <button onClick={handleClickLogOut}>logout</button>
    </div>
  )
}
