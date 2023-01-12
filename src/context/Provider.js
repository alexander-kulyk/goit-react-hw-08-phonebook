import { useState } from 'react';
import createContext from './context';

export const ProviderCtx = ({ children }) => {
  const [favContacts, setFavContacts] = useState([]);
  const [isOpentModal, setIsOpentModal] = useState(false);
  const [contactId, setContactId] = useState('');

  const providerValue = {
    favContacts,
    setFavContacts,
    isOpentModal,
    setIsOpentModal,
    contactId,
    setContactId,
  };

  return (
    <createContext.Provider value={providerValue}>
      {children}
    </createContext.Provider>
  );
};
