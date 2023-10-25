import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Divider } from "@mui/material";

export default function Header() {
  return (
    <Box component={"header"} className="">
      <Container maxWidth="lg" className="py-5">
        <Link href="/">
          <Image
            className="mx-auto dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={100}
            height={37}
            priority
          />
        </Link>
      </Container>
      <Divider />
    </Box>
  );
}
