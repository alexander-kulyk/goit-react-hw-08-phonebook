import { Link } from "react-router-dom"
import css from  './AuthNav.module.css'



export const AuthNav = () => {
  return (
        <ul className={css.authNavList}>
            <li className={css.authNavItem}><Link className={css.authNavLink} to='login'>Login</Link></li>
            <li className={css.authNavItem}><Link className={css.authNavLink} to='registration'>Registration</Link></li>
        </ul>
  )
}
