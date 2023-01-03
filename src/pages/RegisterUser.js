//import { useState } from "react"
import { useDispatch } from "react-redux";
import { registerUser } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import { ErrorMessage } from "components/Error/ErrorMessage";
import css from '../components/Form/form.module.css'


export const RegisterUser = () => {

    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('')
    // const [mail, setMail] = useState('')
    const dispatch = useDispatch();
    const { error } = useAuth();

    // const handleChangeInput = e => {
      
    // }
    

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.currentTarget.elements[0].value
        const email = e.currentTarget.elements[1].value
        const password = e.currentTarget.elements[2].value

        const userDetails = {name, email, password};
        console.log(userDetails)
        dispatch(registerUser(userDetails))
    }
    
  return (
    <>
        <h2 className={css.titleForm}>Create Your account</h2>
        <form className={css.form} onSubmit={handleSubmit}>
            <label>
                <input
                    className={css.input}
                    type='text'
                    name='name'
                    placeholder="Name"
                />
            </label>
            <label>
                <input
                    className={css.input}
                    type='email'
                    name='email'
                    placeholder="Email"
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
                type="submit">Create</button>

                <br/>
                {error &&  <ErrorMessage/>}
        </form>
    </>
  )
}
