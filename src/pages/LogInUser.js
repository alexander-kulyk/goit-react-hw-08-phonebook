import { useDispatch } from "react-redux";
import { loginUser } from "redux/auth/operations";


export const LogInUser = () => {
    const dispatch  = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.currentTarget.elements[0].value;
        const password = e.currentTarget.elements[1].value;

        const userDetails = {email, password};
        console.log(userDetails)

        dispatch(loginUser(userDetails))

    }
    
  return (
    <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
    </form>
  )
}
