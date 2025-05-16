import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/userAuth/authSlice";
import bookReducer from "./features/books/booksSlice";
import pdfStreamReducer from "./features/pdf-stream/pdfStreamSlice";
import storage from "redux-persist/lib/storage"
import { persistReducer , persistStore} from "redux-persist";

//to store userinfo by default on the local storage
const persistConfig = {
  key:"root",
  storage,
  blacklist:["loginErrorMessage","registerErrorMessage"] //not saved those fields
}


const persistedAuthReducer = persistReducer(persistConfig,authReducer);
const store = configureStore({
  reducer:{
    auth:persistedAuthReducer,
    books:bookReducer,
    pdfStream:pdfStreamReducer
  }
});

const persistor = persistStore(store);

export  { persistor,store };