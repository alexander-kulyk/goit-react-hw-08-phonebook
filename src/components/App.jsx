
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { theme } from "../theme/theme";
import { Contact } from "./ContactList/ContactList";
import Container from "./Container/Conteiner.styled";
import { ContactForm } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { PrimaryTitle, SecondaryTitle } from "./Titles/Titles";

import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/opirations';
//import { Loader } from './Loader/Loader';
import { ErrorMessage } from './Error/ErrorMessage';
import SkeletLoader from './SkeletonLoader/SkeletonLoader';


export const App = () =>{
  const dispatch = useDispatch();
  const {error, isLoading} = useSelector(state => state.contacts)

  useEffect(() => {
    dispatch(fetchContacts())
   
  }, [dispatch])
  

  return (

    <ThemeProvider theme={theme}>
      <Container>
        <ToastContainer/>

        <Container
          display="flex"
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          bg='#ededf0'
          p={4}
          boxShadow="0px 2px 10px -3px rgba(0,0,0,0.3)"
          
        >
          <PrimaryTitle>Phonebook</PrimaryTitle>
            <ContactForm />
        </Container>

        <Container
          display="flex"
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <SecondaryTitle>Contact</SecondaryTitle>
          <Filter title="Find contacs by name"/>
          {error !==null && <ErrorMessage/>}
          {isLoading 
              ? <SkeletLoader/>
              : <Contact/>
          }
            
        </Container>

      </Container>
    </ThemeProvider>
  );
    

}
