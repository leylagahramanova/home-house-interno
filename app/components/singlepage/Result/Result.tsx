import React from 'react'
import "./Result.css"
import "@/app/components/button.css"
import Image from 'next/image'
import result from "@/app/img/result-img.png"
function Result() {
  return (
    <div className="result">
      <Image src={result}alt=""/>
      <div className="result-text">
        <h2>We love design.That is how we got here.</h2>
        <p>It is a long established fact that a reader will be 
            distracted by the of readable content .</p>
        <button>
            <a>Our Portfolio</a>
        </button>
      </div>
    </div>
  )
}

export default Result
