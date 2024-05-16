"use client";
import React, { useState } from "react";
import { TypeService, services } from "./serv";
import "@/app/components/mainpage/Work/Work.css";
import './Services.css'
const Services: React.FC = () => {
  const [serviceData] = useState<TypeService[]>(services);

  return (
    <div className="works">
      {serviceData.map((services) => (
        <div key={services.id} className="work">
                <div className="title">
                  <h2>{services.title}</h2>
                </div>
                <div className="description">
                  <p>{services.description}</p>
                </div>
                <div className="more"><p><a href='/services_single'>Read more</a></p></div>

        </div>
      ))}
    </div>
  );
};

export default Services;