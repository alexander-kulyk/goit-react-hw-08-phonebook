import { Contact } from "components/ContactList/ContactList"
import Container from "components/Container/Conteiner.styled"
import { ErrorMessage } from "components/Error/ErrorMessage"
import { Filter } from "components/Filter/Filter"
import { ContactForm } from "components/Form/Form"
import SkeletLoader from "components/SkeletonLoader/SkeletonLoader"
import { PrimaryTitle, SecondaryTitle } from "components/Titles/Titles"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer } from "react-toastify";
import { fetchContacts } from "redux/contacts/opirations"
import { ThemeProvider } from "styled-components"
import { theme } from "theme/theme"


export const PhoneBook = () => {
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
  )
}
