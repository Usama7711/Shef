import React from "react";
import img1 from './images/body1.jpg'
import './body.css'

function body(){
    return(
        <div>
            <div className="bomain">
                <img src={img1} alt="" />
            </div>
            <div className="con1">
                <p>Authentic dishes. <br />Homemade. <br />Delivered.</p>
            </div>
            <div className="con2">
                <p>Explore who's cooking in <br />your neighbohood.</p>
            </div>
            <div className="con3">
                <input type="search" placeholder="Enter your ZIP code"/>
                <i class="fa-solid fa-location-dot"></i>
                <button>Find Food</button>
            </div>
            <div className="con4">
                <a href="">Already have an account? sign in</a>
            </div>
        </div>
    )
}

export default body;