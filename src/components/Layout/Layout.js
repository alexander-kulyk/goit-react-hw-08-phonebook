import { AuthNav } from "components/AuthNav/AuthNav"
import { UserMenu } from "components/userMenu/userMenu"
import { useAuth } from "hooks/useAuth";
//import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import css from './Layout.module.css';



export const Layout = () => {

    //const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const { isLoggedIn } = useAuth();
   return(
        <>
            <header  className={css.header}>
                <Link to='/'>Home</Link>
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
