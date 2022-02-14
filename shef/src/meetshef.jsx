import React from "react";
import mimg from './images/msfimg1.jpg'
import mimg1 from './images/msfimg2.jpg'
import './meetshef.css'

function meet() {
    return (
        <div>
            <div className="memain">
                <div className="meting">
                    <img src={mimg1} alt="" />
                </div>
                <div className="meshef">
                    <h1 className="h11">Meet the shefs</h1>
                    <img src={mimg} alt="" />
                    <p className="mename">Pranavi Sharma</p>
                    <p className="detl">I  was born and raised in Tehran, Iran, where I began learning traditional recipes from my grandmother. I'm honored to share our family recipes at your kitchen table, and I hope they'll fill you with a feeling of home.</p>
                    <button className="mbtn">See shefs in your area</button>
                </div>
            </div>
            <div className="mera">
                <div className="mecon">
                    <p className="mcon">1M+</p>
                    <p className="mcon1">Over 1,000,000 Authentic <br /> homemade dishes served</p>
                </div>
                <div className="mecon">
                    <p className="mcon">4.8/5</p>
                    <p className="mcon1">Average shef ratting from <br /> thousands of happy customers</p>
                </div>
                <div className="mecon">
                    <p className="mcon">100%</p>
                    <p className="mcon1">All shefs are food safaty certified</p>
                </div>
                
            </div>
        </div>
    )
}

export default meet