import { useEffect } from "react"
import { useNavigate } from "react-router";

function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        sessionStorage.removeItem('currentUser');
        navigate('/login');
    })
    return (
        <div>Logging Out</div>
    )
}
export default Logout;