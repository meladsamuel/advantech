import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#f2a320",
    },
    secondary: {
      main: "#232832",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
