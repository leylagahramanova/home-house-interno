import React from 'react'
import './Unsplash.css'
import Image from 'next/image'
import uns1 from "@/app/img/uns1.png"
import uns2 from "@/app/img/uns2.png"
import uns3 from "@/app/img/uns3.png"
import './Unsplash.css'
function Unsplash() {
  return (
    <div className="unsplash">
        <h2>Unsplash</h2>
    <p>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17.</p>
    <div className="unsplash-photo">
        <Image src={uns1} alt=""/>
        <Image src={uns2} alt=""/>
        <Image src={uns3} alt=""/>
    </div>
    </div>
  )
}

export default Unsplash