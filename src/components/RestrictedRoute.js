import { useAuth } from "hooks/useAuth";
//import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"




export const RestrictedRoute = ({component , ridirectTo ='/'}) => {
   //const isLoggedIn  = useSelector(state => state.auth.isLoggedIn)
   const { isLoggedIn } = useAuth();
  
   return isLoggedIn ?  <Navigate to={ridirectTo}/> : component;
}


