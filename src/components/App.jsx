import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';
//import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { PhoneBook } from 'pages/PhoneBook';
import { RegisterUser } from 'pages/RegisterUser';
import { LogInUser } from 'pages/LogInUser';
import { useDispatch } from 'react-redux';
import { useContext, useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { FavoriteContacts } from 'pages/FavoriteContacts';
//import { useState } from 'react';
import { Loader } from './Loader/Loader';
import { useAuth } from 'hooks/useAuth';
import createContext from '../context/context'


export const App = () =>{

  const {setFavContacts, favContacts} = useContext(createContext);


  const { isRefreshing, user } = useAuth();
  const KEY = user.email;

  const dispatch =  useDispatch();
  

  const addFavorite = fav => {
    const newFavs = [...favContacts,fav]
    setFavContacts(newFavs);
    window.localStorage.setItem(KEY, JSON.stringify(newFavs))

  };

  const removeFav = id => { 
    const newFavs = favContacts.filter(contact =>contact.id !== id)
    setFavContacts(newFavs);

    window.localStorage.setItem(KEY, JSON.stringify(newFavs));
  }

  useEffect(() => {
    
    dispatch(refreshUser())
    
  }, [dispatch]);


  useEffect(() => {
    const KEY = user.email;
    const favs = window.localStorage.getItem(KEY) 

    setFavContacts(favs ? JSON.parse(favs) : [])
    
  }, [setFavContacts, user]);

  
  
  return isRefreshing 
            ? <Loader/> 
            : (
              <>
                <Routes>
                  <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='contacts' element={<PrivateRoute redirectTo={'/login'} 
                      component={<PhoneBook 
                        addFavorite={addFavorite} 
                        removeFav={removeFav}/>}/>}/>
                    <Route path='favorite' element={<PrivateRoute redirectTo={'/login'} 
                      component={<FavoriteContacts 
                        removeFav={removeFav}/>}/>}/>
                    <Route path='login' element={<RestrictedRoute ridirectTo={'/contacts'} component={<LogInUser/>}/>}/>
                    <Route path='registration' element={<RestrictedRoute ridirectTo={'/contacts'} component={<RegisterUser/>}/>}/>
                  </Route>
                </Routes>
                <GlobalStyle/>
              </>
               )

              //  setContactId={setContactId}
              //           setIsOpentModal={setIsOpentModal}
              //           isOpentModal={isOpentModal}
              //           contactId={contactId}
              // favContacts={favContacts} 
              //           setFavContacts={setFavContacts}
}
