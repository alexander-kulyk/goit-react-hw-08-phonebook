


export const useIsFave = (id, favContacts) => {
    console.log('favContacts', favContacts)
    console.log('id', id)
  const qqq = favContacts.some(contact => contact.id ===  id);
  console.log('qqq', qqq);
  return qqq
}

