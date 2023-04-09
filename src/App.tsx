import * as React from "react";
import { ChakraProvider, Grid, theme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid minH="100vh" p={3}>
      <RouterProvider router={router} />
    </Grid>
  </ChakraProvider>
);
