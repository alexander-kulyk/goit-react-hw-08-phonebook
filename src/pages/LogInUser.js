import { useDispatch } from "react-redux";
import { loginUser } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import { ErrorMessage } from "components/Error/ErrorMessage";
import css from '../components/Form/form.module.css'

export const LogInUser = () => {

    const { error } = useAuth();
   
    const dispatch  = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.currentTarget.elements[0].value;
        const password = e.currentTarget.elements[1].value;

        const userDetails = {email, password};

        dispatch(loginUser(userDetails))

    }
    
  return (
    <>
        <h2 className={css.titleForm}>Log in to your account</h2>
        <form className={css.form} onSubmit={handleSubmit}>
            <label>
                <input
                    className={css.input}
                    type='email'
                    name='email'
                    placeholder="Name"
                />
            </label>
            <label>
                <input
                    className={css.input}
                    type='password'
                    name='password'
                    placeholder="Password"
                />
            </label>
            <button 
                className={css.buttonForm}
                type="submit">Login</button>
                
                <br/>
                {error &&  <ErrorMessage/>}
        </form>
    </>
  )
}
