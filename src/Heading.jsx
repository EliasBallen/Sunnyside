import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import "./App.css";

function Heading(){
    return <header>
        <div className="heading">
            <Navbar />
            <Title />
        </div>
    </header>
}

export default Heading;