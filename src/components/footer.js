import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <Container sx={{ paddingTop: 20 }}>
        <Divider />

        <Grid container spacing={5} sx={{ paddingTop: 10 }}>
          <Grid item xs={14} md={3} sx={{ position: "relative" }}>
            <Image
              src="/images/advantech_logo.jpg"
              layout="responsive"
              width="216.5"
              height="176"
            />
          </Grid>

          <Grid item xs={14} md={3}>
            <Typography variant="h5" gutterBottom component="h6">
              Head Office
            </Typography>
            <Typography>+20 127-265-8400</Typography>
            <Typography>+20 128-099-9180</Typography>
            <Typography>+20 128-099-9186</Typography>
            <Typography>0223570401</Typography>
            <Typography>sales@advanteches.com</Typography>
          </Grid>
          <Grid item xs={14} md={3}>
            <Typography variant="h5" gutterBottom component="h6">
              Social
            </Typography>
            <Typography>Facebook</Typography>
          </Grid>
          <Grid item xs={14} md={3}>
            <Typography variant="h5" gutterBottom component="h6">
              Inquiries
            </Typography>
            <Typography>
              For any inquiries, questions or commendations, please call:
            </Typography>
            <Typography>+20 127-265-8400</Typography>
            <Typography>+20 128-099-9180</Typography>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ paddingTop: 6, paddingBottom: 2 }}>
        <Typography align="center" paragraph>
          © 2021 by ADVANTECH for Engineering Services.
        </Typography>
      </Container>
    </>
  );
};
export default Footer;
