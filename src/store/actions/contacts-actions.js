import { createAction } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

export const addContact = createAction('@@contacts/ADD_CONTACT', contacts => ({
  payload: {
    ...contacts,
    id: nanoid(),
  },
}));
export const deleteContact = createAction('@@contacts/DELETE_CONTACT');
