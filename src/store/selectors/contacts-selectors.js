export const selectVisibleContacts = (state, filter) => {
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
