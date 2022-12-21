import { Navigate } from "react-router-dom";

function ProtectedToken({ children }) {
    const token = localStorage.getItem('token');

    if (!token) return <Navigate to="/Login" />

    return children;
}

export default ProtectedToken;