import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { сontactApi } from './contacts/contactsSlice';
import { filterReducer } from './contacts/contacts-reducer';

export const store = configureStore({
  reducer: {
    [сontactApi.reducerPath]: сontactApi.reducer,
    filter: filterReducer,

  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    сontactApi.middleware,
  ],
  devTools: true,
});

setupListeners(store.dispatch);
