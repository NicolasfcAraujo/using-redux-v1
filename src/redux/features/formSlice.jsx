import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://my-posts-api-v1.onrender.com/api/posts"

export const slice = createSlice({
    name:"form",
    initialState: {
        isEditing: false,
        title: "",
        content: "",
        itemId: "",
    },
    reducers: {
        turnOnEditing(state, {payload}) {
            document.getElementById("title").value = payload.title
            document.getElementById("content").value = payload.content
            return {...state, isEditing: true, itemId: payload._id, title: payload.title, content: payload.content}
        },
        turnOffEditing(state) {
            document.getElementById("title").value = ""
            document.getElementById("content").value = ""
            return {...state, isEditing: false}
        },
        setTitle(state) {
            const titleValue = document.getElementById("title").value
            console.log(titleValue)
            return {...state, title: titleValue}
        },
        setContent(state) {
            const contentValue = document.getElementById("content").value
            console.log(contentValue)
            return {...state, content: contentValue}
        },
        formSubmit(state, {payload}){
            axios.post(url, {
                "title": payload.title,
                "content": payload.content
            }).then(() => window.location.reload())
            return {...state, title: "", content: "", isEditing: false}
        },
        itemUpdate(state, {payload}) {
            axios.put(`${url}/${payload.itemId}`, {
                "title": payload.title,
                "content" : payload.content
            }).then(() => window.location.reload())
            return { ...state, isEditing: false}
        },
        itemDelete(state, {payload}) {
            axios.delete(`${url}/${payload._id}`).then(() => {
                window.location.reload()
            })
            return {...state}
        }
    }
})

export const { turnOnEditing, turnOffEditing, setTitle, setContent, formSubmit, itemUpdate, itemDelete } = slice.actions
export const selectForm = state => state.form
export default slice.reducer