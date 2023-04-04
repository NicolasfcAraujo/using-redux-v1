import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "user",
    initialState: {
        name: "",
        isAdmin: false,
        isLogged: false,
    },
    reducers: {
        changeUserAsAdmin(state, {payload}){
            return {...state, isAdmin: true, isLogged: true, name: payload}
        },
        changeUserAsUser(state, {payload}){
            return {...state, isAdmin: false, isLogged: true, name: payload}
        },
        logout(state){
            return {...state, isLogged: false, name: ""}
        },
    }
})

export const { changeUserAsAdmin, changeUserAsUser, logout } = slice.actions
export const selectUser = state => state.user
export default slice.reducer