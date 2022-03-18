import React from "react";
import "./Footing.css";
function Footing(){
    return <footer>
        <img src="./images/logo.svg"/>
        <div className="footerOptions">
            <div className="footItem"><a>About</a></div>
            <div className="footItem"><a>Services</a></div>
            <div className="footItem"><a>Projects</a></div>
        </div>
        <div className="footerOptions">
            <div className="footItemIcons"><a>
            <img src="./images/icon-facebook.svg" /></a></div>
            <div className="footItemIcons"><a>
            <img src="./images/icon-instagram.svg" /></a></div>
            <div className="footItemIcons"><a>
            <img src="./images/icon-twitter.svg" /></a></div>
            <div className="footItemIcons"><a>
            <img src="./images/icon-pinterest.svg" /></a></div>
        </div>
        <p className="author">Challenge by Frontend Mentor. Coded by Elias Ballen.</p>

    </footer>;
}
export default Footing;