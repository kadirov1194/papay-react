import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export function NavbarOthers(props: any) {
  return (
    <div className="format__others home_navbar">
      <Container>
        <Stack
          flexDirection={"row"}
          className="navbar_config"
          justifyContent={"space-between"}
        >
          <Box className="hover_line">
            <img src="icons/Papay.svg" />
          </Box>

          <Stack
            className="navbar_links"
            flexDirection={"row"}
            justifyContent="space-evenly"
            alignItems={"center"}
          >
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to="/">Bosh Sahifa</NavLink>
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
      </Container>
    </div>
  );
}
