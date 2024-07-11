import "./NotFound.css"
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const NotFound = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/notFound")
    }, []);
    return (
        <div className="error">
        </div>
    )
}
export default NotFound
