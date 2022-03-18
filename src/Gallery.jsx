import React from "react";

import "./Gallery.css";

function Gallery(){
    return <div className="gallery-grid">
            <div className="grid-gallery-item">
            <img src="./images/desktop/image-gallery-milkbottles.jpg"></img>
            </div>
            <div className="grid-gallery-item">
            <img src="./images/desktop/image-gallery-orange.jpg"></img>
            </div>
            <div className="grid-gallery-item">
            <img src="./images/desktop/image-gallery-cone.jpg"></img>
            </div>
            <div className="grid-gallery-item">
            <img src="./images/desktop/image-gallery-sugarcubes.jpg"></img>
            </div>
    </div>;
}

export default Gallery;