import * as React from "react";
import Typography from "@mui/material/Typography";
import Footer from "../src/components/footer";
import ElevateAppBar from "../src/components/appBar";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Header from "../src/components/header";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Form from "../src/components/form";
export default function Contect() {
  return (
    <>
      <ElevateAppBar />
      <Header>
        <Toolbar />
        <Container>
          <Typography
            gutterBottom
            variant="h2"
            component="h1"
            color="primary.main"
          >
            Contact Us
          </Typography>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            color="primary.main"
          >
            For Inquiries or Questions
          </Typography>
        </Container>
      </Header>
      <Container sx={{ paddingTop: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Form />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ p: 2, display: { xs: "none", md: "block" } }}
          >
            <Box sx={{ position: "relative", height: "100%", mt: 1 }}>
              <Image
                sx={{ m: 2, borderRadius: 1 }}
                src="/images/advantect_customer_service.jpg"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
