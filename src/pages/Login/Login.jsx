import { useEffect, useState } from "react"
import "./style.css"
import { useDispatch, useSelector } from "react-redux"
import { changeUserAsAdmin, changeUserAsUser, selectUser } from "../../redux/features/userSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [person, setPerson] = useState()
    const [userButton, setUserButton] = useState(false)
    const [adminButton, setAdminButton] = useState(false)
    const [isShortWidth, setIsShortWidth] = useState(false)
    const {isLogged} = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChangeToUser = () => {
        setAdminButton(false)
        setUserButton(true)
        setPerson("User")
    }

    const handleChangeToAdmin = () => {
        setUserButton(false)
        setAdminButton(true)
        setPerson("Admin")
    }

    const handleCheckWidth = () => {
        if (window.innerWidth < 800) {
            setIsShortWidth(true)
        } else {
            setIsShortWidth(false)
        }
    }

    const submitLogin = () => {
        if (person === "User") {
            dispatch(changeUserAsUser(person))
            navigate("/home/posts")
        } else if (person === "Admin") {
            dispatch(changeUserAsAdmin(person))
            navigate("/home/posts")
        } else {
            navigate("/login")
        }
    }

    useEffect(() => {
        if (isLogged) {
            navigate("/home/posts")
        }
    }, [])

    useEffect(() => handleCheckWidth(), [])
    useEffect(() => {
        window.addEventListener("resize", () => handleCheckWidth())
    }, [])
    
    return (
        <>
            <main style={{display: "flex", justifyContent: "center"}}>
                <div style={{height: "100vh", width: "90vw", display: isShortWidth || "flex"}}>
                    <div className="flex flex-col justify-center items-center" style={{width: isShortWidth || "50%", marginTop: isShortWidth && "100px"}}>
                        <h1 id="backImage" className="text-8xl">USING REDUX</h1>
                        <h5 className="text-3xl text-slate-700">, React Router and Axios</h5>
                    </div>
                    <section className="flex justify-center" style={{width: isShortWidth || "50%", alignItems: isShortWidth || "center", marginTop: isShortWidth && "100px", height: isShortWidth && "fit"}}>
                        <div className="border border-solid border-slate-400 rounded-md bg-white p-6 w-72">
                            <h3>Login</h3>
                            <div className="py-6">
                                <div onClick={handleChangeToUser} className="flex justify-between bg-slate-400 rounded-sm px-2 py-1 cursor-pointer">
                                    <h5>Enter as user</h5>
                                    {userButton && 
                                        <span><i className="fa-solid fa-check"></i></span>
                                    }
                                </div>
                                <div onClick={handleChangeToAdmin} className="flex justify-between text-gray-300 bg-slate-700 rounded-sm px-2 py-1 mt-2 cursor-pointer">
                                    <h5>Enter as admin</h5>
                                    {adminButton &&
                                        <span><i className="fa-solid fa-check"></i></span>
                                    }    
                                </div>
                            </div>
                            <div onClick={submitLogin} style={{background: person ? "rgb(22,163,74)":"rgb(20,83,45)", 
                                                               paddingTop: "0.25rem", paddingBottom: "0.25rem", display:"flex", 
                                                               justifyContent: "center", alignItems: "center", color:"white", 
                                                               borderRadius: "0.25rem"}}>
                                <button disabled={person ? false:true} className="w-full h-full">LOGIN</button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <aside className="absolute bottom-0 w-full">
                <div className="flex justify-between px-3 py-2">
                    <h3>Coded by <a href="https://github.com/NicolasfcAraujo" className="text-slate-600 hover:text-blue-600 cursor-pointer">NicolasfcAraujo</a></h3>
                    <div className=" text-2xl">
                        <a href="https://linkedin.com/in/nícolas-araujo" className="mr-3 hover:text-blue-600 cursor-pointer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/NicolasfcAraujo" className="hover:text-blue-600 cursor-pointer">
                            <i className="fa-brands fa-square-github"></i>
                        </a>
                    </div>
                </div>
            </aside>
        </>   
    )
}
export default Login