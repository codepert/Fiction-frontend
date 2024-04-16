"use client";
import React, { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";

import { COLORS } from "@/utils/colors";
import { partnerData } from "@/utils/contents";

import { PartnerImg } from "./parnterImage";

export type BenefitProps = {};

export const Partner: React.FC<BenefitProps> = ({}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FCFCFD",
        padding: {
          xs: "0 10px",
          sm: "0 10px",
          md: "0 10px",
        },
      }}
      mt={"134px"}
    >
      <Typography
        variant="subtitle1"
        sx={{ textAlign: { md: "center", xs: "left" }, color: COLORS.black }}
        my={5}
      >
        Partners
      </Typography>
      <Grid
        container
        columns={{ xs: 2, sm: 6, md: 12, lg: 12 }}
        spacing={3}
        sx={{ marginTop: "32px" }}
      >
        {partnerData.map((item, i) => {
          return (
            <Grid item key={i} lg={2} md={2} sm={2} xs={1}>
              <PartnerImg src={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
