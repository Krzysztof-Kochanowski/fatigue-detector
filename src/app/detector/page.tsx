"use client";

import React from "react";
import { Box, Card, CardHeader, IconButton } from "@mui/material";
import { VideoStream } from "../../components/video-stream";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Detector = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full height of the viewport for centering
        padding: 2, // Optional padding around the container
      }}
    >
      <Card
        sx={{
          width: "100%", // Ensure it takes the full width available
          height: "100%", // Prevents the card from exceeding the viewport height
          margin: "auto", // Centers the card naturally with MUI
        }}
      >
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Fatigue Detection"
        />
        <VideoStream />
      </Card>
    </Box>
  );
};

export default Detector;
