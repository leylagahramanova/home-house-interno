//app/component/profpage/Profs/Prof.tsx
"use client"
import React, { useState } from "react";
import { TypeProf, profs } from "./profs";
import "./Profs.css";

import Image from "next/image";
import Link from 'next/link';
const Prof: React.FC = () => {
    const [profData] = useState<TypeProf[]>(profs);
    
    return (
        <div className="profs">
            {profData.map((prof) => (
                <div key={prof.id} className="prof">
                    <div className="prof-man">
                        <Image src={prof.image} alt=""/>
                        <div className="prof-sub">
                        <div className="prof-title">
    <Link href={`/professionals/${prof.id}`} passHref>
        <h2>{prof.name}</h2>
    </Link>
</div>
                            <div className="prof-info">
                                <p>{prof.profession},</p>
                                <p>{prof.country}</p>
                            </div>
                            <div className="prof-icon">
                                {prof.links.facebook && (
                                    <a href={prof.links.facebook.face} target="_blank" rel="noopener noreferrer">
                                        <Image src={prof.links.facebook.icon} alt="Facebook Icon"/>
                                    </a>
                                )}
                                {prof.links.twitter && (
                                    <a href={prof.links.twitter.face} target="_blank" rel="noopener noreferrer">
                                        <Image src={prof.links.twitter.icon} alt="Twitter Icon"/>
                                    </a>
                                )}
                                {prof.links.linkedin && (
                                    <a href={prof.links.linkedin.face} target="_blank" rel="noopener noreferrer">
                                        <Image src={prof.links.linkedin.icon} alt="LinkedIn Icon"/>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Prof;