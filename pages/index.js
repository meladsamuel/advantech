import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "../src/components/appBar";
import HeroSection from "../src/components/hero";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
export default function Index() {
  return (
    <Box sx={{ height: "100%" }}>
      <AppBar />
      <HeroSection />
      <Container>
        <Grid container sx={{ paddingTop: 20 }}>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              paddingTop: { md: 25 },
              paddingBottom: { md: 10 },
              px: { xs: 2, md: 8 },
            }}
          >
            <Typography
              gutterBottom
              variant="h4"
              component="h3"
              color="primary.main"
            >
              Fire Fighting System
            </Typography>
            <Typography>
              ADVANTECH provides complete firefighting solutions properly
              designed, supply, installed, and maintained firefighting systems
              successful at reducing fire casualties and property damage. We
              provide a wide variety of firefighting systems which depends on
              each customer and applications we are committed to providing you
              with quality service according to international standards. ​
            </Typography>
            <Typography variant="h6" component="h4" color="primary.main">
              Our firefighting solutions include:
            </Typography>

            <ul>
              <li>Wet & Dry Sprinklers System.</li>
              <li>Foam System.</li>
              <li>Fire Cabinets & Fire Extinguishers.</li>
              <li>Fire Hydrant& Siamese Connection.</li>
              <li>Seamless Black Steel Pipe.</li>
              <li>Threaded Fittings.</li>
              <li>Welded Fittings.</li>
            </ul>
            <Typography variant="h6" component="h4" color="primary.main">
              Fire Supperssion System
            </Typography>
            <ul>
              <li>FM200 System.</li>
              <li>CO2 System.</li>
              <li>Aerosol System.</li>
              <li>NOVEC System.</li>
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{ position: "relative", minHeight: 400 }}
          >
            <Image
              src="/images/advantech_fire_fighting.webp"
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </Grid>
        </Grid>
        <Grid container sx={{ paddingTop: 20 }}>
          <Grid
            item
            xs={12}
            md={5}
            order={{ xs: 2, sm: 2, md: 1, lg: 1 }}
            sx={{ position: "relative", minHeight: 400 }}
          >
            <Image
              src="/images/advantech_fire_alarm.jpg"
              layout="fill"
              objectFit="cover"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              paddingTop: { md: 25 },
              paddingBottom: { md: 10 },

              px: { xs: 2, md: 8 },
            }}
            order={{ xs: 1, sm: 1, md: 2, lg: 2 }}
          >
            <Typography
              gutterBottom
              color="primary.main"
              variant="h4"
              component="h3"
            >
              Fire Alarm System
            </Typography>
            <Typography>
              Fire Alarm System ADVANTECH provides complete fire alarm solutions
              for our clients using the most professional designs, techniques,
              installations, materials & fixing methods. using state of the art
              and world renowned products with premium quality and warranty.
            </Typography>

            <ul>
              <li>Conventional Fire Alarm System</li>
              <li>Conventional Fire Alarm Control Panel Detectors</li>
              <li>Conventional Horns / Bells</li>
            </ul>
            <ul>
              ​<li>Addressable Fire Alarm System</li>
              <li>Fire Alarm Control Panel</li>
              <li>Fire Fighter telephone Panel</li>
              <li>Evacuations Panel</li>
              <li>Detectors</li>
              <li>Modules and notification Appliance Device.</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <Grid container sx={{ paddingTop: 20 }}>
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 2, sm: 2, md: 1, lg: 1 }}
          sx={{ position: "relative", minHeight: 400 }}
        >
          <Image
            src="/images/advantech_video.jpg"
            layout="fill"
            objectFit="cover"
            loading="eager"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 1, sm: 1, md: 2, lg: 2 }}
          sx={{
            paddingTop: { md: 25 },
            paddingBottom: { md: 10 },

            px: { xs: 2, md: 8 },
          }}
        >
          <Typography
            gutterBottom
            color="primary.main"
            variant="h4"
            component="h3"
          >
            Video Surveillance <br />
            and Access Control Systems
          </Typography>
          <Typography>
            ADVANTECH provides you with the technology you need to deliver
            sophisticated security solutions in a wide range of applications;
            including video surveillance solutions and access control solutions;
          </Typography>

          <ul>
            <li>Video Surveillance Solution</li>
            <li>Network Video Recorder NVRs</li>
            <li>IP Cameras</li>
            <li>Video Management Software</li>
          </ul>
          <ul>
            ​<li>Access Control System</li>
            <li>Access Control Panel</li>
            <li>Reader / RFID Readers</li>
            <li>Door Control Device</li>
            <li>Management and control software</li>
          </ul>
        </Grid>
      </Grid>
      <Box
        sx={{
          minHeight: "500px",
          width: "100%",
          backgroundImage: "url('/images/advantech_engineers.webp')",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          position: "relative",
          marginTop: 20,
        }}
      >
        <Box
          sx={{
            top: 0,
            minHeight: "100%",
            width: "100%",
            bgcolor: "#232832bb",
            position: "absolute",
          }}
        >
          <Container sx={{ paddingTop: { md: 20 } }}>
            <Typography variant="h5" component="span" color="primary.light">
              Who We Are
            </Typography>
            <Typography variant="h2" gutterBottom color="primary.main">
              <b>About Our Company</b>
            </Typography>
            <Typography variant="h5" paragraph color="primary.light">
              ADVANTECH engineering services company is a reputable Egyptian
              Engineering consultancy, trading, and installation company based
              in Cairo.​
            </Typography>
            <Typography variant="h5" paragraph color="primary.light">
              ​ ADVANTECH Company has a great outstanding trading and
              contracting experience; it is specialized in Fire fighting
              systems, fire alarm systems, CCTV, Access control, testing,
              commissioning & technical installations.
            </Typography>
          </Container>
        </Box>
      </Box>
      <Container sx={{ paddingTop: 20 }}>
        <Typography
          gutterBottom
          align="center"
          variant="h3"
          color="primary.main"
        >
          Our Projects
        </Typography>
        <Box sx={{ width: "100%", overflow: "hidden" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            <ImageListItem>
              <img src="/images/projects/project_madenty.jpeg" />
              <ImageListItemBar
                title="مشروع مول مدينتي"
                subtitle="مول مدينتي"
              />
            </ImageListItem>
            <ImageListItem>
              <img src="/images/projects/project_abdo_zabal.jpeg" />
              <ImageListItemBar
                title="مشروع مصنع ابو زعبل للاسمدة والكيماويات"
                subtitle="مصنع ابو زعبل للاسمدة والكيماويات"
              />
            </ImageListItem>

            <ImageListItem>
              <img src="/images/projects/project_engineers_syndicate.jpeg" />
              <ImageListItemBar
                title="مشروع نقابه المهندسين"
                subtitle=" نقابه المهندسين"
              />
            </ImageListItem>
            <ImageListItem>
              <img src="/images/projects/project_four_sesson.jpg" />
              <ImageListItemBar
                title="مشروع فندق الفورسيزون شرم الشيخ"
                subtitle="فندق الفورسيزون"
              />
            </ImageListItem>
            <ImageListItem>
              <img src="/images/projects/project_azad.jpeg" />
              <ImageListItemBar
                title="مشروع ازاد التجمع الخامس"
                subtitle="مشروع ازاد"
              />
            </ImageListItem>

            <ImageListItem>
              <img src="/images/projects/project_lamar.jpeg" />
              <ImageListItemBar title="مشروع مصنع لمار" subtitle="مصنع لمار" />
            </ImageListItem>
          </ImageList>
        </Box>
      </Container>
      <Container sx={{ paddingTop: { xs: 30, md: 20 } }}>
        <Divider />
        <Typography
          gutterBottom
          align="center"
          variant="h2"
          color="primary.main"
        >
          <b>Our Partner</b>
        </Typography>
      </Container>

      <Image
        src="/images/advantech_partner.png"
        layout="responsive"
        width="1000"
        height="325"
      />
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
      <style global jsx>{`
        html,
        body,
        #__next {
          height: 100%;
        }
      `}</style>
    </Box>
  );
}
