import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Link from "../../src/Link";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Image from "next/image";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  const triggerSlide = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!triggerSlide}>
      {React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        color: trigger ? "secondary" : "transparent",
      })}
    </Slide>
  );
}

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="transparent">
          <Toolbar>
            <Typography
              variant="h6"
              color="primary.main"
              component="span"
              sx={{ flexGrow: 1 }}
            >
              <Link href="/">ADVANTECH</Link>
            </Typography>

            <ButtonGroup size="large">
              <Link href="/contact">
                <Button>Contact</Button>
              </Link>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* <Toolbar /> */}
    </React.Fragment>
  );
}
