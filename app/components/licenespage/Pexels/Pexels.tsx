import React from 'react'
import '@/app/components/licenespage/Unsplash/Unsplash.css'
import Image from 'next/image'
import pex1 from "@/app/img/pex1.png"
import pex2 from "@/app/img/pex2.png"
import pex3 from "@/app/img/pex3.png"
function Pexels() {
  return (
    <div className="unsplash">
    <h2>Pexels</h2>
<p>Image 1, Image 2, Image 3, Image 4, Image 5, 
    Image 6, Image 7, Image 8, Image 9, 
    Image 10, Image 11, Image 12.</p>
<div className="unsplash-photo">
    <Image src={pex1} alt=""/>
    <Image src={pex2} alt=""/>
    <Image src={pex3} alt=""/>
</div>
</div>
  )
}

export default Pexels
