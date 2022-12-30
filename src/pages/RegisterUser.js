//import { useState } from "react"
import { useDispatch } from "react-redux";
import { registerUser } from "redux/auth/operations";



export const RegisterUser = () => {

    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('')
    // const [mail, setMail] = useState('')
    const dispatch = useDispatch();

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
    <form onSubmit={handleSubmit}>
        <label>
            Username
            <input
                type='text'
                name='name'
            />
        </label>
        <label>
            Email
            <input
                type='email'
                name='email'
            />
        </label>
        <label>
            Password
            <input
                type='password'
                name='password'
            />
        </label>
        <button type="submit">Register</button>
    </form>
  )
}
