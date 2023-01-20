import { configureStore} from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { contactsReducer } from './contactsSlice'
import { filterReducer } from './filterSlice'
import { FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER, } from 'redux-persist'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
   middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,]
        }
      })
    
    },
})

export const persistore = persistStore(store)
