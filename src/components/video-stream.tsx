"use client";

import React, { useRef, useState } from "react";
import { Button, Box } from "@mui/material";

export const VideoStream = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [streaming, setStreaming] = useState(false);

  const startVideo = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreaming(true);
        }
      } catch (err) {
        console.error("Error accessing camera: ", err);
      }
    }
  };

  const stopVideo = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setStreaming(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%", // Takes up the full width of the parent container
        height: "100%", // Takes up the full height of the parent container
        position: "relative",
        border: !streaming ? "2px dashed grey" : "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: !streaming ? "#f0f0f0" : "transparent",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the video fills the container and maintains aspect ratio
        }}
      ></video>
      <Box mt={2} sx={{ position: "absolute", bottom: 16 }}>
        {!streaming ? (
          <Button variant="contained" color="primary" onClick={startVideo}>
            Start Video
          </Button>
        ) : (
          <Button variant="contained" color="secondary" onClick={stopVideo}>
            Stop Video
          </Button>
        )}
      </Box>
    </Box>
  );
};
