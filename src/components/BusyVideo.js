// components/CustomVideo.js
"use client";
import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CustomVideo = ({ src, type }) => {
    console.log(src)
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [inView]);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleLoadedData = () => {
    console.log('loaded');
    setIsLoaded(true);
  }

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "100%", height: "auto" }}
    >
         <video
         ref={videoRef}
        muted
        autoPlay
        className="w-full h-[200px] pt-5 md:h-[400px] rounded-md"
        onLoadedData={() => {
          console.log('loaded');
          setIsLoaded(true);
        }}
      >
        <source src={"https://res.cloudinary.com/dv5v8l2lr/video/upload/v1722798162/Fraiche_with_text_2_tlkjdb.mp4"} type={"video/mp4"} />
        Your browser does not support the video tag.
      </video>
    
    </div>
  );
};

export default CustomVideo;
