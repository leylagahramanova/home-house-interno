"use client"
import React, { useState } from "react";
import Link from 'next/link'; // Import Link from next.js
import './Rooms.css'
import '@/app/components/mainpage/Project/Project.css'
import arrow from "@/app/img/arrow.png"
import Image from 'next/image'
import { TypeCategory, categories } from  "./room";
const Rooms: React.FC = () => {
    const [roomData] = useState<TypeCategory[]>(categories);
    
  return (
    <div className="interior">
        <div className="rooms">
        {categories.map((category) => (
        <div key={category.id} className="room-category">
  <div className="room">
  {category.rooms.map((room) => (
                    <div key={room.id} className="project" >
                        <Image src={room.room} alt="" />
                        <div className="card">
                            <div className="category">
                                <h3>{room.title}</h3>
                                <p>{room.category}</p>
                            </div>
                           
                            <Link href={`/project/${room.id}`} passHref>
                            <div className="room-bg">
                            <div className="room-arrow">
                                </div>
                                </div>
                                </Link>
                           
                        </div>
                    </div>
                ))}
</div>
            </div>
               ))}
        </div>
    </div>
  )
}

export default Rooms