import * as React from "react";
import { ChakraProvider, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid minH="100vh" p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <RouterProvider router={router} />
    </Grid>
  </ChakraProvider>
);
