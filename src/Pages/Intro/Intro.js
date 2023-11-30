import { useNavigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Category1 } from "./mini-intro/Cat1";
import { Category2 } from "./mini-intro/Cat2";
import { Category3 } from "./mini-intro/Cat3";

import "./intro.css";
import { Bottom } from "../BottomNav/BottomNav";

export const Intro = () => {
    const navigate = useNavigate(); 
    return(
        <div>
            <Navbar/>
            <div className="Intro">
                <div className="Intro-main">
                    <div className="img-content">
                    <h1 className="head-name-intro">ICARUS</h1>
                    <p>-Discover the Uncharted-</p>
                    {/* <span className="mini-img"></span> */}
                    <div className="btn-intro">
                    <span className="quote">Grace and accuracy with each tick</span>
                    <br/>
                    <span className="shop-watch">Discover our range of <b>Wristwatches</b></span>
                    <br/>
                    <button className="show-now" onClick={()=>navigate("/Main")}>
                        Shop now
                    </button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="mini-Icons">
            <h2 className="tag">Highlighted Watch Collections</h2>
                <p className="mini-tag">Explore a variety of watch categories at ICARUS. Find your preferred style today</p>
                <div className="category">
                    <Category1/>
                    <Category2/>
                    <Category3/>
                </div>
            </div>
            <div>
                <Bottom/>
            </div>
        </div>
    )
}