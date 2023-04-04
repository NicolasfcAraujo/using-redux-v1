import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import logoutSlice from "./features/logoutSlice";
import formSlice from "./features/formSlice";

const persistConfig = {
    key: "root",
    storage
}

const reducer = combineReducers({
    user: userSlice,
    logout: logoutSlice,
    form: formSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer
})