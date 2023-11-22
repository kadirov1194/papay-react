import {
  Box,
  Container,
  Stack,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export function NavbarHome(props: any) {
  return (
    <div className="format home_navbar">
      <Container>
        <Stack
          flexDirection={"row"}
          className="navbar_config"
          justifyContent={"space-between"}
        >
          <Box className="hover_line">
            <img src="/icons/papay.svg" />
          </Box>

          <Stack
            className="navbar_links"
            flexDirection={"row"}
            justifyContent="space-evenly"
            alignItems={"center"}
          >
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to="/" activeClassName="underline">
                Bosh Sahifa
              </NavLink>
            </Box>
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to="/restaurant" activeClassName="underline">
                Oshxona
              </NavLink>
            </Box>
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to="/orders" activeClassName="underline">
                Buyurtma
              </NavLink>
            </Box>
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to="/community" activeClassName="underline">
                Jamiyat
              </NavLink>
            </Box>
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to="/help" activeClassName="underline">
                Yordam
              </NavLink>
            </Box>

            {/* SHOPPING CART */}
            <Box>
              <Box className="hover_line">
                <IconButton
                  aria-label="cart"
                  id="basic_button"
                  aria-controls={undefined}
                  aria-haspopup="true"
                  aria-expanded={undefined}
                />
                <Badge badgeContent={3} color="secondary">
                  <img src="/icons/shopping-cart.svg" alt="Shopping Cart" />
                </Badge>
              </Box>
            </Box>
            <Box>
              <Button
                className="hover-line"
                variant="contained"
                style={{
                  width: "77pxpx",
                  height: "36px",
                  background: "#1976d2",
                  color: "#fff",
                }}
              >
                KIRISH
              </Button>
            </Box>
          </Stack>
        </Stack>

        {/* HEADER INFORMATION */}
        <Stack className="head_information" justifyContent={"row"}>
          <Stack
            justifyContent={"column"}
            style={{ marginTop: "86px", marginLeft: "24px" }}
          >
            <Box className="welcom_icon">
              <img src="/icons/welcome.svg" />
            </Box>
            <Box className="define_restaurant">
              The Authentic Restaurant & Cafe
            </Box>
            <Box className="timeline_service">24 soat xizmatingizdamiz.</Box>
            <Box sx={{ mt: "90px" }}>
              <Button
                variant="contained"
                style={{
                  width: "210px",
                  height: "60px",
                  background: "#1976d2",
                  color: "#fff",
                }}
              >
                RO'YHATDAN O'TISH
              </Button>
            </Box>
          </Stack>
          <Box className="big_img"></Box>
        </Stack>
      </Container>
    </div>
  );
}
