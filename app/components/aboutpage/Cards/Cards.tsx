"use client";
import React, { useState } from "react";
import { TypeCard, cards } from "./card";
import './Card.css'
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
const  Cards: React.FC = () => {
const [cardsData] = useState<TypeCard[]>(cards);
  return (
    <div className='cards'>
        <h2>What the People Thinks About Us</h2>
        <div className="flip-cards">
         {cardsData.map((cards) => (
        <div key={cards.id}className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <Image src={cards.image} alt="Avatar" style={{width:'283.55px', height:'433px'}} />
    </div>
    <div className="flip-card-back">
        <div className="up">
      <h1>{cards.name}</h1> 
      <p>{cards.prof},{cards.country}</p> 
      </div>
      <div className="horisontal">
                        <ul>
                            <li><FaFacebookF /></li>
                            <li><FaTwitter /></li>
                            <li><FaLinkedinIn /></li>
                            <li><FaInstagram /></li>
                        </ul>
                    </div>
      <div className="down">
      <p>{cards.phone}</p>
      <p>{cards.mail}</p>
      </div>
    </div>
  </div>
</div>
))}
</div>
    </div>
  )
}

export default Cards