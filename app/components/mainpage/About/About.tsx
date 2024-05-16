import React from 'react'
import "./About.css"
import '@/app/components/button.css'
import contactimg from '@/app/img/contact-img.png'
import call from '@/app/img/call.png'
import Image from 'next/image'
function About() {
    return (
        <div className="about">
            <div className="content">
                <div className="sub-content">
                    <h2>We Create The Art
Of Stylish Living
Stylishly</h2>
                    <p>It is a long established fact that a reader will be distracted by the of readable content of a page 
when lookings at its layouts the points of using 
that it has a more-or-less normal.</p>
                </div>
                <div className="call">
                    <div className="icon">
                    <Image src={call} alt=""/>
                    </div>
                    <div className="contact">
<div className='number'>
    <p>012345678</p>
</div>
<div className='call-us'>
    <p>Call Us Anytime</p>
</div>
                    </div>
                </div>
                <button>
                    <a>Get Free Estimate</a>
                </button>
            </div>
            <div className="contact-img">
                <Image src={contactimg} alt=""/>
            </div>
        </div>
    )
}

export default About