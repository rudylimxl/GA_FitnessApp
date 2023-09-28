import React from "react";
import Navbar from "../components/test/Navbar";
import { Box, Typography } from "@mui/material";

const Welcome = () => {
  return (
    <Box>
      <Navbar loggedIn={false} />
      <img
        width="100%"
        src="https://storage.googleapis.com/bkr-fitapp/1strongerbg"
      ></img>
    </Box>
  );
};

export default Welcome;
