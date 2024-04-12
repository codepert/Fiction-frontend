import React, { FC } from "react";
import { Box, List, ListItem, Link } from "@mui/material";
import { COLORS } from "@/utils/colors";
export type NavProps = {};

export const Nav: React.FC<NavProps> = ({}) => {
  return (
    <List
      sx={{
        display: "flex",
        paddingLeft: "23px",
        paddingTop: "12px",
        "&  li": {
          padding: "4px 8px!important",
        },
        "& a": {
          textDecoration: "none",
          fontSize: 14,
          fontFamily: "poppins",
          color: COLORS.grey,
          "&:hover": {
            cursor: "pointer",
          },
        },
      }}
    >
      <ListItem>
        <Link>Home</Link>
      </ListItem>
      <ListItem>
        <Link>About</Link>
      </ListItem>
      <ListItem>
        <Link>Benefits</Link>
      </ListItem>
      <ListItem>
        <Link>Tokenomics</Link>
      </ListItem>
      <ListItem>
        <Link>Technology</Link>
      </ListItem>
      <ListItem>
        <Link>Team</Link>
      </ListItem>
      <ListItem>
        <Link>Community</Link>
      </ListItem>
      <ListItem>
        <Link>Partners</Link>
      </ListItem>
    </List>
  );
};
