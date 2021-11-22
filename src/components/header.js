import * as React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
export default function Header(props) {
  const { children } = props;
  return (
    <Card sx={{ bgcolor: "secondary.main", borderRadius: 0, py: 4 }}>
      {children}
    </Card>
  );
}
