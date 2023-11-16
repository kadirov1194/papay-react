import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { CssVarsProvider } from "@mui/joy/styles";
import { CardOverflow, IconButton } from "@mui/joy";
import { Favorite } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export function TopRestaurants() {
  return (
    <div className="top_restaurant_frame">
      <Container>
        <Stack className="top-restaurant_stack">
          <Box className="category_title">Top Restaurants</Box>
          <Stack className="top_restaurants_card-wrapper">
            {/* JOY MIU CARD COMPONENT */}
            <CssVarsProvider>
              {/* TOP RESTAURANT CARD 1 */}
              <Card className="top_restaurants_card">
                <CardCover>
                  <img src="/restaurant/burak.jpg" loading="lazy" alt="" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="title-lg" textColor="#fff">
                    Texas De Brazil
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Typography>
                </CardContent>
                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    className="top_restaurant_like-button"
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Stack sx={{ flexDirection: "row" }}>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100{" "}
                      <VisibilityIcon
                        sx={{ fontSize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                    <Box
                      sx={{
                        width: 2,
                        bgcolor: "divider",
                        ml: "6px",
                        mr: "6px",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>

              {/* TOP RESTAURANT CARD 2 */}
              <Card className="top_restaurants_card">
                <CardCover>
                  <img src="/restaurant/pizza.png" loading="lazy" alt="" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="title-lg" textColor="#fff">
                    Pizza
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Typography>
                </CardContent>
                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    className="top_restaurant_like-button"
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Stack sx={{ flexDirection: "row" }}>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100{" "}
                      <VisibilityIcon
                        sx={{ fontSize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                    <Box
                      sx={{
                        width: 2,
                        bgcolor: "divider",
                        ml: "6px",
                        mr: "6px",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>

              {/* TOP RESTAURANT CARD 3 */}
              <Card className="top_restaurants_card">
                <CardCover>
                  <img src="/restaurant/pizza.png" loading="lazy" alt="" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="title-lg" textColor="#fff">
                    Pizza
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Typography>
                </CardContent>
                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    className="top_restaurant_like-button"
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Stack sx={{ flexDirection: "row" }}>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100{" "}
                      <VisibilityIcon
                        sx={{ fontSize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                    <Box
                      sx={{
                        width: 2,
                        bgcolor: "divider",
                        ml: "6px",
                        mr: "6px",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>

              {/* TOP RESTAURANT CARD 4 */}
              <Card className="top_restaurants_card">
                <CardCover>
                  <img src="/restaurant/burak.jpg" loading="lazy" alt="" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="title-lg" textColor="#fff">
                    burak
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Typography>
                </CardContent>
                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    className="top_restaurant_like-button"
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Stack sx={{ flexDirection: "row" }}>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100{" "}
                      <VisibilityIcon
                        sx={{ fontSize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                    <Box
                      sx={{
                        width: 2,
                        bgcolor: "divider",
                        ml: "6px",
                        mr: "6px",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
