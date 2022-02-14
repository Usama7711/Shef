import React from "react";
import fimg1 from './images/fdish1.jpg'
import fimg2 from './images/fdish2.jpg'
import fimg3 from './images/fdish3.jpg'
import './fdish.css'



function fdish(){
    return(
        <div>
            <div className="fmain">
                <div className="fhed">
                    <p>Featured dishes</p>
                </div>
                <div className="fdishmain">
                    <div className="img1">
                        <img src={fimg1} alt="" />
                        
                    </div>
                    <div>
                        <div className="img2">
                            <img src={fimg3} alt="" />
                        </div>
                        <div>
                            <div className="img3">
                                <img src={fimg2} alt="" />
                            </div>
                            <div className="fshefdet">
                                <div>
                                    <p className="fp1 fpp1" >TOP</p><br />
                                    <p className="fp2">Chicken Pho</p>
                                    <p className="fp3">Shef Ly</p>
                                </div>
                                <div>
                                    <p className="fp1">LEST</p>
                                    <p className="fp2">Shahi Paneer</p>
                                    <p className="fp3">Shef Supriya</p>                      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default fdish