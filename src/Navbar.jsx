import React  from "react";
import "./Navbar.css";
import { useState } from "react";





function Navbar(){
    const [isClicked, setClicked] = useState(false); 
    function openCloseMenu(){
        setClicked(isClicked?false:true);
    }
    return <div className="navbar">
    <div className="navItem headerLogo">
    <img src="./images/logo.svg" width="124" height="24"/>
    </div>
    <div className="navItem iconhamburger">
        <img onClick={() =>{
          openCloseMenu()}} src = "./images/icon-hamburger.svg" />
    </div>
     <div>{
         isClicked && <div className="floatMenu"> 
            <div className="floatOption">
              <div ><a>About</a></div>
              <div><a>Services</a></div>
              <div><a>Projects</a></div>
              <div className="floatContact"><a>CONTACT</a></div>
            </div>
         </div>
         }
       </div>
   <div className="navbarOptions">
    <div className="navItem about"><a>About</a></div>
    <div className="navItem service"><a>Services</a></div>
    <div className="navItem proyects"><a>Projects</a></div>
    <div className="navItem contact"><a>CONTACT</a></div>
   </div>
 </div>
    ;
}

export default Navbar;