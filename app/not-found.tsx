

import React from 'react'
import vector from "@/app/img/Vector.png";
import error from '@/app/img/error.png'
import Image from 'next/image';
import "@/app/components/errorpage/Error.css"
import '@/app/components/button.css'
import Link  from 'next/link'
export default function NotFound() {
    return (
        <div className="error">
            <div className="error-text">
                <h1>404</h1>
                <p><b>We are sorry, but the page you requested was not found</b></p>
                <div className="button" style={{marginBottom:'3rem'}}><Link href="/">Back to Home</Link> <Image src={vector} alt="" /></div>
            </div>
            <div className="error-image">
                <Image src={error} alt="" />
            </div>
        </div>
    )
}