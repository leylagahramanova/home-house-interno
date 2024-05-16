import React from 'react'
import Image from 'next/image'
import './Quotes.css'
import quotes from '@/app/img/Quotes.png'
function Quotes() {
  return (
    <div className="quotes">
      <Image src={quotes} alt=""/>
    </div>
  )
}

export default Quotes
