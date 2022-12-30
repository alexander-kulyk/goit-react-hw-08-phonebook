

import 'react-toastify/dist/ReactToastify.css';
//import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { PhoneBook } from 'pages/PhoneBook';
import { RegisterUser } from 'pages/RegisterUser';
import { LogInUser } from 'pages/LogInUser';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';


export const App = () =>{

const dispatch =  useDispatch();

useEffect(() => {
  dispatch(refreshUser())
  
}, [dispatch]);

  
  return (
        <>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}></Route>
              <Route path='contacts' element={<PhoneBook/>}/>
              <Route path='login' element={<LogInUser/>}/>
              <Route path='registration' element={<RegisterUser/>}/>
            </Route>
          </Routes>
        </>
  )
}
