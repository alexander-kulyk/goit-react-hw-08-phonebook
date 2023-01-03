import { AuthNav } from "components/AuthNav/AuthNav"
import { UserMenu } from "components/userMenu/userMenu"
import { useAuth } from "hooks/useAuth";
//import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import css from './Layout.module.css';
import { LinkPages } from "./Layout.styled";

export const Layout = () => {

    //const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const { isLoggedIn } = useAuth();
   return(
        <>
            <header  className={css.header}>
                <div className={css.containerPages}>
                    <LinkPages  className={css.linkPages} to='/'>Home</LinkPages>
                    {isLoggedIn && <LinkPages className={css.linkPages} to='contacts'>Phonebook</LinkPages>}
                </div>
                <nav>
                    {isLoggedIn 
                        ? <UserMenu/> 
                        : <AuthNav/>}  
                </nav>
            </header>
            <Outlet/>
        </>
    )
  
}
