"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

const Archive = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Archive
      </Typography>
      <Typography>
        Here you can view previously recorded detection results or video logs.
      </Typography>
    </Box>
  );
};

export default Archive;
