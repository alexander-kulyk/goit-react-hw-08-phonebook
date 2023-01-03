import css from './Home.module.css'
import { FaUserAstronaut } from 'react-icons/fa'




export const Home = () => {
  return(
    <div className={css.containerHome}>
      <span ><FaUserAstronaut className={css.iconAstronaut}/></span>
      <h1 className={css.titleHome}>Welcome in your phonebook</h1>
    </div>
  )
}
