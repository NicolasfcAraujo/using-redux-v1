import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { selectUser } from "../../redux/features/userSlice"
import { closeLogout, selectLogout, setCoordinates } from "../../redux/features/logoutSlice"
import LogoutModal from "../LogoutModal/LogoutModal"
import "./style.css"

const Navbar = () => {
    const {name, isAdmin} = useSelector(selectUser)
    const {isLogout, coordinates, width} = useSelector(selectLogout)
    const dispatch = useDispatch()

    return (
        <div className="flex items-center px-4 py-4">
            <div className="w-1/3">
                <Link to="/home/posts">
                    <h1 id="backImage" className=" w-fit text-4xl">Using Redux</h1>
                </Link>
            </div>
            <nav className="w-1/3">
                <ul style={{display: "grid", gridTemplateColumns: isAdmin ? "repeat(3, 1fr)":"repeat(2, 1fr)",
                            justifyItems: "center"}}>
                    <NavLink to="/home/posts"><h3>posts</h3></NavLink>
                    {isAdmin && <NavLink to="/home/admin"><h3>admin</h3></NavLink>}
                    <button id="logoutBtn" onClick={() => {
                        if (isLogout){
                            dispatch(closeLogout())
                        } else {
                            dispatch(setCoordinates(200))
                        }
                    }}>
                        <h3>Logout</h3>
                    </button>
                </ul>
            </nav>
            <div className="w-1/3 flex justify-end">
                <h5>Hello, {name}</h5>
            </div>
            <LogoutModal/>
        </div>
    )
}
export default Navbar