import { configureStore } from '@reduxjs/toolkit';

import { contactsAPI } from './reduxRTK';

import { filter } from './reducers/filters-redusers';

const store = configureStore({
  reducer: {
    filter,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsAPI.middleware,
  ],
});

export default store;
