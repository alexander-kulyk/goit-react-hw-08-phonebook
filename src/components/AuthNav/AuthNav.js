import { LinkPages } from "components/Layout/Layout.styled"
import { Link } from "react-router-dom"
import css from  './AuthNav.module.css'



export const AuthNav = () => {
  return (
        <ul className={css.authNavList}>
            <li className={css.authNavItem}><LinkPages  to='login'>Login</LinkPages></li>
            <li className={css.authNavItem}><LinkPages  to='registration'>Registration</LinkPages></li>
        </ul>
  )
}
