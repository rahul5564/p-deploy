import { NavLink } from "react-router-dom"
import "./bottomnav.css"

export const Bottom = () => {
    return(
        <div className="botton-main">
        <div className="bottom-nav">
            <div className="terms">
            <p><b className="terms-b">Icarus</b> <br/>
            Adorn your spaces with an array of timepieces, occupying every corner and every nook
            </p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>2023 Icarus</p>
            </div>
            <div className="links">
                <div className="link-head">Connect</div>
                <a href="https://github.com/rahul5564" target="_blank">GitHub</a><br/>
                <a href="https://twitter.com/Rahul56763234" target="_blank">Twitter</a><br/>
                <a href="https://www.linkedin.com/in/raghavendra-reddy-0323641b3/" target="_blank">LinkedIn</a>
            </div>
            <div className="Resources">
                <div className="link-head">Resources</div>
                <div>
                <NavLink to="/Signup" className="resource">Sign Up</NavLink>
                </div>
                <div>
                <NavLink to="/Login" className="resource">Sign In</NavLink>
                </div>
            </div>
        </div>
    </div>    
    )
}