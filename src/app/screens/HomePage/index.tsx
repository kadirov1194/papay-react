import { Container } from "@mui/material";
import React from "react";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";
import { BestDishes } from "./bestDishes";
import { Advertisement } from "./advertisements";
import { Events } from "./events";
import { Recommendation } from "./recommendation";
import "../../../css/home.css";

export function HomePage() {
  return (
    <div className="homepage">
      <Statistics />
      <TopRestaurants />
      <BestRestaurants />
      <BestDishes />
      <Advertisement />
      <Events />
      <Recommendation />
    </div>
  );
}
