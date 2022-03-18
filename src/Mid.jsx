import React from "react";

function Mid(){
    return <div className="container-grid">
        <div className="grid-item midtext" >
            <h1>Transform your brand</h1>
            <p>We are a full-service creative agency 
            specializing in helping brands grow fast.
             Engage your clients through compelling visuals
              that do most of the marketing for you.</p>
            <a className="yellowLink">LEARN MORE</a>
        </div>
        <div className="grid-item image transform"> 
            <img src="./images/desktop/image-transform.jpg" />
        </div>
        <div className="grid-item image" >
        <img src="./images/desktop/image-stand-out.jpg" />
        </div>
        <div className="grid-item midtext" >
            <h1><strong>Stand out to the right audience</strong></h1>
            <p>Using a collaborative formula of designers,
             researchers, photographers, videographers,
              and copywriters, we’ll build and extend your brand in digital places.</p>
            <a className="redLink">LEARN MORE</a>
            
        </div>
        
        <div className="grid-item img1"  >
            <div className="design-description">
            <h2>Graphic design</h2>
            <p>Great design makes you memorable. 
            We deliver artwork that underscores your brand message 
            and captures potential clients’ attention.</p>
            </div>
        </div>
        <div className="grid-item img2" >
            <div className="design-description">
                <h2>Photography</h2>
                <p> Increase your credibility by getting the most stunning, 
                high-quality photos that improve your business image.</p>
            </div>
        </div>
        
    </div>;
}

export default Mid;