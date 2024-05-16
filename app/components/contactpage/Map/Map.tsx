import React from 'react'
import map from "@/app/img/Map.png"
import Image from 'next/image'
import './Map.css'
function Map() {
  return (
    <div className="map">
    <Image src={map}priority={true} alt=""/>
    </div>
  )
}

export default Map
