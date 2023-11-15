import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Marginer from "../../components/marginer";

export function Statistics() {
  return (
    <div className="static_frame">
      <Container>
        <Stack
          className="home_statistic"
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          style={{ height: "235px" }}
        >
          <div className="personal_img_left left"></div>

          <Stack className="static_box">
            <Box className="static_num">12</Box>
            <Box className="static_text">Restaurants</Box>
          </Stack>
          <Marginer direction="vertical" height="64" width="2" bg="#e3c08d" />

          <Stack className="static_box">
            <Box className="static_num">8</Box>
            <Box className="static_text">Experience</Box>
          </Stack>
          <Marginer direction="vertical" height="64" width="2" bg="#e3c08d" />

          <Stack className="static_box">
            <Box className="static_num">50+</Box>
            <Box className="static_text">Menu</Box>
          </Stack>
          <Marginer direction="vertical" height="64" width="2" bg="#e3c08d" />

          <Stack className="static_box">
            <Box className="static_num">200+</Box>
            <Box className="static_text">Users</Box>
          </Stack>

          <div className="personal_img_right right"></div>
        </Stack>
      </Container>
    </div>
  );
}
