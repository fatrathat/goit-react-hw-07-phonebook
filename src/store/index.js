import { configureStore } from '@reduxjs/toolkit';

import { contactsAPI } from './reduxRTK';

// import { contacts } from './reducers';

const store = configureStore({
  reducer: {
    // contacts,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsAPI.middleware,
  ],
});

export default store;
