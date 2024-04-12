import Image from "next/image";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Hero, Intro } from "@/features/home";
export default function Home() {
  return (
    <main>
      <Hero />
      <Box sx={{ width: "1124px", margin: "auto" }}>
        <Intro />
      </Box>
    </main>
  );
}
