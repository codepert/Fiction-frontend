"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { responsiveParagraph } from "./style.css";
import { COLORS } from "@/utils/colors";
import { benefitsType } from "@/types";

export type BenefitCardProps = benefitsType;

export const BenefitCard: React.FC<BenefitCardProps> = ({ title, desc }) => {
  return (
    <Box>
      <Box
        sx={{ borderBottom: `1px solid #E6E8EC` }}
        pt={"20px"}
        pb={"20px"}
        mb={"38px"}
      >
        <Image src="/benefit-icon.svg" width={40} height={40} alt="be" />
      </Box>
      {title.split("\n").map((item, i) => {
        return (
          <Typography variant="h3" key={i} sx={{ color: COLORS.black90 }}>
            {item}
          </Typography>
        );
      })}
      <Box sx={{ color: COLORS.grey }} mt={"16px"}>
        {desc.map((item, i) => {
          return (
            <Typography variant="h5" key={i} className={responsiveParagraph}>
              {item}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
