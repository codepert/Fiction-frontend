"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
// import { responsiveParagraph } from "./styles.css";
import { responsiveParagraph } from "./styles.css";

import { COLORS } from "@/utils/colors";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  getSectionAnimation,
  projectVariants,
} from "@/styles/animations";
export type IntroProps = {};

export const Intro: React.FC<IntroProps> = ({}) => {
  return (
    <Box
      id="about"
      sx={{
        padding: {
          xs: "50px 10px",
          sm: "50px 10px",
          md: "134px 10px",
        },
      }}
    >
      <Grid container columns={{ sm: 2, xs: 1, md: 8, lg: 12 }} spacing={3}>
        <Grid item xs={1} sm={2} md={4} lg={6}>
          {/* <motion.section {...getSectionAnimation}> */}

          <motion.div
            className="group"
            variants={slideIn({ delay: 0.8 + 0 / 10, direction: "down" })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Box
              sx={{
                color: COLORS.black,
              }}
            >
              <Typography variant="subtitle1" className={responsiveParagraph}>
                What is Wyler
              </Typography>
              <Typography variant="subtitle1" className={responsiveParagraph}>
                Chain
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="body1" className={responsiveParagraph}>
                Wyler Chain is a revolutionary Layer 3 blockchain network
              </Typography>
              <Typography variant="body1" className={responsiveParagraph}>
                designed to propel the future of decentralized applications
              </Typography>
              <Typography variant="body1" className={responsiveParagraph}>
                (dApps). By building on top of established Layer 1 and Layer 2
              </Typography>
              <Typography variant="body1" className={responsiveParagraph}>
                solutions, Wyler Chain overcomes scalability limitations and
                offers
              </Typography>
              <Typography variant="body1" className={responsiveParagraph}>
                enhanced security for a robust foundation. Leveraging the power
              </Typography>
              <Typography variant="body1" className={responsiveParagraph}>
                of Polkadot and Substrate, Wyler Chain unlocks a world of
              </Typography>
              <Typography variant="body1" className={responsiveParagraph}>
                interoperability and customization, empowering developers to
              </Typography>
              <Typography variant="body1" className={responsiveParagraph}>
                craft groundbreaking dApps.
              </Typography>
            </Box>
            {/* </motion.section> */}
          </motion.div>
        </Grid>
        <Grid item xs={1} sm={2} md={4} lg={6}>
          {/* <motion.section {...getSectionAnimation}> */}
          <motion.div
            className="group"
            variants={slideIn({ delay: 0.8 + 1 / 10, direction: "down" })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Image
              src={"/intro-logo.svg"}
              width={500}
              height={500}
              alt="intro"
              layout="responsive"
              sizes="(max-width: 768px) 80% 80%"
            />
            {/* </motion.section> */}
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};
