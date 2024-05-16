"use client";
import React, { useState } from "react";
import { TypeComment, comments } from "./comments";
import "./Testimonial.css"
import Image from "next/image";
const Testimonial: React.FC = () => {
    const [commentsData] = useState<TypeComment[]>(comments);
    return (
        <div className="testims">
            <div className="thinks">
            <h2>What the People Thinks
 About Us</h2>
            </div>
 
 <div className="testims2">
            {commentsData.map((comments) => (
                <div key={comments.id} className="testim">
                    <div className="human">
                        <Image src={comments.image} alt="" />
                        <div className="facts">
                            <div className="name">
                                <h4>{comments.name}</h4>
                                <p>{comments.place}</p>
                            </div>
                        </div>
                        </div>
                        <div className="comment">
                            <p>{comments.description}</p>
                        </div>
                  
                    </div>
              ))}
</div>
</div>

            )
}

            export default Testimonial