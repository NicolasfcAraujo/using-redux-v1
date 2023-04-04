import { useDispatch, useSelector } from "react-redux"
import useAxios from "../../hooks/useAxios"
import { formSubmit, itemDelete, itemUpdate, selectForm, setContent, setTitle, turnOffEditing, turnOnEditing } from "../../redux/features/formSlice"
import { useEffect } from "react"

const url = "https://my-posts-api-v1.onrender.com/api/posts"

const Admin = () => {
    const {response, loading, error} = useAxios({
        method: "get",
        url: url
    })
    const { isEditing, title, content, itemId } = useSelector(selectForm)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(turnOffEditing())
    }, [])

    return (
        <section className="flex justify-center bg-slate-100">
            <div className=" w-5/6 bg-white flex flex-col items-center">
                <div className="px-4 py-2 w-full">
                    <h1 className="text-2xl">Admin</h1>
                </div>
                <div className="w-5/6">
                    <div>
                        <form >
                            <div>
                                <label htmlFor="title"><h5>title</h5></label>
                                <input type="text" name="title" id="title" onChange={() => dispatch(setTitle())} className="w-full p-2 rounded bg-slate-100"/>
                            </div>
                            <div>
                                <label htmlFor="content"><h5>content</h5></label>
                                <textarea name="content" id="content" onChange={() => dispatch(setContent())} rows="2" className="w-full p-2 rounded bg-slate-100"/>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="text-white px-6 py-1 rounded my-4" 
                                        style={{background: isEditing ? "rgb(107,33,168)":"rgb(22,163,74)"}}
                                        onClick={ isEditing ? (e) => {
                                                e.preventDefault()
                                                dispatch(itemUpdate({title, content, itemId}))
                                            } 
                                        :
                                            (e) => {
                                                e.preventDefault()
                                                dispatch(formSubmit({title, content})) 
                                            }
                                        }
                                >   
                                    {isEditing ? "Edit" : "Post"}
                                </button>
                                {isEditing && 
                                    <button onClick={() => dispatch(turnOffEditing())} className="text-white px-6 py-1 rounded ml-2 my-4 bg-red-700">
                                        Cancel
                                    </button>
                                }
                            </div>
                        </form>
                    </div>
                    <hr />
                    <div className="w-full">
                        {loading && <h1>Loading...</h1>}
                        {response.map((post, index) => {
                            return (
                                <article key={index}>
                                    <div className="rounded p-2 my-6 border border-solid border-slate-500">
                                        <div className="flex justify-between">
                                            <h4>{post.title}</h4>
                                            {(post._id !== "642c403db7ccf4651e3a7bb2") && 
                                                <div className="flex">
                                                    <button className="mr-2" onClick={() => dispatch(turnOnEditing(post))}>
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    <button onClick={() => dispatch(itemDelete(post))}>
                                                        <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                </div>
                                            }
                                        </div>
                                        <p>
                                            {post.content}
                                        </p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>  
        </section>
    )
}
export default Admin