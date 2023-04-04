import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { closeLogout, selectLogout } from "../../redux/features/logoutSlice"
import { logout } from "../../redux/features/userSlice"
import { useEffect } from "react"

const LogoutModal = () => {
    const {isLogout} = useSelector(selectLogout)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {coordinates, width} = useSelector(selectLogout)

    useEffect(() => {
        window.addEventListener("resize", () => {
            dispatch(closeLogout())
        })
    })

    useEffect(() => {
        dispatch(closeLogout())
    }, [])

    return (
        <>
            { isLogout &&
                <aside id="logoutBtn" className="bg-gray-100" style={{position: "absolute", left: `${coordinates.x}px`, top: `${coordinates.y}px`,
                                                                    width: `${width}px`, padding: "15px", 
                                                                    borderRadius: "8px", boxShadow: "-7px 7px 6px rgb(0,0,0,0.2)"}}>
                    <h4 className="text-base">Are you sure ?</h4>
                    <button className="text-white bg-red-700 px-4 py-1 mt-2 rounded" onClick={() => {
                        dispatch(closeLogout())
                        dispatch(logout())
                    }}>
                        Logout
                    </button>
                </aside>
            }
        </>
    )
}
export default LogoutModal