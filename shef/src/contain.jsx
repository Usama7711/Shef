import React from "react";
import img2 from './images/shefs.jpg'
import img3 from './images/dishes.jpg'
import img4 from './images/packfood.jpg'
import './contain.css'


function contain(){
    return(
        <div>
            <div className="mainord">
                <div className="ordhed">
                    <p>How Shef Works</p>
                </div>
                <div className="ordcon1">
                    <div className="ord1">
                        <div>
                            <img src={img2} alt="" />
                        </div>
                        <div>
                            <p className="ordp1">Choose a Shef</p><br />
                            <p className="ordp2">All shefs are food safatey <br /> certified</p>
                        </div>
                    </div>
                    <div className="ord1">
                        <div>
                            <img src={img3} alt="" />
                        </div>
                        <div>
                            <p className="ordp1">pick your dishes</p><br />
                            <p className="ordp2">Order in advamce so shefs <br /> can bye fresh ingredients</p>
                        </div>
                    </div>
                    <div className="ord1">
                        <div>
                            <img src={img4} alt="" />
                        </div>
                        <div>
                            <p className="ordp1">Get your delivery</p><br />
                            <p className="ordp2">Dishes arrive refigerated - just <br /> heat , eat and repeat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default contain;