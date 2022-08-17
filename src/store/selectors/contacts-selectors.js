export const selectVisibleContacts = (state, filter) => {
  return state.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
