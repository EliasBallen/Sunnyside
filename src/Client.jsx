import React from "react";

function Client(props){
    return  <div className="grid-testimonial-item ">
    <img src={props.imageURL}></img>
    <p>{props.testimony} 
     </p>
    <h3>{props.name}</h3>
    <p className="personTitle">{props.profession}</p>
</div>;
}

export default Client;
