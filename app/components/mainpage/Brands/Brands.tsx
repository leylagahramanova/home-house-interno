"use client";
import React, { useState } from "react";
import "./Brand.css"
import Image from 'next/image';
import one from '@/app/img/01.svg'
import two from '@/app/img/02.svg'
import three from '@/app/img/03.svg'
import four from '@/app/img/04.svg'
import five from '@/app/img/05.svg'
const Testimonial: React.FC = () => {
   return (
        <div className="brands">
       <div className="brand">
        <Image src={one} alt=""/>
       </div>
       <div className="brand">
       <Image src={two} alt=""/>
       </div>
       <div className="brand">
       <Image src={three} alt=""/>
       </div>
       <div className="brand"> <Image src={four} alt=""/></div>
       <div className="brand">
       <Image src={five} alt=""/>
       </div>
</div>

            )
}

            export default Testimonial