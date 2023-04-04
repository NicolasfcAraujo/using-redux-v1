import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { selectUser } from "../../redux/features/userSlice"

const Page = () => {
    const { name } = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if ((window.location.href === "http://using-redux.netlify.app/" && name) || (window.location.href === "http://using-redux.netlify.app" && name)) {
            navigate("/home/posts")
        } else if ((window.location.href === "http://using-redux.netlify.app/" && !name) || (window.location.href === "http://using-redux.netlify.app" && !name)) {
            navigate("/login")
        }
    })

    return (
        <>
            <Outlet/>
        </>
    )
}
export default Page