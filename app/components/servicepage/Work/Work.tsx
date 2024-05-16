"use client";
import React, { useState } from "react";
import { TypeWP, work } from './workplan';
import './Work.css';
import Image from 'next/image'
const Work: React.FC = () => {
    const [wpData] = useState<TypeWP[]>(work);

    return (
        <div className="work-plans">
            <div className="w-con">
                <h2>How We Work</h2>
                <p>It is a long established fact  will be distracted.
                    Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="works-plans2">
                {work.map((work, index) => (

                    <div key={work.id} className="works-plan">
                        {index % 2 === 0 ? (
                            <>                   <div className="works-plans-img">
                                 <Image src= {work.image}alt=""/>
                            </div>
                                <div className="works-concept">
                                <h3>{work.title}</h3>
                                    <div className="works-sub">
                                     
                                        <div className="work-icon">
                                        <Image src={work.icon} alt=""/>
                                        </div>
                                        <div className="work-num">
                                        <Image src={work.num} alt=""/>
                                        </div>
                                    </div>
                                    <div className="works-text">
                                   <p>{work.description}</p> 
                                    </div>
                                </div>
                            </>
                        ) : 
                            <>
                               <div className="works-concept">
                               <h3>{work.title}</h3>
                                    <div className="works-sub">
                                        <div className="work-icon">
                                        <Image src= {work.icon}alt=""/>
                                        </div>
                                        <div className="work-num">
                                        <Image src={work.num}alt=""/>
                                        </div>
                                    </div>
                                    <div className="works-text">
                                    <p>{work.description}</p>
                                    </div>
                                </div>
                                <div className="works-plans-img">
<Image src= {work.image}alt=""/>
                                </div>
                            </>
                         }
                </div>
                
                ))}
            </div>
        </div>
    )
}

export default Work