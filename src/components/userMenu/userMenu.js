import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux"
import { logOutUser } from "redux/auth/operations";

import css from './userMenu.module.css'


export const UserMenu = () => {

  const  { user } = useAuth()
  //const userName = useSelector(state => state.auth.user.name)
    
    const dispatch = useDispatch();

    const handleClickLogOut = () => {
      dispatch(logOutUser());
    }
    

  return (
    <div className={css.containerUserMenu}>
        <p className={css.userName}>{user.name}</p>
        <button className={css.logoutBtn} onClick={handleClickLogOut}>logout</button>
    </div>
  )
}
