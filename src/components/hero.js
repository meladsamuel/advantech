import * as React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Index() {
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
      <Box
        sx={{
          top: 0,
          height: "100%",
          width: "100%",
          bgcolor: "#23283280",
          position: "absolute",
        }}
      >
        <Container sx={{ paddingTop: 20 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ color: "primary.light" }}
          >
            <b>
              Safty First <br />
              with
              <Box component="span" sx={{ color: "primary.main" }}>
                {" "}
                ADVTECH
              </Box>
            </b>
          </Typography>
          <Typography variant="h4" component="h2" color="primary.light">
            ADVANTECH for Engineering Services
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
