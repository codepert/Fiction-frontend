import React, { FC } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
export type SocialProps = {};

export const Social: React.FC<SocialProps> = ({}) => {
  return (
    <Box sx={{ display: "flex", columnGap: "24px" }} pt={"8px"}>
      <IconButton aria-label="facebook">
        <Facebook />
      </IconButton>
      <IconButton aria-label="twitter">
        <Twitter />
      </IconButton>
      <IconButton aria-label="instragram">
        <Instagram />
      </IconButton>
    </Box>
  );
};
