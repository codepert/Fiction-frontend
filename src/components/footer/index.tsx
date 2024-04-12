import React, { FC } from "react";
import { Logo } from "@/components/footer/Logo";
import { Links } from "@/components/footer/Links";
import { Newsletter } from "@/components/footer/Newsletter";
import { Copyright } from "@/components/footer/Copyright";
import { Social } from "@/components/footer/Social";

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
      <Logo />
      <Links />
      <Newsletter />
      <Copyright />
      <Social />
    </>
  );
};
