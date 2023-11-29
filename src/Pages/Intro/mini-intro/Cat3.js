import "./mini-intro.css";
import { useNavigate } from "react-router-dom";

export const Category3 = () => {
    const navigate = useNavigate(); 
    return(
        <div className="mini-category">
            <div className="round" onClick={() => navigate("/Main")}>
                <h3>Luxury</h3>
                <p>Exquisite and sophisticated watches that reflect opulence and timeless elegance..</p>
            </div>
        </div>
    )
}