import React from 'react'
import '@/app/components/button.css'
import Image from 'next/image'
import end from '@/app/img/end.png'
import concept from '@/app/img/concept.png'
import vector from "@/app/img/Vector.png";
import './Result.css'

function Result() {
  return (
    <div className="result">
        <div className="res-concept">
            <div className="res-sub">
                <h2>What We Do</h2>
                <p>It is a long established 
   fact that a reader will be 
   distracted by the of 
   readable content of a page 
   when lookings at its layouts the points of using that 
   it has a more-or-less normal.</p>
                <button >
                    <a>Our Concept</a> <Image id="result" src={vector} alt="" />
                </button>
            </div>
            <div className="res">
            <Image src={concept} alt=""/>
            </div>
        </div>
        <div className="res-concept">
            <div className="res">
        <Image src={end} alt=""/>
        </div>
            <div className="res-sub">
                <h2>The End Result</h2>
                <p>IIt is a long established 
   fact that a reader will be 
   distracted by the of 
   readable content of a page 
   when lookings at its layouts the points of using that 
   it has a more-or-less normal.</p>
                <div className="button" >
                    <a>Our Portfolio</a> <Image id="result" src={vector} alt="" />
                </div>
            </div>
          
        </div>
    </div>
  )
}

export default Result
