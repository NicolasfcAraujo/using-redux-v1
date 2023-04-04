import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../redux/features/userSlice";

const AdminProtectedRoute = ({children}) => {
    const {isAdmin, isLogged} = useSelector(selectUser)
    const navigate = useNavigate()

    if (!isLogged) {
        navigate("/login")
    } else if (!isAdmin) {
        navigate("/feed")
    }
     
    return children
}

export default AdminProtectedRoute