import "./mini-intro.css";
import { useNavigate } from "react-router-dom";


export const Category1 = () => {
    const navigate = useNavigate(); 
    return(
        <div className="mini-category">
            <div className="round" onClick={() => navigate("/Main")}>
                <h3>Sport</h3>
                <p>Timepieces designed for active lifestyles, embodying resilience and performance.</p>
            </div>
        </div>
    )
}