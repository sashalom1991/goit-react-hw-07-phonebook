import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from './pokemon/pokemon';
import { сontactApi } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [сontactApi.reducerPath]: сontactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    сontactApi.middleware,
  ],
  devTools: true,
});

setupListeners(store.dispatch);
