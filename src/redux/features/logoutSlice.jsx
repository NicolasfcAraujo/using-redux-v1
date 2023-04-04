import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name:"logout",
    initialState: {
        isLogout: false,
        coordinates: {x:0, y:0},
        width: 0,
    },
    reducers: {
        openLogout(state) {
            return {...state, isLogout: true}
        },
        closeLogout(state) {
            return {...state, isLogout: false}
        },
        setCoordinates(state, {payload}){
            const btn = document.getElementById("logoutBtn")
            const positionX = btn.offsetLeft + (btn.offsetWidth/2) - 100
            const positionY = btn.offsetTop + btn.offsetHeight + 20 
            return {...state, isLogout: true, width: payload, coordinates: {x:positionX, y:positionY}}
        }
    }
})

export const { openLogout, closeLogout, setCoordinates } = slice.actions
export const selectLogout = state => state.logout
export default slice.reducer