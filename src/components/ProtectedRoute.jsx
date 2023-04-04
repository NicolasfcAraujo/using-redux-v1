import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../redux/features/userSlice";

const ProtectedRoute = ({children}) => {
    const {isLogged} = useSelector(selectUser)
    const navigate = useNavigate()

    if (!isLogged) {
        navigate("/login")
    }

    return children
}

export default ProtectedRoute