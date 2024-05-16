"use client";
import React, { useState } from "react";
import { TypeWork, works } from "./works";
import "./Work.css";
const Work: React.FC = () => {
  const [worksData] = useState<TypeWork[]>(works);

  return (
    <div className="works">
      {worksData.map((works) => (
        <div key={works.id} className="work">
                <div className="title">
                  <h2>{works.title}</h2>
                </div>
                <div className="description">
                  <p>{works.description}</p>
                </div>
                <div className="more"><p><a href={works.link}>Learn more</a></p></div>

        </div>
      ))}
    </div>
  );
};

export default Work;