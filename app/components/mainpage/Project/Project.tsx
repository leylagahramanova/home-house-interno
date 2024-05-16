"use client";
import React, { useState } from "react";
import { TypeRoom, rooms } from "./projects";
import Image from 'next/image'
import "./Project.css"
import arrow from "@/app/img/arrow.png"
import '@/app/components/projectpage/Rooms/Rooms.css'
const Project: React.FC = () => {
    const [roomsData] = useState<TypeRoom[]>(rooms);

    return (
        <div className="projects">
            <div className="heading1">
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
            </div>
            <div className="projects2">
                {roomsData.map((room) => (
                    <div className="project" key={room.id}>
                        <Image src={room.image} alt="" />
                        <div className="card">
                            <div className="category">
                                <h3>{room.name}</h3>
                                <p>{room.category}</p>
                            </div>
                            <div className="room-bg">
                            <div className="room-arrow">
                                </div>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
