import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
//importing my own components
import Home from "./Home";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
