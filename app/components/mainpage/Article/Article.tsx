"use client";
import React, { useState } from "react";
import { TypeNews, news } from "./articles";
import "./Article.css"
import Image from 'next/image'
import arrow from "@/app/img/arrow.png"

const  Article: React.FC = () =>{
    const [newsData] = useState<TypeNews[]>(news);
  return (
    <div className="articles" >
            <div className="heading">
                <h2>Articles & News</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
            </div>
        <div className="articles2" >
        {newsData.map((news) => (
      <div key={news.id}className="article">
         <Image src={news.image} alt="" />
         <div className="info">
            <h3>{news.title}</h3>
            <div className="down">
                <p>{news.date}</p>
                <div className="room-bg">
                            <div className="room-arrow">
                                </div>
                                </div>
            </div>
         </div>
      </div>
       ))}
      </div>
    </div>
  )
}

export default Article
