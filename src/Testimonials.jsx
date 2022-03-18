import React from "react";
import "./Testimonial.css";
import Client from "./Client";
function Testimonials(){

    return <div className="testDiv">
        <div className="titleTestimonial"><h1>CLIENT TESTIMONIALS</h1></div> 
    <div className="testimonial-grid">

        <Client  
            imageURL="./images/image-emily.jpg"
            testimony="We put our trust in Sunnyside and they delivered,
             making sure our needs were met and deadlines 
             were always hit."
            name="Emily R."
            profession="Marketing Director"
        />        
        <Client 
            imageURL="./images/image-thomas.jpg"
            testimony="Sunnyside’s enthusiasm coupled 
            with their keen interest in our brand’s success 
            made it a satisfying and enjoyable experience."
            name="Thomas S."
            profession="Chief Operating Officer"
        />
        <Client 
             imageURL="./images/image-jennie.jpg"
            testimony="Incredible end result! Our sales increased over 400% 
            when we worked with Sunnyside. Highly recommended!"
            name="Jennie F.."
            profession="Business Owner"

        />
        </div>
    </div>;
}
export default Testimonials;