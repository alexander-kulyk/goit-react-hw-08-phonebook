import { useSelector } from 'react-redux';
import { selectIsError, selectIsLoggedIn, selectIsRefreshing, selectUser } from 'redux/auth/selectors';




export const useAuth = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const error = useSelector(selectIsError);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    error
  };
}
