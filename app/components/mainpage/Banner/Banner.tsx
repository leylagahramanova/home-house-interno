import React from 'react'
import '@/app/components/button.css'
import "./Banner.css"

function Banner() {
  return (
    <div className='mainbanner'>
        <div className="text">
            <h1>Let Your Home 
Be Unique</h1>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page 
when lookings at its layouts the points of using 
that it has a more-or-less normal.</p>
            <button>
               <a>Get Free Estimate</a> 
            </button>
        </div>
    </div>
  )
}

export default Banner