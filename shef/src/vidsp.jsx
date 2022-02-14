import React from "react";
import foimg from './images/spoimg.webp'
import './vidsp.css'



function vid(){
    return(
        <div>
            <div className="spomain">
                <div className="spodis">
                    <p className="h1">Video Spotlight</p>
                    <p className="h2">Meet the shefs</p>
                    <button className="spobtn">Watch Video</button>
                </div>
                <div className="spovid">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qRpmzBH1XKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="fosa">
                <div className="foimg">
                    <img src={foimg} alt="" />
                </div>
                <div className="fodis">
                    <p className="foh">Food safety</p>
                    <p className="fop">At Shef, we are committed to helping ensure that your food will always  be safe to eat. All shefs are required to pass an accredited food safety certification exam and comply with all local laws and regulations. In regions that have not yet implemented home cooking laws, shefs are required to cook out of commercial kitchens or other legally permissible facilities.</p>
                </div>
            </div>
        </div>
    )
}


export default vid