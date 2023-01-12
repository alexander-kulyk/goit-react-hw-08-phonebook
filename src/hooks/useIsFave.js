export const useIsFave = (id, favContacts) => {
  return favContacts.some(contact => contact.id === id);
};
