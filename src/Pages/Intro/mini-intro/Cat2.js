import "./mini-intro.css";
import { useNavigate } from "react-router-dom";


export const Category2 = () => {
    const navigate = useNavigate(); 
    return(
        <div className="mini-category">
            <div className="round" onClick={() => navigate("/Main")}>
                <h3>Casual</h3>
                <p>Effortlessly stylish watches perfect for everyday wear, seamlessly blending fashion and function.</p>
            </div>
        </div>
    )
}