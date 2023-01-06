import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';
//import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { PhoneBook } from 'pages/PhoneBook';
import { RegisterUser } from 'pages/RegisterUser';
import { LogInUser } from 'pages/LogInUser';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { FavoriteContacts } from 'pages/FavoriteContacts';
import { useState } from 'react';
import { Loader } from './Loader/Loader';



export const App = () =>{

const dispatch =  useDispatch();
const isRefreshing = useSelector(state => state.auth.isRefreshing);
const [favContacts, setFavContacts] = useState([])


useEffect(() => {
  dispatch(refreshUser())
  
}, [dispatch]);

  
  return isRefreshing 
            ? <Loader/> 
            : (
              <>
                <Routes>
                  <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='contacts' element={<PrivateRoute redirectTo={'/login'} component={<PhoneBook favContacts={favContacts} setFavContacts={setFavContacts} />}/>}/>
                    <Route path='favorite' element={<PrivateRoute redirectTo={'/login'} component={<FavoriteContacts favContacts={favContacts} setFavContacts={setFavContacts}/>}/>}/>
                    <Route path='login' element={<RestrictedRoute ridirectTo={'/contacts'} component={<LogInUser/>}/>}/>
                    <Route path='registration' element={<RestrictedRoute ridirectTo={'/contacts'} component={<RegisterUser/>}/>}/>
                  </Route>
                </Routes>
                <GlobalStyle/>
              </>
               )
}
