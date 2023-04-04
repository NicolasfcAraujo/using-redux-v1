import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { selectUser } from "../../redux/features/userSlice"

const Error = () => {
    const {isLogged} = useSelector(selectUser)

    return (
        <div className="flex flex-col items-center text-center justify-center" style={{height: "100vh"}}>
            <h1 className="text-5xl">404. NOT FOUND</h1>
            {isLogged ?
                <NavLink to="/home/posts"><div className="mt-4 px-4 py-2 bg-indigo-800 rounded text-white"><h3>Back to Posts</h3></div></NavLink>
            :
                <NavLink to="/login"><div className="mt-4 px-4 py-2 bg-indigo-800 rounded text-white"><h3>Back to Login</h3></div></NavLink>
            }
        </div>
    )
}
export default Error