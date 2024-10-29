"use client";

import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
    >
      <Typography
        variant="h6"
        sx={{ padding: 2, margin: 0, textAlign: "center" }}
        gutterBottom
      >
        Menu
      </Typography>

      <Divider></Divider>

      <List>
        <ListItem component="a" href="/">
          <ListItemText primary="Detector" />
        </ListItem>
        <ListItem component="a" href="/archive">
          <ListItemText primary="Archive" />
        </ListItem>
        <ListItem component="a" href="/options">
          <ListItemText primary="Options" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
