import { useAuth } from "hooks/useAuth";
//import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({component, redirectTo = '/'}) => {

  // const isLoggedIn  = useSelector(state => state.auth.isLoggedIn);
  // const isRefreshing =  useSelector(state => state.auth.isRefreshing);

  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect  = !isLoggedIn && !isRefreshing;
  return  shouldRedirect ? <Navigate to={redirectTo}/> : component;
}
