"use client"
import React, { useEffect, useState } from 'react';
import { TypeRoom, categories } from "@/app/components/projectpage/Rooms/room";
import Banner from '@/app/components/projectsinglepage/Banner/Banner';
import './project.css';
import { FaSearchPlus } from 'react-icons/fa';
import Image from 'next/image';

// Define the ImageMagnifier component
function ImageMagnifier({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifieWidth = 100,
  zoomLevel = 1.5
}: {
  src: string;
  width?: string;
  height?: string;
  magnifierHeight?: number;
  magnifieWidth?: number;
  zoomLevel?: number;
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width
      }}
    >
      <Image
        src={src}
        style={{ height: height, width: width }}
        onMouseEnter={(e) => {
          // update image size and turn-on magnifier
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          // close magnifier
          setShowMagnifier(false);
        }}
        alt={"img"}
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",

          // prevent magnifier blocks the mousemove event of img
          pointerEvents: "none",
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          // move element center to cursor pos
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: "1", // reduce opacity so you can verify position
          border: "1px solid lightgray",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          //calculate position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
        }}
      ></div>
    </div>
  );
}

const ProjectPage: React.FC = () => {
    const [roomData, setRoomData] = useState<TypeRoom | undefined>(undefined);
    const [isZoomed, setIsZoomed] = useState<boolean>(false);

    useEffect(() => {
        const currentPath = window.location.pathname;
        const roomId = currentPath.split('/').pop();

        // Find the room data based on the ID
        const foundRoomData = categories.flatMap(category => category.rooms).find(room => room.id.toString() === roomId);

        // Set the room data in state
        setRoomData(foundRoomData);
    }, []);

    const handleZoomToggle = () => {
        setIsZoomed(!isZoomed);
    };

    return (
        <div>
            <Banner />
            <div className="interior">
                {roomData && (
                    <div className="room">
                        <div className="room-content">
                            <p><b>Client</b> {roomData.client}</p>
                            <p><b>Category</b> {roomData.category}</p>
                            <p><b>Tags</b> {roomData.tags}</p>
                            <p><b>Date</b> {roomData.date}</p>
                        </div>

                        <div className="detail-text">
                            <h2>{roomData.title}</h2>
                            <p>{roomData.detail}</p>
                        </div>

                        <div className="image-container" onClick={handleZoomToggle}>
                            <ImageMagnifier src={roomData.room}   />
                           
                            {isZoomed && (
                                <div className="popup-image" onClick={handleZoomToggle}>
                                    <span>&times;</span>
                                    <Image src={roomData.room}  className="responsive" alt="" />
                                </div>
                            )} 
                            <div className="zoom-icon" onClick={handleZoomToggle}>
                                <FaSearchPlus />
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectPage;
