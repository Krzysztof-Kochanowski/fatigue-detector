"use client";

import React from "react";
import { Box, Typography, Switch, FormControlLabel } from "@mui/material";

const Options = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Options
      </Typography>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Enable Detection Alerts"
      />
      <FormControlLabel control={<Switch />} label="Save Video Recordings" />
    </Box>
  );
};

export default Options;
