import React from 'react'
import vector from "@/app/img/Vector.png";
import blackvector from "@/app/img/blacvector.png"
import "@/app/components/button.css";
import Image from 'next/image';
import './Prices.css'
function Prices() {
    return (
        <div className="prices">
            <div className="price">
                <div className="price-title">
                    <h3>Design advices</h3>
                    <div className="price-number">
                        <p>$<span>29</span> /month</p></div>
                </div>
                <div className="brownline"></div>

                <div className="price-content">
                    <p>General pving space advices </p>
                    <p>Rennovation advices</p>
                    <p>Interior design advices</p>
                    <p> Furniture reorganization</p>
                    <p> Up to 5 hours meetings</p>
                </div>
                <div className="button" ><a>Get Stated</a> <Image src={blackvector} alt="" /></div>

            </div>
            <div className="price">
                <div className="price-title">
                    <h3>Complete interior </h3>
                    <div className="price-number">
                        <p>$<span>39</span> /month</p></div>

                </div>
              
                <div className="blackline">
                <div className="plans">
                    <p>Get more plans</p>
                </div>
                </div>
             
                {/* <div className="blackplans">
               
                <div className="blackline">
                    </div>
                </div> */}
                
                <div className="price-content">

                    <p>Complete home redesign</p>
                    <p>Interior and exterior works</p>
                    <p>Modular interior planning</p>
                    <p>Kitchen design</p>
                    <p>Garages organization</p>

                </div>
                <button><a>Get Stated</a> <Image src={vector} alt="" /></button>

            </div>
            <div className="price">
                <div className="price-title">
                    <h3>Furniture design</h3>
                    <div className="price-number">
                        <p>$<span>59</span> /month</p></div>

                </div>
                <div className="brownline"></div>
                <div className="price-content">
                    <p>Furniture for pving room</p>
                    <p>Furniture refurbishment</p>
                    <p> Sofas and amchairs </p>
                    <p>Tables and chairs</p>
                    <p>Kitchens</p>
                </div>
                <div className="button" ><a>Get Stated</a> <Image src={blackvector} alt="" /></div> </div>
        </div>
    )
}

export default Prices