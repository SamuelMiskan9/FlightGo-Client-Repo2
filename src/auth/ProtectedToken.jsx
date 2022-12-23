import { Navigate } from "react-router-dom";

function ProtectedToken({ children }) {
    const role = localStorage.getItem('role');

    if (!role) return <Navigate to="/landing" />

    return children;
}

export default ProtectedToken;