import {useNavigate} from "react-router-dom";
import "./signin.css";

export const  Userprofile =  () => {
const navigate = useNavigate();
return(
    <div>
        <div className="user-btn">   
            <button className="userbtn-mini first-btn" onClick={() => navigate("/Details")}>Profile</button>
            <button className="userbtn-mini" onClick={() => navigate("/Address")}>Address</button>
        </div>
    </div>
)
}