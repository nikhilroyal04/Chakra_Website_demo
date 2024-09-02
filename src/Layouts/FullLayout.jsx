import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export default function FullLayout() {
  return (
    <>
      <Box>
        <Sidebar />
        <Box ml={{ base: 1 }} p="4">
          <Outlet />
          <Footer />
        </Box>
      </Box>
    </>
  );
}
