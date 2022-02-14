import React from "react";
import './navbar.css';

function navbar(){
    return(
        <div>
            <div>
                <p className="hed">Free Delivery on All Orderes Over $25</p>
            </div>
            <div className="main">
                <div className="logo">
                    <a href="" className="log">shef</a>
                </div>
                <div className="login">
                    <a href="" className="p1">Become a Shef</a>
                    <button>Log in</button>
                </div>
            </div>
        </div>
    )
}

export default navbar;