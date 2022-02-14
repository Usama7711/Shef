import React from "react";
import timg1 from './images/timg1.jpg'
import timg2 from './images/timg2.jpg'
import timg3 from './images/timg3.jpg'
import './testi.css'

function testi() {
    return (
        <div>
            <div className="tmain">
                <div className="thed">
                    <p className="tmane">Testimonials</p>
                </div>
                <div className="tcon">
                    <div className="tdis">
                        <p className="tp">
                            I just ate this a few minutes age and <br /> its changed mu life. it's as good as <br />going to youys Pakistani aunty's <br />housefor dinner.
                        </p>
                        <img src={timg1} alt="" />
                        <p className="timgn">
                            CYNTHIA C.
                        </p>
                    </div>
                    <div className="tdis">
                        <p className="tp">
                            Super traditionsl dumplings that <br /> remaind me of my grandma's.
                        </p>
                        <img src={timg2} className="tma"/>
                        <p className="timgn tna">
                            ALLIE E.
                        </p>
                    </div>
                    <div className="tdis">
                        <p className="tp">
                            I am really picky about my food and <br />any purchase.I am 200% satisfied <br />with Shef.Food was awasome. <br />Quantity was really good
                        </p>
                        <img src={timg3} alt="" />
                        <p className="timgn">
                            SWAATI B.
                        </p>
                    </div>
                </div>
            </div>
            <div className="whymain">
                <div className="whname">
                    <p className="whn">Why try Shef ?</p>
                </div>
                <div className="whcon">
                    <div className="whhe">
                        <p className="wh">
                            Support local cooks
                        </p>
                        <p className="wdis">
                            Unlike resturents,you know <br />exactly who is preparing your <br />food
                        </p>
                    </div>
                    <div className="whhe whed">
                        <p className="wh">
                            Explore new cultures
                        </p>
                        <p className="wdis">
                            Reconnet with your heritafe or <br /> discover new cultures through <br />traditional homemande dishes
                        </p>
                    </div>
                    <div className="whhe">
                        <p className="wh">
                            Starting at $7
                        </p>
                        <p className="wdis">
                            Enjoy real homemade food at a <br /> reasoable price,without <br />sacificing time
                        </p>
                    </div>
                </div>
                <button className="whbtn">Explore meals</button>
            </div>
        </div>
    )
}

export default testi;