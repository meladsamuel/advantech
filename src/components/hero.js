import * as React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Image from "next/image";
export default function Hero() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: "url('/images/advantech_bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Container sx={{ paddingTop: 20 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ color: "primary.light" }}
        >
          <b>
            Safety First <br />
            with
            <Box component="span" sx={{ color: "primary.main" }}>
              {" "}
              ADVANTECH
            </Box>
          </b>
        </Typography>
        <Typography variant="h4" component="h2" color="primary.light">
          ADVANTECH for Engineering Services
        </Typography>
      </Container>
    </Box>
  );
}
