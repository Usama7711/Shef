import React from "react";
import './rto.css'


function rto(){
    return(
        <div>
            <div className="rmain">
                <div className="rhed">
                    <p>Ready to order?</p>
                </div>
                <div className="rdis">
                    <p>Dishes worth traviling for,made just a few streets away.</p>
                </div>
                <div className="zip">
                    <input type="search" placeholder="Enter your ZIP code" />
                    <button className="rtobtn">Find Food</button>
                </div>
            </div>
            <div className="last">
               <div>
               <p><label>Become a shef.</label>Be Your own boss and earn money on your own schedule.</p>
               </div>
               <div>
                   <button className="labtn">Get started</button>
               </div>
            </div>
        </div>
    )
}

export default rto;