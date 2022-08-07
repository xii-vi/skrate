import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes =({children})=>{
    const {user} = useAuth();
    if(!user){
        return <Navigate to="/" />
    }
    return children
}

export default ProtectedRoutes;